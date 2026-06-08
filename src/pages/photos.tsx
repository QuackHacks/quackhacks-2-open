import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { DownloadIcon, ExternalLinkIcon, XIcon } from 'lucide-react';
import { motion } from 'motion/react';

import HeaderBg2 from '../assets/1.1.jpg';

type GalleryPhoto = {
  id: string;
  title: string;
  album?: string;
  width: number;
  height: number;
  aspectRatio: number;
  urls: {
    full: string;
    thumb480: string;
    thumb1200: string;
  };
};

type GalleryManifest = {
  generatedAt: string;
  photoCount: number;
  photos: GalleryPhoto[];
};

type PhotoFrame = Pick<DOMRect, 'left' | 'top' | 'width' | 'height'>;

type OpeningPhotoTransition = {
  index: number;
  from: PhotoFrame;
  to: PhotoFrame;
};

const photosPerPage = 24;
const photoHoverStackMin = 20;
const photoHoverStackMax = 60;
let photoHoverStack = 20;
const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];
const viewportOpts = { once: true, margin: '-80px 0px' as const };
const manifestUrl =
  import.meta.env.VITE_PHOTO_GALLERY_MANIFEST_URL ??
  'https://photo.quackhacks.org/qh2/photos/manifest.json';

const photoCardVariants = {
  hidden: {
    opacity: 0,
    y: 42,
    scale: 0.96,
    filter: 'grayscale(1) blur(6px)',
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'grayscale(0) blur(0px)',
    transition: {
      duration: 0.7,
      delay: (index % 12) * 0.04,
      ease: easeOut,
    },
  }),
};

function formatTitle(title: string) {
  return title.replace(/[-_]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function getDownloadFilename(photo: GalleryPhoto) {
  const photoUrl = new URL(photo.urls.full);
  const extension = photoUrl.pathname.split('.').pop() ?? 'jpg';
  return `${formatTitle(photo.title) || photo.id}.${extension}`;
}

function triggerDownload(blob: Blob, filename: string) {
  const objectUrl = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = objectUrl;
  link.download = filename;
  link.style.display = 'none';
  document.body.appendChild(link);
  link.click();
  link.remove();

  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 0);
}

function getNextPhotoZIndex() {
  photoHoverStack =
    photoHoverStack >= photoHoverStackMax ? photoHoverStackMin + 1 : photoHoverStack + 1;
  return photoHoverStack;
}

function getCenteredPhotoFrame(photo: GalleryPhoto): PhotoFrame {
  const aspectRatio = photo.width / photo.height;
  const horizontalChrome = window.innerWidth >= 768 ? 152 : 108;
  const maxWidth = Math.max(160, window.innerWidth - horizontalChrome);
  const contentTop = 56;
  const maxHeight = Math.max(160, window.innerHeight - contentTop - 32);

  let width = maxWidth;
  let height = width / aspectRatio;

  if (height > maxHeight) {
    height = maxHeight;
    width = height * aspectRatio;
  }

  return {
    left: (window.innerWidth - width) / 2,
    top: contentTop + (window.innerHeight - contentTop - height) / 2,
    width,
    height,
  };
}

function PhotoGallery({ photos }: { photos: GalleryPhoto[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [openingTransition, setOpeningTransition] = useState<OpeningPhotoTransition | null>(null);
  const [settledFrame, setSettledFrame] = useState<PhotoFrame | null>(null);
  const [isPhotoSettled, setIsPhotoSettled] = useState(false);
  const [isFullPhotoLoaded, setIsFullPhotoLoaded] = useState(false);
  const [visibleCount, setVisibleCount] = useState(photosPerPage);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const visiblePhotos = useMemo(() => photos.slice(0, visibleCount), [photos, visibleCount]);
  const hasMorePhotos = visibleCount < photos.length;
  const activePhoto = activeIndex === null ? null : photos[activeIndex] ?? null;
  const activePosition = activeIndex ?? 0;
  const activeOpeningTransition =
    activeIndex !== null && openingTransition?.index === activeIndex ? openingTransition : null;
  const activeFrame = activeOpeningTransition?.to ?? settledFrame;
  const shouldShowFullPhoto = isPhotoSettled && isFullPhotoLoaded;

  const closePhoto = useCallback(() => {
    setActiveIndex(null);
    setOpeningTransition(null);
    setSettledFrame(null);
    setIsPhotoSettled(false);
    setIsFullPhotoLoaded(false);
  }, []);

  const movePhoto = useCallback(
    (nextIndex: number) => {
      const boundedIndex = Math.min(Math.max(nextIndex, 0), photos.length - 1);
      const photo = photos[boundedIndex];
      if (!photo) return;

      setOpeningTransition(null);
      setSettledFrame(getCenteredPhotoFrame(photo));
      setIsPhotoSettled(true);
      setIsFullPhotoLoaded(false);
      setActiveIndex(boundedIndex);
    },
    [photos],
  );

  const openPhoto = useCallback(
    (index: number, from: PhotoFrame) => {
      const photo = photos[index];
      if (!photo) return;

      const to = getCenteredPhotoFrame(photo);

      setOpeningTransition({
        index,
        from,
        to,
      });
      setSettledFrame(to);
      setIsPhotoSettled(false);
      setIsFullPhotoLoaded(false);
      setActiveIndex(index);
    },
    [photos],
  );

  const downloadPhoto = useCallback(async (photo: GalleryPhoto) => {
    const filename = getDownloadFilename(photo);

    try {
      const response = await fetch(photo.urls.full);
      if (!response.ok) throw new Error('Photo unavailable');

      const blob = await response.blob();
      triggerDownload(blob, filename);
    } catch {
      window.alert('Download unavailable. The photo host must allow CORS for direct downloads.');
    }
  }, []);

  useEffect(() => {
    if (!activePhoto || activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closePhoto();
      if (event.key === 'ArrowLeft') movePhoto(activePosition - 1);
      if (event.key === 'ArrowRight') movePhoto(activePosition + 1);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeIndex, activePhoto, activePosition, closePhoto, movePhoto]);

  useEffect(() => {
    if (!activePhoto) return;

    let isCancelled = false;
    const image = new window.Image();
    const markFullPhotoReady = async () => {
      try {
        await image.decode?.();
      } catch {
        // Cached/cross-origin images can reject decode after load in some browsers.
      }
      if (!isCancelled) setIsFullPhotoLoaded(true);
    };

    image.onload = () => {
      void markFullPhotoReady();
    };
    image.onerror = () => {
      if (!isCancelled) setIsFullPhotoLoaded(true);
    };
    image.src = activePhoto.urls.full;

    return () => {
      isCancelled = true;
    };
  }, [activePhoto]);

  useEffect(() => {
    setActiveIndex(null);
    setOpeningTransition(null);
    setSettledFrame(null);
    setIsPhotoSettled(false);
    setIsFullPhotoLoaded(false);
    setVisibleCount(photosPerPage);
  }, [photos]);

  useEffect(() => {
    if (!hasMorePhotos) return;

    const target = loadMoreRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      entries => {
        if (!entries[0]?.isIntersecting) return;
        setVisibleCount(count => Math.min(count + photosPerPage, photos.length));
      },
      { rootMargin: '700px 0px' },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [hasMorePhotos, photos.length, visibleCount]);

  if (!photos.length) {
    return (
      <div className='flex min-h-80 flex-col items-center justify-center border border-neutral-950/15 bg-white/80 p-10 text-center'>
        <h2 className='[font-family:var(--font-title)] text-3xl font-bold text-neutral-950'>
          No photos yet
        </h2>
        <p className='mt-2 max-w-md text-sm leading-6 text-neutral-600'>
          The manifest loaded, but it does not contain any photos.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className='grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {visiblePhotos.map((photo, index) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            index={index}
            onOpen={from => openPhoto(index, from)}
          />
        ))}
      </div>

      {hasMorePhotos ? <div ref={loadMoreRef} className='h-10' aria-hidden='true' /> : null}

      {activePhoto && activeIndex !== null ? (
        <div
          role='dialog'
          aria-modal='true'
          className='fixed inset-0 z-[10000] flex animate-[qh-modal-in_180ms_ease-out] flex-col bg-neutral-950/95 text-white'
        >
          <div className='flex h-14 items-center justify-between border-b border-white/10 px-4'>
            <p className='[font-family:var(--font-subtitle)] text-[10px] uppercase tracking-[0.25em] text-white/45'>
              {activeIndex + 1} / {photos.length}
            </p>

            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => downloadPhoto(activePhoto)}
                className='inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20'
                aria-label='Download photo'
              >
                <DownloadIcon className='h-4 w-4' />
              </button>
              <a
                href={activePhoto.urls.full}
                target='_blank'
                rel='noreferrer'
                className='inline-flex h-10 w-10 cursor-pointer items-center justify-center border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20'
                aria-label='Open full photo'
              >
                <ExternalLinkIcon className='h-4 w-4' />
              </a>
              <button
                type='button'
                onClick={closePhoto}
                className='inline-flex h-10 w-10 items-center justify-center border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20'
                aria-label='Close'
              >
                <XIcon className='h-4 w-4' />
              </button>
            </div>
          </div>

          <div className='grid min-h-0 flex-1 grid-cols-[auto_1fr_auto] items-center gap-2 px-3 py-4 md:gap-4 md:px-5'>
            <button
              type='button'
              onClick={() => movePhoto(activeIndex - 1)}
              disabled={activeIndex === 0}
              className='flex h-12 w-10 items-center justify-center border border-white/15 bg-white/10 [font-family:var(--font-subtitle)] text-xl text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 md:w-12'
              aria-label='Previous photo'
            >
              &lt;
            </button>

            <div className='relative flex h-full min-h-0 items-center justify-center'>
              {activeFrame ? (
                <motion.div
                  key={`opening-frame-${activePhoto.id}`}
                  className='pointer-events-none fixed overflow-hidden bg-neutral-200 shadow-[0_28px_90px_rgba(0,0,0,0.55)]'
                  style={{
                    left: activeOpeningTransition?.from.left ?? activeFrame.left,
                    top: activeOpeningTransition?.from.top ?? activeFrame.top,
                    width: activeOpeningTransition?.from.width ?? activeFrame.width,
                    height: activeOpeningTransition?.from.height ?? activeFrame.height,
                    zIndex: 10002,
                  }}
                  initial={{
                    x: 0,
                    y: 0,
                    width: activeOpeningTransition?.from.width ?? activeFrame.width,
                    height: activeOpeningTransition?.from.height ?? activeFrame.height,
                    opacity: 1,
                  }}
                  animate={{
                    x: activeOpeningTransition
                      ? activeOpeningTransition.to.left - activeOpeningTransition.from.left
                      : 0,
                    y: activeOpeningTransition
                      ? activeOpeningTransition.to.top - activeOpeningTransition.from.top
                      : 0,
                    width: activeFrame.width,
                    height: activeFrame.height,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.36, ease: easeOut }}
                  onAnimationComplete={() => setIsPhotoSettled(true)}
                >
                  <motion.img
                    src={activePhoto.urls.thumb1200}
                    alt={formatTitle(activePhoto.title)}
                    className='absolute inset-0 h-full w-full object-cover'
                    animate={{ opacity: shouldShowFullPhoto ? 0 : 1 }}
                    transition={{ duration: 0.22, ease: easeOut }}
                  />
                  <motion.img
                    src={activePhoto.urls.full}
                    alt=''
                    aria-hidden='true'
                    className='absolute inset-0 h-full w-full object-cover'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: shouldShowFullPhoto ? 1 : 0 }}
                    transition={{ duration: 0.22, ease: easeOut }}
                  />
                </motion.div>
              ) : null}

              {!activeFrame ? (
                <motion.img
                  key={`thumb-${activePhoto.id}`}
                  src={activePhoto.urls.thumb1200}
                  alt={formatTitle(activePhoto.title)}
                  className='mx-auto max-h-full min-h-0 max-w-full object-contain'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: shouldShowFullPhoto ? 0 : 1 }}
                  transition={{ duration: 0.18, ease: easeOut }}
                />
              ) : null}
              {!activeFrame && shouldShowFullPhoto ? (
                <motion.img
                  key={`full-${activePhoto.id}`}
                  src={activePhoto.urls.full}
                  alt={formatTitle(activePhoto.title)}
                  className='absolute mx-auto max-h-full min-h-0 max-w-full object-contain'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.22, ease: easeOut }}
                />
              ) : null}
            </div>

            <button
              type='button'
              onClick={() => movePhoto(activeIndex + 1)}
              disabled={activeIndex === photos.length - 1}
              className='flex h-12 w-10 items-center justify-center border border-white/15 bg-white/10 [font-family:var(--font-subtitle)] text-xl text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 md:w-12'
              aria-label='Next photo'
            >
              &gt;
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}

function PhotoCard({
  photo,
  index,
  onOpen,
}: {
  photo: GalleryPhoto;
  index: number;
  onOpen: (from: PhotoFrame) => void;
}) {
  const [isHovering, setIsHovering] = useState(false);
  const [isRaised, setIsRaised] = useState(false);
  const [zIndex, setZIndex] = useState(0);
  const hoverReleaseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (hoverReleaseTimerRef.current !== null) window.clearTimeout(hoverReleaseTimerRef.current);
    };
  }, []);

  return (
    <motion.div
      className='relative aspect-4/3 will-change-transform'
      style={{ zIndex: isRaised ? zIndex : 0 }}
      custom={index}
      initial='hidden'
      whileInView='visible'
      viewport={viewportOpts}
      variants={photoCardVariants}
    >
      <motion.button
        type='button'
        onClick={event => onOpen(event.currentTarget.getBoundingClientRect())}
        onHoverStart={() => {
          if (hoverReleaseTimerRef.current !== null) window.clearTimeout(hoverReleaseTimerRef.current);
          setIsRaised(true);
          setZIndex(getNextPhotoZIndex());
          setIsHovering(true);
        }}
        onHoverEnd={() => {
          setIsHovering(false);
          hoverReleaseTimerRef.current = window.setTimeout(() => {
            setIsRaised(false);
            hoverReleaseTimerRef.current = null;
          }, 320);
        }}
        animate={{ scale: isHovering ? 1.1 : 1 }}
        whileTap={{ scale: 0.96 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
        className='group absolute inset-0 block w-full cursor-default overflow-hidden bg-neutral-200 text-left will-change-transform'
      >
        <img
          src={photo.urls.thumb1200}
          srcSet={`${photo.urls.thumb480} 480w, ${photo.urls.thumb1200} 1200w`}
          sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
          alt={formatTitle(photo.title)}
          loading='lazy'
          width={photo.width}
          height={photo.height}
          className='h-full w-full bg-neutral-200 object-cover'
        />
      </motion.button>
    </motion.div>
  );
}

const PhotosPage: React.FC = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    let isCancelled = false;

    async function loadManifest() {
      try {
        const response = await fetch(manifestUrl, { cache: 'no-store' });
        if (!response.ok) throw new Error('Manifest unavailable');

        const manifest = (await response.json()) as GalleryManifest;
        if (!Array.isArray(manifest.photos)) throw new Error('Invalid manifest');

        if (!isCancelled) {
          setPhotos(manifest.photos);
          setStatus('ready');
        }
      } catch {
        if (!isCancelled) setStatus('error');
      }
    }

    void loadManifest();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <main
      className='
        min-h-screen
        overflow-x-hidden
        bg-size-[530%]
        md:bg-size-[300%]
        lg:bg-size-[250%]
        xl:bg-size-[150%]
        2xl:bg-size-[200%]
      '
      style={{
        backgroundImage: `url(${HeaderBg2})`,
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <section className='relative mx-auto w-full max-w-[90rem] px-6 pb-20 pt-24 text-left md:px-12'>
        <h1 className='[font-family:var(--font-title)] text-4xl font-bold leading-none text-neutral-900 md:text-6xl'>
          Photo Gallery
        </h1>
        <p className='mt-3 max-w-xl [font-family:var(--font-body)] text-sm text-neutral-600 md:text-base'>
          Archived photos from QuackHacks 2.
        </p>

        <div className='mt-10'>
          {status === 'loading' ? (
            <p className='[font-family:var(--font-subtitle)] text-xs uppercase tracking-[0.25em] text-neutral-700'>
              Loading photos
            </p>
          ) : null}

          {status === 'error' ? (
            <div className='border border-neutral-950/15 bg-white/80 p-8'>
              <h2 className='[font-family:var(--font-title)] text-3xl font-bold text-neutral-950'>
                Photos unavailable
              </h2>
              <p className='mt-3 max-w-2xl text-sm leading-6 text-neutral-600'>
                The photo manifest could not be loaded. Confirm that
                {' '}
                <code className='border border-neutral-200 bg-neutral-50 px-1.5 py-0.5 text-xs'>
                  {manifestUrl}
                </code>
                {' '}
                is public.
              </p>
            </div>
          ) : null}

          {status === 'ready' ? <PhotoGallery photos={photos} /> : null}
        </div>
      </section>
    </main>
  );
};

export default PhotosPage;

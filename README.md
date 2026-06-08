# QuackHacks 2 Archive

Static archive of the QuackHacks 2 site.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Photo Gallery

Build public S3/CloudFront-ready originals, thumbnails, and manifest from local originals:

```bash
PHOTO_GALLERY_PUBLIC_BASE=https://photo.quackhacks.org/qh2/photos
PHOTO_GALLERY_MANIFEST_URL=https://photo.quackhacks.org/qh2/photos/manifest.json
```

Then build public S3/CloudFront-ready originals, thumbnails, and manifest from local originals:

```bash
npm run photos:build -- --input ./photos/originals/qh2-deduped --output ./dist/qh2-photos/qh2/photos --public-base https://photo.quackhacks.org/qh2/photos --full-prefix originals --thumb-prefix thumbs
```

Dry-run the S3 upload:

```bash
scripts/upload-qh2-photos-s3.sh --dry-run
```

Execute the S3 upload:

```bash
scripts/upload-qh2-photos-s3.sh --execute
```

The gallery route is `/photos`. In S3, originals stay under `qh2/photos/originals/`; generated WebP thumbnails live under `qh2/photos/thumbs/480/` and `qh2/photos/thumbs/1200/`.

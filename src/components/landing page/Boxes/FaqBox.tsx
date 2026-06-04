import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #D0D9B5`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(122, 137, 103, 1)', //controls the color of the boxes unopened 
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(247, 34, 34, 0.05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid #D0D9B5',
  backgroundColor: '#D0D9B5',
}));

export function FaqBox() {
  const [expanded, setExpanded] = React.useState<string | false>('');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <div style={{
      borderRadius: '20px',
      border: `2px solid #D0D9B5`,
      overflow: 'hidden',
      width: '90%',
      maxWidth: '1500px',
      margin: '0 auto',
    }}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component="span">What is a Hackathon?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A Hackathon is an invention marathon for tech professionals to connect and show off their skills via building software and 
          projects in a fast-paced and collaborative environment.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component="span">What if I don’t have a team or idea?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Our Discord server is an amazing place to start meeting fellow hackers and brainstorming potential projects. 
          The event starts off with a group formation mixer! Group formation 
          will happen prior to the event. Do not let this prevent you from signing up!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component="span">What kind of project can I make?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Anything you can dream of! Some past QuackHacks projects include games, apps, websites, and 
          productivity tools! We encourage exploring your interests and freedom in project selection. 
          We do NOT allow expansion of past projects, no matter who built it. 
          Open source libraries and frameworks are allowed. 
          Everything presented to judges must be your own original work developed during the hackathon. 
          Our team is happy to answer questions!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component="span">What if I don’t know how to code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          QuackHacks is a beginner-friendly event, and we welcome all majors and skill levels. 
          We will have workshops during the event to support hackers with topics including: GitHub, AI Tooling, etc. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography component="span">What does it cost?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Your weekend, energy, and creativity! That’s all it costs. 
            Thanks to the support of our amazing sponsors, QuackHacks is completely free to 
            participate in. No fees, just learning, building, and having fun.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography component="span">What about prizes?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
         QuackHacks is all about collaboration and learning, not just competition. 
         While we’ll be offering exciting prizes to recognize outstanding hackers, our 
         main focus is creating an inclusive, enriching experience for everyone. 
         Prize details will be announced in the coming weeks, 
         but most of our resources go toward benefits that support all hackers.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
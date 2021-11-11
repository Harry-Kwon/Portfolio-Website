import image_oasis from 'data/oasis/oasis-1.png';
import image_ebs from 'data/swink/swink-1.png';
import image_whenisraid from 'data/whenisraid/whenisraid-1.png';
import image_memory from 'data/memory/memory-1.png';
import image_portfolio from 'data/website/portfolio_site.png';

import { Typography, Stack, Container } from '@mui/material';
import { SummaryProps, Summary } from './Summary';


const projects = [
  {
    image: image_whenisraid,
    title: "WhenIsRaid Scheduler",
    tagline: "Cross-timezone scheduling webapp.",
    responsibilities: ["Javascript", "React", "HTML", "CSS", "Github Pages"],
    summary: `
      Answering "What time are we meeting?" to people in 7 different timezones can be as easy as sharing a link!
      I built this webapp as a simple solution to share meeting times with groups across multiple timezones.
      It provides a clean and easy-to-use interface to pick a date and time
      with a responsive timer showing how much time is left.
    `,
    link: "https://whenisraid.com/",
    github: "https://github.com/Harry-Kwon/when-is-raid"
  },
  {
    image: image_portfolio,
    title: "Portfolio Website",
    tagline: "This website!",
    responsibilities: ["Typescript", "React", "HTML", "CSS", "Docker", "Nginx", "Reactive Design"],
    summary: `
    I built this website to showcase my work!
    I used React with Typescript and CSS to build this website,
    and I deployed it in a DigitalOcean virtual machine using Docker and Nginx.
    I hope to add many more great projects to my portfolio. Maybe yours could be next?
    `,
    link: "https://harrykwon.dev",
    github: "https://github.com/Harry-Kwon/Portfolio-Website"
  },
  {
    image: image_oasis,
    title: "OASIS Image Editor",
    tagline: "Ophthamology image analysis software built for CWRU's Biomedical Imaging Lab.",
    responsibilities: ["Python", "Qt", "OpenCV", "SQL Server", "Software Documentation"],
    summary: `I worked with researchers at 
    Case Western Reserve University's Biomedical Imagaging Lab
    to create an image analysis tool with remote file storage using Python, Qt, and SQL Server.`,
    link: "https://engineering.case.edu/ebme/bmil"
  },
  {
    image: image_ebs,
    title: "EBS Chomokdal",
    tagline: "Educational games for Android and iOS built at Swink.",
    responsibilities: ["C#", "Unity Engine", "Game Development", "Responsive Design"],
    summary: `
      I developed education games as a Unity developer at Swink.
      In addition to implementing games in the Unity engine using C#,
      I was also responsible for designing and testing a UI that would be responsive across different devices.
    `,
    // link: "http://swink.co.kr/swink/#works",
    link: "http://chomokdal.ebslang.co.kr/regist/kidRegCourseList.ebs?brand_cd=BRD270&tot_menu_id=2721#this",
  },
  {
    image: image_memory,
    title: "Memory Game",
    tagline: "A memory game built for mobile and web platforms.",
    responsibilities: ["C#", "Unity Engine", "Game Development"],
    summary: `
      A "Simon-Says" memory game clone built in Unity and C#.
    `,
    link: "https://chromatk.itch.io/memory-game",
    github: "https://github.com/Harry-Kwon/Games-Unity-MemoryGame"
  },
]

const Featured = () => {
  const getProjects = () => {
    return (
      projects.map((props: SummaryProps) => (
        <Summary {...props} />
      ))
    )
  }

  return (
    <Container
      id="Featured"
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyItems: 'center',
        pb: '5vh',
      }}
    >
      <Typography variant='h2' color={'primary'} sx={{ margin: 'auto', p: '0.5em' }}>
        Featured Work
      </Typography>
      <Stack spacing={4}>
        {getProjects()}
      </Stack>
    </Container>
  )
}

export default Featured;
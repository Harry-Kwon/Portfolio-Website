import Box from '@mui/material/Box';
import githubIcon from 'data/icons8-github.svg';
import linkedinIcon from 'data/icons8-linkedin.svg';
import Resume from '../data/Resume.pdf';

import Typography from '@mui/material/Typography';

const Footer = ({ sx={} }) => {
  return(
    <Box sx={{
      minWidth: "100%",
      boxSizing: "border-box",
      px: "10%",
      py: "10px",
      bgcolor: "#000",
      display: 'flex',
      alignItems: 'center',
      ...sx
    }}>
      <Typography variant="caption" color="#fff">
        © 2021 Harry Kwon.
      </Typography>
      <div style={{margin: 'auto'}}></div>
      <a href="https://www.linkedin.com/in/harry-kwon"
        style={{margin: '2px'}}
      >
        <img src={linkedinIcon} alt="Linkedin"/>
      </a>
      <a href="https://github.com/Harry-Kwon"
        style={{margin: '2px'}}
      >
        <img src={githubIcon} alt="Github"/>
      </a>
    </Box>
  )
};

export default Footer;
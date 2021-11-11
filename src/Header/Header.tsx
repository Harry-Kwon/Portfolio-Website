import { Container, AppBar, Button, Toolbar } from '@mui/material';

import githubIcon from 'data/icons8-github.svg';
import linkedinIcon from 'data/icons8-linkedin.svg';
import Resume from 'data/Resume.pdf';
import logoImage from 'data/glider.svg';

import { Link } from 'react-router-dom';


export default function Header() {
  return (
    <header>
      <Container
        sx={{
          minWidth: "100%",
          minHeight: "10vh",
          bgcolor: "primary.main",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <AppBar
          position="relative"
          style={{ boxShadow: 'none' }}>
          <Toolbar sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
          }}>
            <Button component={Link} to={'/'} color="inherit">
              Harry Kwon
            </Button>
            <div style={{ margin: 'auto' }}></div>
            <div style={{maxWidth: '100%'}}>
              <Button href="/#Featured" color="inherit">Portfolio</Button>
              <Button href={Resume} color="inherit">Resume</Button>
              <Button component={Link} to={'/contact'} color="inherit">Contact</Button>
            </div>
            <div>
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
            </div>
          </Toolbar>
        </AppBar>
      </Container>
    </header>
  )
}
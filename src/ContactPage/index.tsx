import React from 'react';
import Header from 'Header/Header';
import Footer from 'Footer/Footer';

import Box from '@mui/material/Box';
import { Typography, Link } from '@mui/material';

import mailIcon from 'data/mail.svg';
import githubIcon from 'data/icons8-github.svg';
import linkedinIcon from 'data/icons8-linkedin.svg';

import './contactPageStyles.css';

const contacts = [
  {
    icon: mailIcon,
    text: 'harrykwon20@gmail.com',
    link: 'mailto:harrykwon20@gmail.com'
  },
  {
    icon: githubIcon,
    text: 'github.com/Harry-Kwon',
    link: 'https://github.com/Harry-Kwon'
  },
  {
    icon: linkedinIcon,
    text: 'linkedin.com/in/harry-kwon',
    link: 'https://linkedin.com/in/harry-kwon'
  }
]

const ContactPage: React.FC = () => {

  const getContacts = () => (
    contacts.map(({icon, text, link}) => (
      <React.Fragment>
        <img src={icon}></img>
          <Link
            href={link}
            className="contactText"
            variant="subtitle1"
            color="secondary">
              {text}
          </Link>
      </React.Fragment>
    ))
  )

  return(
    <div>
      <Header/>
      <main>
        <Box sx={{
          height: '80vh',
          bgcolor: 'primary.main',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
        }}>
          <Typography variant="h2" color="#fff">
            Contact Me!
          </Typography>
          <div className="contactsGrid">
            {getContacts()}
          </div>
        </Box>
      </main>
      <Footer sx={{height: '10vh'}}/>
    </div>
  )
};

export default ContactPage;
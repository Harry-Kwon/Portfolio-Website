import React from 'react';
import { Button, Container } from '@mui/material';
import Preface from './Preface';
import Introduction from './Introduction';

import DownIcon from 'data/down_arrow.svg';

import './TitleStyles.css';

const Title: React.FC = () => {
  return(
    <Container
      sx={{
        minWidth: "100%",
        minHeight: "90vh",
        bgcolor: "primary.main",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingBottom: "10px"
      }}
    >
      <Container maxWidth="lg">
        <Preface/>
        <Introduction/>
        <div style={{height: '50px'}}></div>
        <div style={{
          height: '50px',
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button
            className="down-button"
            aria-label="down"
            href="#Featured"
            sx={{
              height: "50px",
            }}>
            <img src={DownIcon}/>
          </Button>
        </div>
      </Container>
    </Container>
  )
}

export default Title;
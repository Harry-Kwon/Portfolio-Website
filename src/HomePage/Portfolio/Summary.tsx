import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import { IconButton } from "@mui/material";
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";

import "./Summary.css";


export interface SummaryProps {
  image: string;
  title: string;
  tagline: string;
  responsibilities: string[];
  summary: string;
  link?: string;
  github?: string;
}

export const Summary = (props: SummaryProps) => {
  const { image, title, tagline, responsibilities, summary, link, github } = {link: undefined, github: undefined, ...props}
  const [expand, setExpand] = useState(false);
  console.log(responsibilities)

  const handleExpand = () => {
    setExpand(!expand);
  }

  const getLinks = () => {
    return(
      <div className="links">
        {github ? 
          <Button href={github} variant="outlined">
            Github
          </Button> 
          : <div></div>}
        {link ?
         <Button href={link} variant="outlined">
           View Site
          </Button>
          : <div></div>}
      </div>
    )
  }

  return (
    <Card raised={true}>
      <Box sx={{display: 'flex', p: 0}}>
        <div className="card-cover">
          <CardMedia
            component="img"
            sx={{
              width: '100%',
              objectFit: 'scale-down'
            }}
            image={image}
            alt={title}
          />
          <div className='card-cover-text'>
            <CardContent sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
              flexDirection: 'column',
            }}>
              <Typography variant="h4" color="#000">
                {title}
              </Typography>
              <Typography variant="subtitle1" color="#111">
                {tagline}
              </Typography>
            </CardContent>
            <CardActions>
              <IconButton onClick={handleExpand}>
                <ExpandMoreIcon/>
              </IconButton>
            </CardActions>
          </div>
        </div>
      </Box>
      <Collapse in={expand}>
        <Box className="summary-dropdown">
          <div className="responsibilities">
            <Typography variant="subtitle1" color="#000">
              Responsibilities
            </Typography>
            <ul>
              {responsibilities.map(s => (
                <Typography variant="subtitle2" color="#222" sx={{width:'mincontent'}}>
                  <li>
                    {s}
                  </li>
                </Typography>
              ))}
            </ul>
          </div>
          <div className="summary">
            <Typography variant="subtitle1" color="#000">
              {summary}
            </Typography>
          </div>
          {getLinks()}
        </Box>
      </Collapse>
    </Card>
  )
}
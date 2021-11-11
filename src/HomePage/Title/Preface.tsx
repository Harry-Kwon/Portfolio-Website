import React from 'react';
import { Box, Card, CardContent, CardMedia, Container, Stack, Typography, useTheme } from '@mui/material'
import { flexbox } from '@mui/system';

import image1 from 'data/pre1-stack.svg';
import image2 from 'data/pre2-box.svg';
import image3 from 'data/pre3-ruler.svg';
import image4 from 'data/pre4-heart.svg';

import './Preface.css';

function Preface() {
  const theme = useTheme();

  return (
    <div className="preface-container">
      <IconGroup
        image={image1}
        subtitle="Full Stack Developer"
        message="full stack"
      />
      <IconGroup
        image={image2}
        subtitle="Out of the Box Innovator"
        message="full stack"
      />
      <IconGroup
        image={image3}
        subtitle="Precise Engineer"
        message="full stack"
      />
      <IconGroup
        image={image4}
        subtitle="Passionate Coder"
        message="full stack"
      />
    </div>
  );
}

interface IconGroupProps {
  image: string,
  subtitle: string,
  message: string
}

const IconGroup = ({ image, subtitle, message }: IconGroupProps) => {
  return (
    <Box className="preface-item">
      <img src={image} alt="" height="100px" />
      <Typography
        variant="subtitle1"
        color={'text.secondary'}
        sx={{ textAlign: "center", flex: "1", overflow: "visible" }}>
        {subtitle}
      </Typography>
    </Box>
  );
}

export default Preface;
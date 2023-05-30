import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import './LandingPage.css';
import dp from './assets/dp.png';
import { useInView } from "react-intersection-observer";

const LandingPage = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1, // Adjust the threshold as per your preference
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const finalPosition = isMobile ? 'center' : '-50px';

  return (
    <Box>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={6} sm={12}>
          <Typography
            variant="h2"
            className='white-text'
            ref={ref}
            sx={{
              opacity: inView ? 1 : 0,
              transform: `translateX(${inView ? 0 : finalPosition})`,
              transition: "opacity 0.8s ease, transform 0.8s ease",
              textAlign: isMobile ? 'center' : 'initial',
            }}
          >
            Hi,
          </Typography>
          <Typography
            variant="h3"
            className='lightblue-text'
            sx={{
              opacity: inView ? 1 : 0,
              transform: `translateX(${inView ? 0 : finalPosition})`,
              transition: "opacity 0.8s ease, transform 0.8s ease",
              textAlign: isMobile ? 'center' : 'initial',
            }}
          >
            I'm Cajetan Rodrigues
          </Typography>
          <Typography
            variant="h3"
            className='white-text'
            sx={{
              opacity: inView ? 1 : 0,
              transform: `translateX(${inView ? 0 : "-50px"})`,
              transition: "opacity 0.8s ease, transform 0.8s ease",
              marginBottom: '20px',
              textAlign: isMobile ? 'center' : 'initial',
            }}
          >
            Full Stack Software Developer
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} sm={12} className="image-container">
          <img
            ref={ref}
            className="image"
            src={dp}
            alt="n"
            sx={{
              opacity: inView ? 1 : 0,
              transform: `translateX(${inView ? 0 : "-50px"})`,
              transition: "opacity 0.8s ease, transform 0.8s ease",
              borderRadius: "20px",
              my: "8px", // Add margin top and bottom
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LandingPage;

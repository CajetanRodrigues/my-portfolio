import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';
import './LandingPage.css';
import dp from './assets/dp.png';
import { useInView } from "react-intersection-observer";


const LandingPage = () => {
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust the threshold as per your preference
      });
    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={6} sm={12}>
                    <Typography variant="h2" className='white-text' ref={ref} 
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: `translateX(${inView ? 0 : "-50px"})`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}>
                        Hi,
                    </Typography>
                    <Typography variant="h3" className='lightblue-text'
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: `translateX(${inView ? 0 : "-50px"})`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}>
                        I'm Cajetan Rodrigues
                    </Typography>
                    <Typography variant="h3" className='white-text'
                    sx={{
                        opacity: inView ? 1 : 0,
                        transform: `translateX(${inView ? 0 : "-50px"})`,
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}>
                        Full Stack Software Developer
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sm={12} className="image-container">
                    <img
                        ref={ref} 
                        className='image'
                        src={`${dp}`}
                        alt='n'
                        sx={{
                            opacity: inView ? 1 : 0,
                            transform: `translateX(${inView ? 0 : "-50px"})`,
                            transition: "opacity 0.8s ease, transform 0.8s ease",
                        }}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LandingPage;

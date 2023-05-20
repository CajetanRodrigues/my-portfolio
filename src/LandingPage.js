import React from 'react';
import Grid from '@mui/material/Grid';
import { Container, Typography, useTheme } from '@mui/material';
import './LandingPage.css';
import dp from './dp.png';

const LandingPage = () => {
    const theme = useTheme();
    return (
        <Container
            sx={{
                padding: theme.breakpoints.between('xs', 'sm') ? '20px' : '150px',
            }}>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={12} md={6} sm={12}>
                    <Typography variant="h2" className='white-text'>
                        Hi,
                    </Typography>
                    <Typography variant="h3" className='lightblue-text'>
                        I'm Cajetan Rodrigues
                    </Typography>
                    <Typography variant="h3" className='white-text'>
                        Full Stack Software Developer
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6} sm={12} className="image-container">
                    <img
                        className='image'
                        src={`${dp}`}
                        alt='n'
                        loading='lazy'
                    />
                </Grid>
            </Grid>
        </Container>
    );
};

export default LandingPage;

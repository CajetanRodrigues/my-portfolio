import React, { useCallback } from "react";
import { Container, useTheme, Box } from "@mui/material";
import "./App.css";
import LandingPage from "./LandingPage";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Skills from "./Skills";
import CustomCard from "./CustomCard";
import { Education, Experiences, Projects } from "./constants";
import AppMenuBar from "./AppMenuBar";
import { Element } from "react-scroll";
import SectionHeading from "./SectionHeading";
import SocialMedia from './SocialMedia'

function App() {
  const particleOptions = {
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        directions: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 2,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 150,
      },
      opacity: {
        value: 0.6,
      },
      shape: {
        type: "triangle",
      },
      size: {
        value: { min: 3, max: 5 },
      },
    },
  };

  const particlesInit = useCallback((particlesInstance) => {
    console.log(particlesInstance);
    // You can customize the particlesInstance here, adding custom shapes or presets
    loadFull(particlesInstance).then((loadedContainer) => {
      console.log(loadedContainer);
      // Particles have been loaded and the container is ready
    });
  }, []);
  const theme = useTheme();
  return (
    <div className="App">
      <Particles
        id="tsparticles"
        options={particleOptions}
        init={particlesInit}
      />
      
      <AppMenuBar />

      <Container
        sx={{
          paddingTop: "64px", // Add padding to adjust for the fixed AppBar
          padding: theme.breakpoints.between("xs", "sm") ? "20px" : "150px",
        }}
      >
        <Element name="landing-page" className="element">
          <LandingPage />
        </Element>
        <SocialMedia></SocialMedia>
        <Element name="experiences" className="element">
          <CustomCard customList={Experiences} customListName="Experiences" />
        </Element>
        <Element name="skills" className="element">
          <Box sx={{marginBottom: '20px'}}>
          <SectionHeading sectionHeading="Skills" />
          </Box>
          <Skills />
        </Element>
        <Element name="education" className="element">
          <CustomCard customList={Education} customListName="Education" />
        </Element>
        <Element name="projects" className="element">
          <CustomCard
            customList={Projects}
            customListName="Projects"
          />
        </Element>
      </Container>
    </div>
  );
}

export default App;

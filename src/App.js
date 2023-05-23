import React, { useCallback } from "react";
import { Container, useTheme } from "@mui/material";
import "./App.css";
import LandingPage from "./LandingPage";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import Skills from "./Skills";
import CustomCard from './CustomCard';
import { Education, Experiences, Projects } from "./constants";
import SocialMedia from "./SocialMedia";
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
          <Container
      sx={{
        padding: theme.breakpoints.between("xs", "sm") ? "20px" : "150px",
      }}
    >
      <LandingPage />
      <SocialMedia />
      <CustomCard customList={Experiences} customListName="Experiences" />
      <Skills/>
      {/* <ResumeViewer/> */}
      <CustomCard customList={Education} customListName="Education" />
      <CustomCard customList={Projects} customListName="Education" />
      </Container>
    </div>
  );
}

export default App;

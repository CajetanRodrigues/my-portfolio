import React, { useCallback } from "react";
import "./App.css";
import LandingPage from "./LandingPage";
import Experiences from "./Experiences";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";

function App() {
  const particleOptions = {
    particles: {
      color: {
          value: "#ffffff",
      },
      links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
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
          random: true,
          speed: 2,
          straight: false,
      },
      number: {
          density: {
              enable: true,
              area: 800,
          },
          value: 80,
      },
      opacity: {
          value: 0.0,
      },
      shape: {
          type: "circle",
      },
      size: {
          value: { min: 1, max: 5 },
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

  return (
    <div className="App">
      <Particles
        id="tsparticles"
        options={particleOptions}
        init={particlesInit}
      />
      <LandingPage />
      <Experiences />
    </div>
  );
}

export default App;

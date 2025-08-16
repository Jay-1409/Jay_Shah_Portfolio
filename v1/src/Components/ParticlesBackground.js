// src/Components/ParticlesBackground.js
import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBackground = () => {
  const particlesInit = (main) => {
    // You can add custom shapes or load plugins here
  };

  const particlesLoaded = (container) => {
    // You can add logic after particles are loaded here
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Background color
          },
        },
        particles: {
          number: {
            value: 80, // Number of particles
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "circle", // Shape of the particles
          },
          size: {
            value: 3, // Size of particles
            random: true, // Randomize size
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse", // Change particle behavior on hover
            },
            onClick: {
              enable: true,
              mode: "push", // Add particles on click
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
            push: {
              quantity: 4,
            },
          },
        },
        retina_detect: true, // Detect retina screens for higher resolution
      }}
    />
  );
};

export default ParticlesBackground;

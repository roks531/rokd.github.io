import React, { useEffect, useState } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

const ParticlesBackground = () => {
  const [particlesJsLoaded, setParticlesJsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically import particles.js only in the client side
    if (typeof window !== 'undefined' && !particlesJsLoaded) {
      import('particles.js').then(() => {
        setParticlesJsLoaded(true);
      }).catch((error) => {
        console.error('Failed to load particles.js:', error);
      });
    }
  }, [particlesJsLoaded]);

  useEffect(() => {
    // Once particles.js is loaded, initialize the particles effect
    if (particlesJsLoaded && typeof window !== 'undefined' && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 50, // Number of particles
          },
          color: {
            value: '#808080', // Grey color for the particles
          },
          shape: {
            type: 'circle', // Particle shape
          },
          opacity: {
            value: 0.15, // Low opacity for barely visible particles
            random: false, // Don't randomize opacity
            anim: {
              enable: false,
              speed: 0.3, // Slow down opacity animation speed
              opacity_min: 0.05, // Minimum opacity when animating
            },
          },
          size: {
            value: 5, // Smaller particles
            random: true, // Make particles vary in size
            anim: {
              enable: true,
              speed: 2, // Slow down size animation speed
              size_min: 1, // Minimum size of the particle
            },
          },
          line_linked: {
            enable: true, // Enable lines between particles
            distance: 150,
            color: '#808080', // Grey color for the lines
            opacity: 0.3, // Make the lines less visible
            width: 1,
          },
          move: {
            enable: true, // Enable particle movement
            speed: 0.5, // Speed of the particles
            direction: 'none', // Let particles move in any direction
            random: true, // Make the movement random
            straight: false, // Let the particles move in a random way
            out_mode: 'out', // Particles will disappear when they move out of the canvas
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: false, // Disable hover effect
            },
            onclick: {
              enable: false, // Disable click interactions
            },
          },
        },
        retina_detect: true, // Enable retina display for high-res screens
      });
    }
  }, [particlesJsLoaded]); // Run this effect when particles.js is loaded

  return (
    <BrowserOnly fallback={<div>Loading...</div>}>
      {() => (
        <div
          id="particles-js"
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        />
      )}
    </BrowserOnly>
  );
};

export default ParticlesBackground;

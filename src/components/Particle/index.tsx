import React from "react";
import Particles from "react-particles-js";

export const Particle = () => {
  return (
    <>
      <Particles
        style={{ position: "absolute" }}
        params={{
          particles: {
            number: {
              value: 50,
            },
            size: {
              value: 3,
            },
            color: {
              value: "#a5e22b",
            },
          },

          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
        }}
      />
    </>
  );
};

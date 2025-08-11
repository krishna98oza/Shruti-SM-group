import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  // Custom bubble image (white outline thicker at bottom)
  const bubbleSVG =
    "data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3CradialGradient id='grad' cx='50%25' cy='50%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='rgba(255,255,255,0.05)'/%3E%3Cstop offset='70%25' stop-color='rgba(255,255,255,0.05)'/%3E%3Cstop offset='100%25' stop-color='rgba(255,255,255,0.5)'/%3E%3C/radialGradient%3E%3ClinearGradient id='strokeGrad' x1='0' y1='0' x2='0' y2='1'%3E%3Cstop offset='0%25' stop-color='rgba(255,255,255,0.2)'/%3E%3Cstop offset='100%25' stop-color='rgba(255,255,255,0.6)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Ccircle cx='50' cy='50' r='48' fill='url(%23grad)' stroke='url(%23strokeGrad)' stroke-width='1'/%3E%3C/svg%3E";

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: { value: "#1a1a2e" },
          },
          particles: {
            number: { value: 20 },
            shape: {
              type: "image",
              image: [
                {
                  src: bubbleSVG,
                  width: 100,
                  height: 100,
                },
              ],
            },
            size: {
              value: { min: 20, max: 70 },
              animation: {
                enable: true,
                speed: 2,
                minimumValue: 14,
                sync: false,
              },
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "top",
              random: true,
              straight: false,
              outModes: {
                default: "out",
              },
              wobble: {
                enable: true,
                distance: 10, // How far side-to-side
                speed: 2,    // Wobble speed
              },

            },
            rotate: {
              value: 0,
              direction: "random",
              animation: {
                enable: true,
                speed: 2,
              },
            },

            opacity: {
              value: 1,
              random: false,
            },
            links: {
              enable: false,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;

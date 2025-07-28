import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleBackground = () => {
  const particlesInit = async (main) => {
    await loadSlim(main); // Using slim version to avoid version conflict
  };

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
            number: { value: 80 },
            color: { value: "#00bfff" },
            links: {
              enable: true,
              distance: 150,
              color: "#00bfff",
              opacity: 0.5,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
            },
            size: {
              value: 3,
            },
            opacity: {
              value: 0.6,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
            modes: {
              repulse: {
                distance: 100,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticleBackground;

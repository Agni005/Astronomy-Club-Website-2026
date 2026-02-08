import { useCallback } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { Engine, Container } from "@tsparticles/engine";

const ParticleEffect: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container?: Container) => {
        console.log(container);
    }, []);

    return (
        <Particles
            id="tsparticles"
            particlesInit={particlesInit}
            particlesLoaded={particlesLoaded}
            options={{
                fullScreen: {
                    enable: false,
                    zIndex: -1,
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        resize: {
                            enable: true,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        outModes: {
                            default: "bounce",
                        },
                    },
                    number: {
                        density: {
                            enable: true,
                            width: 800,
                            height: 800,
                        },
                        value: 80,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        value: { min: 0.7, max: 3 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleEffect;

import React, { useEffect, useMemo, useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaSkype } from "react-icons/fa";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; 
import Typewriter from 'typewriter-effect';
import programer from '../../src/images/animation_2.gif';

const Banner = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    const initializeParticles = async () => {
      await loadSlim(window.particles);
      setInit(true);
    };

    initializeParticles();
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#ff0000", "#00ff00", "#0000ff", "#ffff00"], // Array of random colors
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        fullScreen: { enable: false },
        number: {
          density: {
            enable: true,
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
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  
  return (
    <div className="bg-gray-950 text-white py-24 px-5 md:flex md:items-center relative">
        {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="md:w-1/2 md:text-left lg:pl-24">
        <h1 className="text-4xl font-bold">
          Hi, I'm <span className="text-sky-800">Tasnimul Alam</span> <br />
          <Typewriter
            options={{
              strings: ['Web Developer', 'Front End Developer', 'Full Stack Developer', 'Software Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="mt-4 space-x-4 flex">
          <a
            href="https://www.facebook.com/tasnimul.sharan.397"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-blue-600 "
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/tasnimul-alam-32b70a182/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-blue-600 "
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Tasnimul-Sharan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-white hover:text-slate-500 "
          >
            <FaGithub />
          </a>
          <a
            href="skype-id"
            className="text-3xl text-white hover:text-blue-600 "
          >
            <FaSkype />
          </a>
        </div>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1uTJ3QUj60SR2G7DubeVKMHX9oRfe3pv2/view?usp=sharing"
        >
          <button className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 hover:text-gray-900 text-xl">
            Download Resume
          </button>
        </a>
      </div>
      <div className="md:w-1/2 lg:pl-14">
        <img
          className="rounded-lg max-w-md object-cover mx-auto my-5"
          src={programer}
          alt="Profile"
        />
      </div>
    </div>
  );
};

export default Banner;

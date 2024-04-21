import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import Header from "./Home/Header";
// import Footer from "./Footer";
import Blogs from "./Blogs/Blogs";
import Projects from "./Home/Projects";
import ProjectDetails from "./Home/ProjectDetails";
import About from "./Home/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import Skills from "./Home/Skills";
import Footer from "./Home/Footer";
import Contact from "./Contact/Contact";
// import{ useCallback } from "react";
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";

function App() {

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  // const particlesInit = useCallback(async (engine) => {
  //   await loadFull(engine);
  // }, []);

  return (
    <div className="App">
       {/* <Particles options={options} init={particlesInit} /> */}
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/projets/:projectId" element={<Projects />} />
          <Route
            path="/projetdetails"
            element={<ProjectDetails />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;

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
import ProjectDetailsTwo from "./Home/ProjectDetailsTwo";
import ProjectDetailsThree from "./Home/ProjectDetailsThree";

function App() {


  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projetdetails"
            element={<ProjectDetails />}
          />
          <Route
            path="/projectDetailsTwo"
            element={<ProjectDetailsTwo />}
          />
          <Route
            path="/projectDetailsThree"
            element={<ProjectDetailsThree />}
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

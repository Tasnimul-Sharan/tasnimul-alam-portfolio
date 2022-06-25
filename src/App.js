import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import Contract from "./Contract/Contract";
import Header from "./Home/Header";
import Footer from "./Footer";
import Blogs from "./Blogs/Blogs";
import Projects from "./Home/Projects";
import ProjectDetails from "./Home/ProjectDetails";
import About from "./Home/About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contract" element={<Contract />} />
          <Route path="/projets/:projectId" element={<Projects />} />
          <Route
            path="/projetdetails/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <a
          href="#"
          rel="noreferrer"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon>
        </a>
        <Footer />
      </div>
    </div>
  );
}

export default App;

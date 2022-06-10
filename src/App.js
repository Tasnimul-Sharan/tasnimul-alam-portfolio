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

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contract" element={<Contract />} />
        <Route path="/projets/:projectId" element={<Projects />} />
        <Route path="/projetdetails/:projectId" element={<ProjectDetails />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

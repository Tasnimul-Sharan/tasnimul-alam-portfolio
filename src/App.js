import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home/Home";
import Contract from "./Contract/Contract";
import Header from "./Home/Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contract" element={<Contract />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

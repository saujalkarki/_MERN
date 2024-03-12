// import { Fragment } from "react";
import "./App.css";
// import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

// function App() {
//   return (
//     <Fragment>
//       <NavBar />
//       <h1 style={{ color: "blue" }}>{11 + 10} is sum</h1>
//     </Fragment>
//   );
// }

// using react-router-dom
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

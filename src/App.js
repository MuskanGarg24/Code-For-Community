import Navbar from "./Navbar";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Mentorship from "./pages/Mentorship";
import Resources from "./pages/Resources";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

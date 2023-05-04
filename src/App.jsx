import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Post from "./pages/Post";
import "../server";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details";
import Comments from "./pages/Profile/Comments";
import Layout from "./components/Layout";
import "../server";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Posts />} />
          <Route path="/blog/:id" element={<Post />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/details" element={<Details />} />
          <Route path="/profile/comments" element={<Comments />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

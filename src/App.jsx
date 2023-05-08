import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import ProfileLayout from "./components/ProfileLayout";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details";
import ProfilePosts from "./pages/Profile/ProfilePosts";
import ProfilePost from "./pages/Profile/ProfilePost";
import Comments from "./pages/Profile/Comments";
import Layout from "./components/Layout";
import "../server";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blog" element={<Posts />} />
          <Route path="blog/:id" element={<Post />} />
          <Route path="profile" element={<ProfileLayout />}>
            <Route index element={<Profile />} />
            <Route path="details" element={<Details />} />
            <Route path="blog" element={<ProfilePosts />} />
            <Route path="blog/:id" element={<ProfilePost />} />
            <Route path="comments" element={<Comments />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

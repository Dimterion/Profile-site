import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details";
import ProfilePosts from "./pages/Profile/ProfilePosts";
import ProfilePost from "./pages/Profile/ProfilePost";
import ProfilePostDetails from "./pages/Profile/ProfilePostDetails";
import ProfilePostTags from "./pages/Profile/ProfilePostTags";
import ProfilePostPhotos from "./pages/Profile/ProfilePostPhotos";
import Comments from "./pages/Profile/Comments";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
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
            <Route path="blog/:id" element={<ProfilePost />}>
              <Route index element={<ProfilePostDetails />} />
              <Route path="tags" element={<ProfilePostTags />} />
              <Route path="photos" element={<ProfilePostPhotos />} />
            </Route>
            <Route path="comments" element={<Comments />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

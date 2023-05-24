import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Posts, { loader as postsLoader } from "./pages/Posts/Posts";
import Post, { loader as postLoader } from "./pages/Posts/Post";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Profile/Details";
import ProfilePosts, {
  loader as profilePostsLoader,
} from "./pages/Profile/ProfilePosts";
import ProfilePost, {
  loader as profilePostLoader,
} from "./pages/Profile/ProfilePost";
import ProfilePostDetails from "./pages/Profile/ProfilePostDetails";
import ProfilePostTags from "./pages/Profile/ProfilePostTags";
import ProfilePostPhotos from "./pages/Profile/ProfilePostPhotos";
import Comments from "./pages/Profile/Comments";
import NotFound from "./pages/NotFound";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";
import Error from "./components/Error";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import { requireAuth } from "./utils";
import "../server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="projects" element={<Projects />} />
      <Route
        path="login"
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path="blog"
        element={<Posts />}
        errorElement={<Error />}
        loader={postsLoader}
      />
      <Route path="blog/:id" element={<Post />} loader={postLoader} />
      <Route path="profile" element={<ProfileLayout />}>
        <Route
          index
          element={<Profile />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="details"
          element={<Details />}
          loader={async () => await requireAuth()}
        />
        <Route
          path="blog"
          element={<ProfilePosts />}
          loader={profilePostsLoader}
        />
        <Route
          path="blog/:id"
          element={<ProfilePost />}
          loader={profilePostLoader}
        >
          <Route
            index
            element={<ProfilePostDetails />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="tags"
            element={<ProfilePostTags />}
            loader={async () => await requireAuth()}
          />
          <Route
            path="photos"
            element={<ProfilePostPhotos />}
            loader={async () => await requireAuth()}
          />
        </Route>
        <Route
          path="comments"
          element={<Comments />}
          loader={async () => await requireAuth()}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

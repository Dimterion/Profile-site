import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
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
import Login from "./pages/Login";
import Error from "./components/Error";
import Layout from "./components/Layout";
import ProfileLayout from "./components/ProfileLayout";
import {
  projectsLoader,
  postsLoader,
  postLoader,
  profilePostsLoader,
  profilePostLoader,
  loginLoader,
} from "./loaders";
import { loginAction, requireAuth } from "./utils";
import "../server";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route
        path="projects"
        element={<Projects />}
        errorElement={<Error />}
        loader={projectsLoader}
      />
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
      <Route
        path="blog/:id"
        element={<Post />}
        errorElement={<Error />}
        loader={postLoader}
      />
      <Route path="profile" element={<ProfileLayout />}>
        <Route
          index
          element={<Profile />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="details"
          element={<Details />}
          loader={async ({ request }) => await requireAuth(request)}
        />
        <Route
          path="blog"
          element={<ProfilePosts />}
          errorElement={<Error />}
          loader={profilePostsLoader}
        />
        <Route
          path="blog/:id"
          element={<ProfilePost />}
          errorElement={<Error />}
          loader={profilePostLoader}
        >
          <Route
            index
            element={<ProfilePostDetails />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="tags"
            element={<ProfilePostTags />}
            loader={async ({ request }) => await requireAuth(request)}
          />
          <Route
            path="photos"
            element={<ProfilePostPhotos />}
            loader={async ({ request }) => await requireAuth(request)}
          />
        </Route>
        <Route
          path="comments"
          element={<Comments />}
          loader={async ({ request }) => await requireAuth(request)}
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

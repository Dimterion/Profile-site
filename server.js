// Using MirageJS to imitate a server
import { createServer, Model, Response } from "miragejs";

// Testing purposes only: variables for login
const pass = import.meta.env.VITE_PASSWORD;
const email = import.meta.env.VITE_EMAIL;
const name = import.meta.env.VITE_NAME;

createServer({
  models: {
    posts: Model,
    users: Model,
  },

  seeds(server) {
    server.create("post", {
      id: "1",
      title: "Post 1",
      date: "01.05.23",
      text: "This is a text-1 example.",
      imageUrl:
        "https://raw.githubusercontent.com/Dimterion/profile-site/master/src/assets/images/placeholderImg.jpg",
      type: "thoughts",
      profileId: "123",
    });
    server.create("post", {
      id: "2",
      title: "Post 2",
      date: "02.05.23",
      text: "This is a text-2 example.",
      imageUrl:
        "https://raw.githubusercontent.com/Dimterion/profile-site/master/src/assets/images/placeholderImg.jpg",
      type: "coding",
      profileId: "123",
    });
    server.create("post", {
      id: "3",
      title: "Post 3",
      date: "03.05.23",
      text: "This is a text-3 example.",
      imageUrl:
        "https://raw.githubusercontent.com/Dimterion/profile-site/master/src/assets/images/placeholderImg.jpg",
      type: "life",
      profileId: "456",
    });
    server.create("post", {
      id: "4",
      title: "Post 4",
      date: "04.05.23",
      text: "This is a text-4 example.",
      imageUrl:
        "https://raw.githubusercontent.com/Dimterion/profile-site/master/src/assets/images/placeholderImg.jpg",
      type: "thoughts",
      profileId: "456",
    });
    server.create("post", {
      id: "5",
      title: "Post 5",
      date: "05.05.23",
      text: "This is a text-5 example.",
      imageUrl:
        "https://raw.githubusercontent.com/Dimterion/profile-site/master/src/assets/images/placeholderImg.jpg",
      type: "coding",
      profileId: "123",
    });
    // Testing purposes only: data for authentication
    server.create("user", {
      id: "123",
      email: email,
      password: pass,
      name: name,
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;
    this.passthrough("https://firestore.googleapis.com/**");

    this.get("/posts", (schema) => {
      // Error on posts loading
      // return new Response(400, {}, { error: "Error fetching data" });
      // Normal posts loading
      return schema.posts.all();
    });

    this.get("/posts/:id", (schema, request) => {
      const id = request.params.id;
      return schema.posts.find(id);
    });

    this.get("/profile/posts", (schema) => {
      return schema.posts.where({ profileId: "123" });
    });

    this.get("/profile/posts/:id", (schema, request) => {
      const id = request.params.id;
      return schema.posts.findBy({ id, profileId: "123" });
    });
    // Testing purposes only: user login
    this.post("/login", (schema, request) => {
      const { email, password } = JSON.parse(request.requestBody);

      const foundUser = schema.users.findBy({ email, password });

      if (!foundUser) {
        return new Response(
          401,
          {},
          { message: "Please check your credentials" }
        );
      }

      foundUser.password = undefined;

      return {
        user: foundUser,
        token: "Testing authentication token",
      };
    });
  },
});

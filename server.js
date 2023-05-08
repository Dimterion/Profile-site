import { createServer, Model } from "miragejs";

createServer({
  models: {
    posts: Model,
  },

  seeds(server) {
    server.create("post", {
      id: "1",
      title: "Post 1",
      date: "01.05.23",
      text: "This is a text-1 example.",
      imageUrl: "../../src/assets/images/placeholderImg.jpg",
      type: "thoughts",
      profileId: "123",
    });
    server.create("post", {
      id: "2",
      title: "Post 2",
      date: "02.05.23",
      text: "This is a text-2 example.",
      imageUrl: "../../src/assets/images/placeholderImg.jpg",
      type: "coding",
      profileId: "123",
    });
    server.create("post", {
      id: "3",
      title: "Post 3",
      date: "03.05.23",
      text: "This is a text-3 example.",
      imageUrl: "../../src/assets/images/placeholderImg.jpg",
      type: "life",
      profileId: "456",
    });
    server.create("post", {
      id: "4",
      title: "Post 4",
      date: "04.05.23",
      text: "This is a text-4 example.",
      imageUrl: "../../src/assets/images/placeholderImg.jpg",
      type: "thoughts",
      profileId: "456",
    });
    server.create("post", {
      id: "5",
      title: "Post 5",
      date: "05.05.23",
      text: "This is a text-5 example.",
      imageUrl: "../../src/assets/images/placeholderImg.jpg",
      type: "coding",
      profileId: "123",
    });
  },

  routes() {
    this.namespace = "api";
    this.logging = false;

    // eslint-disable-next-line no-unused-vars
    this.get("/posts", (schema, request) => {
      return schema.posts.all();
    });

    this.get("/posts/:id", (schema, request) => {
      const id = request.params.id;
      return schema.posts.find(id);
    });

    // eslint-disable-next-line no-unused-vars
    this.get("/profile/posts", (schema, request) => {
      return schema.posts.where({ profileId: "123" });
    });

    this.get("/profile/posts/:id", (schema, request) => {
      const id = request.params.id;
      return schema.posts.findBy({ id, profileId: "123" });
    });
  },
});

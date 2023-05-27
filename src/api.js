// Firebase setup

import { initializeApp } from "firebase/app";
import { getFireStore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: import.meta.env.DB_API,
  authDomain: import.meta.env.DB_DOMAIN,
  projectId: import.meta.env.DB_PROJECTID,
  storageBucket: import.meta.env.DB_STORAGEBUCKET,
  messagingSenderId: import.meta.env.DB_SENDERID,
  appId: import.meta.env.DB_APID,
  measurementId: import.meta.env.DB_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const db = getFireStore(app);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

// MirageJS code below

export async function getPosts(id) {
  const url = id ? `/api/posts/${id}` : "/api/posts";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Couldn't fetch posts",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  return data.posts;
}

export async function getProfilePosts(id) {
  const url = id ? `/api/profile/posts/${id}` : "/api/profile/posts";
  const res = await fetch(url);

  if (!res.ok) {
    throw {
      message: "Couldn't fetch posts",
      statusText: res.statusText,
      status: res.status,
    };
  }

  const data = await res.json();

  return data.posts;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}

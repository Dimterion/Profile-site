// Firebase setup
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API,
  authDomain: import.meta.env.VITE_DOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_SENDERID,
  appId: import.meta.env.VITE_APID,
  measurementId: import.meta.env.VITE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const projectsCollectionRef = collection(db, "projects");
const postsCollectionRef = collection(db, "posts");

export async function getProjects() {
  const querySnapshot = await getDocs(projectsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getPosts() {
  const querySnapshot = await getDocs(postsCollectionRef);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

export async function getPost(id) {
  const docRef = doc(db, "posts", id);
  const postSnapshot = await getDoc(docRef);
  return {
    ...postSnapshot.data(),
    id: postSnapshot.id,
  };
}

export async function getProfilePosts() {
  const q = query(postsCollectionRef, where("profileId", "==", "123"));
  const querySnapshot = await getDocs(q);
  const dataArr = querySnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  return dataArr;
}

// MirageJS setup for reference
// export async function getPosts(id) {
//   const url = id ? `/api/posts/${id}` : "/api/posts";
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw {
//       message: "Couldn't fetch posts",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   const data = await res.json();

//   return data.posts;
// }

// export async function getProfilePosts(id) {
//   const url = id ? `/api/profile/posts/${id}` : "/api/profile/posts";
//   const res = await fetch(url);

//   if (!res.ok) {
//     throw {
//       message: "Couldn't fetch posts",
//       statusText: res.statusText,
//       status: res.status,
//     };
//   }

//   const data = await res.json();

//   return data.posts;
// }

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

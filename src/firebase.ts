import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCppcfPIPkWZxDfpXr8oMwLFyvUYI8DlC8",
  authDomain: "ripple-creativity-app.firebaseapp.com",
  projectId: "ripple-creativity-app",
  storageBucket: "ripple-creativity-app.firebasestorage.app",
  messagingSenderId: "1031812026954",
  appId: "1:1031812026954:web:d898d69d0af2dbd1f98cb3",
  measurementId: "G-7HNQ7PEEEB"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
// if (typeof window !== "undefined") {
//   analytics = getAnalytics(app);
// }
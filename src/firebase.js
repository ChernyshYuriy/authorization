import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const config = {
  apiKey: "AIzaSyBz8WAo4V7iO73w1umqJDHMflvD2Ln5oeo",

  authDomain: "test-task-31bf8.firebaseapp.com",

  projectId: "test-task-31bf8",

  storageBucket: "test-task-31bf8.appspot.com",

  messagingSenderId: "344225991277",

  appId: "1:344225991277:web:bacd15d6f7741f087ecd64",
};

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };

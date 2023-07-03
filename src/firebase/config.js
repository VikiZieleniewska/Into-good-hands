import { initializeApp, getApps } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxs46-r_OtX8yq8e-WSwl4NtOiwD_stj8",
  authDomain: "into-good-hands-bbf82.firebaseapp.com",
  projectId: "into-good-hands-bbf82",
  storageBucket: "into-good-hands-bbf82.appspot.com",
  messagingSenderId: "1026359591324",
  appId: "1:1026359591324:web:7d9c3515826e71cc51c859",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export default firebase_app;

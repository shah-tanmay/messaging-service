import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
  apiKey: "AIzaSyBEoXQzGw_bpEYj-tN2rpPJMDxLmvOaXi0",
  authDomain: "messaging-service-9d390.firebaseapp.com",
  projectId: "messaging-service-9d390",
  storageBucket: "messaging-service-9d390.appspot.com",
  messagingSenderId: "920447592033",
  appId: "1:920447592033:web:38370dc8b5a27ee63b2c20",
  measurementId: "G-VVEXE3QXWD",
  databaseURL: "https://messaging-service-9d390-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

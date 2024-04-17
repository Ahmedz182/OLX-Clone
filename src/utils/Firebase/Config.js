// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD_2u1pfV-w2GAsvuVrFSp48RRUi0abzT0",
    // authDomain: "olx-clone-794ba.firebaseapp.com",
    authDomain: "cloneeolx.netlify.app",
    projectId: "olx-clone-794ba",
    storageBucket: "olx-clone-794ba.appspot.com",
    messagingSenderId: "795916962801",
    appId: "1:795916962801:web:2eee6c79efc327dc6dd250",
    measurementId: "G-ZCJWPR04LE"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
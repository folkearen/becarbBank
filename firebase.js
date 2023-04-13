
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
  import {getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAyfE0K34g4joZsz9GWQeC7qh4SlMYXkQE",
    authDomain: "becarbbank2.firebaseapp.com",
    projectId: "becarbbank2",
    storageBucket: "becarbbank2.appspot.com",
    messagingSenderId: "849002060833",
    appId: "1:849002060833:web:2d847f5a25f0d54e2f9760"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();

export const crearBB = (codigoBecarbCoin, denominacionBecarbCoin ) =>  addDoc(collection(db, 'crarBecarbCoin'), {codigoBecarbCoin, denominacionBecarbCoin});

export const bCCirculacion = () => getDocs(collection(db, 'crarBecarbCoin'));

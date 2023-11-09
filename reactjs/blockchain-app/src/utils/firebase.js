// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAu2ociPNrJc-Gpjj4V8Mc1LxtDT7gWk7k",
    authDomain: "foodreview-2c772.firebaseapp.com",
    projectId: "foodreview-2c772",
    storageBucket: "foodreview-2c772.appspot.com",
    messagingSenderId: "143811519440",
    appId: "1:143811519440:web:1342e7e1b489747b484fd5"
  };


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

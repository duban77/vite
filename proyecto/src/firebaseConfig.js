import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB-TE2EbdISNb4TldhyF3p5EMeN65a5rVI",
  authDomain: "pokeapi2-d9daf.firebaseapp.com",
  projectId: "pokeapi2-d9daf",
  storageBucket: "pokeapi2-d9daf.firebasestorage.app",
  messagingSenderId: "84802882161",
  appId: "1:84802882161:web:80c91d5a2d102517bde9d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // ✅ ¡Esto es necesario!

export { auth, db };
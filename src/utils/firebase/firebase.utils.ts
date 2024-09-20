// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {getAuth,createUserWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword,} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import notif from '../notif';

const firebaseConfig = {
  apiKey: "AIzaSyAqU7FzBLzXIXe3CrFWEplLuv8lGsAcwFM",
  authDomain: "build-app-indian.firebaseapp.com",
  projectId: "build-app-indian",
  storageBucket: "build-app-indian.appspot.com",
  messagingSenderId: "575246125921",
  appId: "1:575246125921:web:1e48a6e1d37b50b3e09320",
  measurementId: "G-3142T67DRS"
};

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account',});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async ( 
    userAuth:any,
    additionalInformation = {}
  ) => {
    if (!userAuth) return;
  
    const userDocRef = doc(db, 'users', userAuth.uid);
  
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
  
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      } catch (error) {
        console.log('error creating the user', error);
      }
    }
  
    return userDocRef;
};
  
export const signUpFirebase = async (email:string,pass:string,displayName:string) => {
    const response = await createUserWithEmailAndPassword(auth,email,pass);
    await createUserDocumentFromAuth(response.user, { displayName });
    return response
}

export const signInUserWithEmailAndPassword = async (email:string, password:string) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);
};

  
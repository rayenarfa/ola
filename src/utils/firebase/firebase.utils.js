import { initializeApp } from "firebase/app";
<<<<<<< HEAD
import{ 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider 
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,setDoc

} from 'firebase/firestore'


=======
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129

const firebaseConfig = {
  apiKey: "AIzaSyDMd9zkO8jw5lNyphjY4Ma95D-TSwhiiHU",
  authDomain: "e-com-web-app-e07d8.firebaseapp.com",
  projectId: "e-com-web-app-e07d8",
  storageBucket: "e-com-web-app-e07d8.firebasestorage.app",
  messagingSenderId: "842060525041",
  appId: "1:842060525041:web:6a70f112ddcc29805da850",
  measurementId: "G-6WM0SP0PD0"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
// Set up Google auth
provider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
<<<<<<< HEAD

export const db= getFirestore();

//create some of methods
export const createUserDocumentFromAuth= async (userAuth) => {
 const userDocRef= doc(db, 'users', userAuth.uid);
 console.log(userDocRef);

 const userSnapshot= await getDoc(userDocRef)
 
 //console.log(userSnapshot);
 //console.log(userSnapshot.exists());

 // 1 Check if user data exists

 //if user data does not exist
 if(!userSnapshot.exists())
{
  const{displayName,email }= userAuth;
  const createdAt = new Date(); //new Date() Object , when users are sign it

  try{
      await setDoc(userDocRef, {
      displayName,
      email,
      createdAt  
      });
  }
  catch(error) {

console.log('error creating the user', error.message);// error.message comes from error
  }
}
return userDocRef;

 //2 return userDocRef

};
=======
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129

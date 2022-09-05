import {initializeApp} from "firebase/app";
import {getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
 
const firebaseConfig = {
    apiKey: "AIzaSyAwLO5N7KjuYxqmgWwwBkeosOT8tsyF7k4",
    authDomain: "crwn-project-394c9.firebaseapp.com",
    projectId: "crwn-project-394c9",
    storageBucket: "crwn-project-394c9.appspot.com",
    messagingSenderId: "277167595005",
    appId: "1:277167595005:web:9d23ae6c0c10f1c139cd94"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);

  const provider=new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);

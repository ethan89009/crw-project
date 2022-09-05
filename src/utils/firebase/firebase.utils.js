import {initializeApp} from "firebase/app";
import {getAuth , signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {doc,getFirestore,getDoc,setDoc} from "firebase/firestore";
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

  export const db=getFirestore();

  export const creatUserDocumentFromAuth= async (userAuth)=>{
    const userDocRef= doc(db, 'users',userAuth.uid);
    
    const userSnapshot= await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email }=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,{displayName,email,createdAt});
        }catch(error){
            console.log(error);
        }
    }
    return userDocRef;
}
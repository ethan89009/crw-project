import {initializeApp} from "firebase/app";
import {getAuth , signInWithPopup, GoogleAuthProvider,signOut,onAuthStateChanged} from "firebase/auth";
import {doc,getFirestore,getDoc,setDoc} from "firebase/firestore";
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from "firebase/auth";
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


  export const creatUserDocumentFromAuth= async (userAuth,additionInfo={})=>{
    const userDocRef= doc(db, 'users',userAuth.uid);
    
    const userSnapshot= await getDoc(userDocRef);

    if(!userSnapshot.exists()){
        const {displayName, email }=userAuth;
        const createdAt=new Date();

        try{
            await setDoc(userDocRef,
              {displayName,
                email,
                createdAt,
                ...additionInfo
              });
        }catch(error){
            console.log(error);
        }
    }
    return userDocRef;
}



export const creatAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email||!password){
    return;
  }
  else{
    try {
     const response=await createUserWithEmailAndPassword(auth,email,password);
     return response;
    } catch (error) {
      console.log(error);
    }
  }

}



export const signInAuthUserWithEmailAndPassword=async(email,password)=>{
  if(!email||!password){
    return;
  }
  else{
   
     const response=await signInWithEmailAndPassword(auth,email,password);
     return response;
  
  }

}


export const signOutUser=async ()=>await signOut(auth);



export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback);

import {createContext ,useState ,useEffect} from "react"
import { creatUserDocumentFromAuth, onAuthStateChangedListener,signOutUser } from "../utils/firebase/firebase.utils";

export const userContext=createContext({
    currentUser:null,
    setCurrentUser:()=>null,

});

export const UserProvider=({children})=>{
    const [currentUser,setCurrentUser]=useState(null);
    const value={currentUser,setCurrentUser};

    

    useEffect(()=>{
       const unsubscribe= onAuthStateChangedListener((user)=>{
        if(user){
            creatUserDocumentFromAuth(user);
        }
        setCurrentUser(user);

       });
       
        return unsubscribe;
    },[])
    return<userContext.Provider value={value}>{children}
    </userContext.Provider>
}


import { createContext, useState ,useEffect} from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

export const categoriesContext=createContext({
    categoriesMap:{}
});

export const CategoriesProvider=({children})=>{
   
    const [categoriesMap,setCategoriesMap] =useState({});
    useEffect(()=>{
        const run= async()=>{
            const data=await getCategoriesAndDocument();    
            setCategoriesMap(data);
        }
        run();
    },[])
    const value={categoriesMap};
    return<categoriesContext.Provider value={value}>{children}</categoriesContext.Provider>
}

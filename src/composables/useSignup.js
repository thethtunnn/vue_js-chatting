import { ref } from "vue";
import {auth} from "../firebase/config"

let error = ref(null);

let createAccount =async (email,password,displayName) => {
    try{
        let res= await auth.createUserWithEmailAndPassword(email,password)
        if(!res) {
         throw new Error("could not create new user")
        }       
                                  //displayName:displayName
        res.user.updateProfile({displayName})
        console.log(res.user)
        return res;
     }catch(err) {
       error.value = err.message;
       
     }
}
let useSignup = () => {
    return {error,createAccount};

}
export default useSignup;
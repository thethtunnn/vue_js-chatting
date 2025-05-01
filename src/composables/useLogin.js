import { ref } from "vue";
import { auth } from "../firebase/config";  // just import auth

let error = ref(null);

let signIn = async (email, password) => {
      try {
        let res = await auth.signInWithEmailAndPassword(email, password)
        
        return res;
      } catch (err) {
        error.value = err.message
        
        
      }
}

let userLogin = () => {
  return { error, signIn }
}

export default userLogin

import { ref } from "vue";
import { auth } from '@/firebase/config'

let user = ref(auth.currentUser); //current login/singup user is display
auth.onAuthStateChanged((_user)=> {
    // console.log("user state chang.current user is",_user)
    user.value = _user;
})


let getUser = () => {
    return {user}
}
export default getUser
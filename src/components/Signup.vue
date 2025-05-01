<template>
  <h1>Sing Up</h1>
  <form @submit.prevent="signUP">
    <input type="text" placeholder="display name" v-model="displayName">
    <input type="email" placeholder="email" v-model="email">
    <input type="password" placeholder="password" v-model="password">
    <div v-if="error" class="error">{{error}}</div>
    <button>Sing up</button>

  </form>
</template>

<script>
import { ref } from 'vue'
// import {auth} from "../firebase/config"
import useSignup from "../composables/useSignup"

export default {

    setup (props,context) {


     
        let displayName = ref("");
        let email = ref("");
        let password = ref("");

        let {error,createAccount}= useSignup()

         let signUP =async () => {
          let res = await createAccount(email.value,password.value,displayName.value)
          if(res) {
            context.emit("enterChatroom")

            
            
          }
         
        }

        return { displayName,email,password,signUP,error};
    }

}
</script>

<style>

</style>
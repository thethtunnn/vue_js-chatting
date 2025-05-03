<template>
<div class="container">
    <Navbar></Navbar>
    <NewChatForm></NewChatForm>
</div>

  
</template>

<script>

import NewChatForm from '../composables/NewChatForm'
import getUser from '../composables/getUser'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router'
import { watch } from 'vue'


export default {
  components: {
    NewChatForm, Navbar },
  setup () {
    let {user} = getUser();
    let router = useRouter();
            // Every watching the user 
    watch(user,()=> {
        if(!user.value) {
            router.push("/") // user is nothing  go homepage

        }
    })
  }

}
</script>

<style>

</style>
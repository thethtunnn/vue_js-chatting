<template>
<div class="container">
    <Navbar></Navbar>
</div>

  
</template>

<script>

import getUser from '../composables/getUser'
import Navbar from '../components/Navbar'
import { useRouter } from 'vue-router'
import { watch } from 'vue'


export default {
  components: { Navbar },
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
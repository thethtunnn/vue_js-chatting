import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/global.css"
import { auth } from './firebase/config'
let app;


//Wait for Firebase to check user login state
auth.onAuthStateChanged(()=> {

    // Make sure the app mounts only once   if(!app)
    if(!app) {
       app =createApp(App).use(router).mount('#app') 
    }
})



 

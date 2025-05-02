import { createRouter, createWebHistory } from 'vue-router'
import Welcome from "../views/Welcome.vue"
import Chatroom from "../views/Chatroom.vue"
import { auth } from '@/firebase/config'


const routes = [
  {
    path: "/",
    name:"welcome",
    component:Welcome
  },
  {
    path: "/chatroom",
    name:"Chatroom",
    component:Chatroom,
    beforeEnter(to,from,next) {
      let user = auth.currentUser;
      if(user) { 
        next()//if user is exit go next()

      }else { //if user is not exit go welcome page
        next({name:"welcome"})

      }
    }
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

<template>
<form>
    <textarea 
    placeholder="text message" 
    v-model="message"
    @keypress.enter="handleSubmit"
    ></textarea>
</form>

</template>

<script>
import { ref } from 'vue';
import  getUser from "../composables/getUser";
import {timestamp} from "../firebase/config";
import useCollection from "../composables/useCollection";
export default {
    setup() {
        let message = ref("");
        let { user }= getUser();
      
        // useCollection("messages")is a actual name let useCollection = (collection) => {
        // so "message" inside (** collection **)

        let {error,addDoc} = useCollection("messages");
        let handleSubmit =async () => {
            let chat = {
                message : message.value,
                name : user.value.displayName,
                created_at : timestamp()
            }
            
            // message is few second late in firebase
            await addDoc(chat)
            // message is sent after clear messsage value
            message.value = "";
        }

        return  {message,handleSubmit};
    }

}
</script>


<style>
form{
    margin : 10px;
}
textarea{
    width:100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border:0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
}

</style>
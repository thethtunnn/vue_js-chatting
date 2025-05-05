<template>
<div class="chat-window">
    <div class="message" v-for="message in messages" :key="message.id">
        <div class="single">
            <span class="created-at">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="message">{{message.message}}</span>

        </div>
        
    </div>

</div>
</template>

<script>
import { ref } from 'vue';
import {db} from "../firebase/config";
export default {
    setup() {
        let messages = ref([]);
         let result = [] //doc is array

        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            // docs is array[]
            snap.docs.forEach((doc) => {
                // console.log(doc);
                // doc.data() ကိုခေါ်လိုက်တာနဲ့ ဒီ document ထဲမှာ သိမ်းထားတဲ့ field တွေကို JavaScript object အနေနဲ့ ပြန်ပေးပါတယ်။
                //  doc.data() call document filed javascript object { "name": "mg mg"}  => { name: "mg mg"}

                let document = {...doc.data(),id: doc.id}
                result.push(document)
                  
            } )
                messages.value = result

        })
        return {messages}
    }

}
</script>

<style>
.chat-window{
    background :#fafafa;
    padding: 30px 20px;
}
.single {
    margin: 18px 0;
}
.created-at {
    display: block;
    color:#999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name {
    font-weight: bold;
    margin-right: 6px;

}
.messages {
    max-height: 400px;
    overflow:auto;
}

</style>
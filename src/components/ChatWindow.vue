<template>
<div class="chat-window">
    <div class="message" ref="msgBox">
        <div class="single"  v-for="message in formattedMessages" :key="message.id">
            <span class="created-at">{{message.created_at}}</span>
            <span class="name">{{message.name}}</span>
            <span class="message">{{message.message}}</span>

        </div>
        
    </div>

</div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue'; 
import {db} from "../firebase/config";
import {formatDistanceToNow} from "date-fns"
export default {
    setup() {
        let messages = ref([]);
        let msgBox = ref(null);
        onUpdated(() => {
            // console.log(msgBox.value.scrollTop)
            msgBox.value.scrollTop = msgBox.value.scrollHeight
        })
                // computed()is return array,{},string,...
                // formattedMessages is [] now
        let formattedMessages = computed(()=> {
            return messages.value.map((msg) => {
                                    //created _at is changing toDate() here 
                let formatTime = formatDistanceToNow(msg.created_at.toDate())
                return {...msg,created_at:formatTime}

            })

        })

        db.collection("messages").orderBy("created_at").onSnapshot((snap) => {
            let result = [] //doc is array
            // docs is array[]
            snap.docs.forEach((doc) => {
                        // console.log(doc);
                        // doc.data() ကိုခေါ်လိုက်တာနဲ့ ဒီ document ထဲမှာ သိမ်းထားတဲ့ field တွေကို JavaScript object အနေနဲ့ ပြန်ပေးပါတယ်။
                        //  doc.data() call document filed javascript object { "name": "mg mg"}  => { name: "mg mg"}

                let document = {...doc.data(),id: doc.id}

                            //problem error of created_at null is solve
                            // if(doc.data().created_at) {
                            //     result.push(document)
                            // }
                            // if created_at is data inside run this code result.push(document)
                            // 1+1 === 2 && console.log(true)
                doc.data().created_at && result.push(document)
                  
            } )
                messages.value = result

        })
        return {messages,formattedMessages,msgBox}
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
.message {
    max-height: 400px;
    overflow:auto;
}


</style>
<template>
    <div class="openEvent">

        <Header></Header>

        <div class="opened">

        <RoundButton title="Вернуться к списку"></RoundButton>

        <div class="separation opened-event" >

            <div class="event-head">
                <h2>{{event.title}}</h2>
                <div class="date-publication">Дата публикации: {{event.dete | formatDate}} </div>
            </div>

            <p class="event-description">{{event.description}}</p>

        </div>
        
        <div class="separation comments">
            <h2 class="comments-title">Комментарии:</h2>

            <CommentItem v-for="(comment, i) in items" :key="i" 
                :comment = comment  
                @deleteThis="deleteThis(i)"
            ></CommentItem>

        </div>
        
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import CommentItem from "@/components/CommentItem.vue";
import RoundButton from "@/components/RoundButton.vue";
import axios from 'axios'

export default {
  
  name: "openEvent",

  props:['eventId'],

   data() {
    return { 
        items: [],
        event: [],
    }
  },

  mounted() {
    axios
      .get('http://5db050f78087400014d37dc5.mockapi.io/api/users/6/events/'+ this.eventId +'/comments')
      .then(response => (this.items = response.data))

    axios
      .get('http://5db050f78087400014d37dc5.mockapi.io/api/users/6/events/'+ this.eventId)
      .then(response => (this.event = response.data))
  },

   components: {
        Header,
        CommentItem,
        RoundButton,
    },

    methods:{
    deleteThis(index){
      this.items.splice(index, 1);
    }
  }
};
</script>

<style lang="scss" scoped>

.separation{
    margin-bottom: 40px
}

.opened{
    padding-left: 150px;
    padding-right: 150px;

    &-event{
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 0px 3px rgb(128, 128, 128);
    }
}

h2{
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 20px;
}

.comment-head{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #888888;
}

p{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #222222;
}

.author{
    display: flex;
}

.comment{
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    border: 1px solid #000000;
    padding: 20px;

    &-head{
        display: flex;
        justify-content: space-between;
    }
}

.event-head{
    display: flex;
    justify-content: space-between;
}

.date-publication{
    font-size: 16px;
    line-height: 19px;
    color: #888888;
}

</style>
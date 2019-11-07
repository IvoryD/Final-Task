<template>
<div id="app">
  <head>
    <meta charset="UTF-8" />
    <title>Event List</title>
  </head>

  <div class="EventList">

    <Header></Header>

    <div class="separation event-list">

      <div class="separation settings">

        <router-link class="router-addEvent"  to="/createEvent">
          <button class="button-addEvent">+ Добавить событие</button>
        </router-link> 

        <button class="sorting">Сортировать по: Дате</button>

      </div>

        <EventItem v-for="(event, i) in items" :key="i" 
            :event = event        
            @delete-event="deleteItem(i)"
        >
        </EventItem>
  
      <nav class="page-selection">
        <button class="button-here">Сюда</button>
        <button class="button-there">Туда</button>
      </nav>

    </div>

  </div>
</div>
</template>

<script>


import axios from 'axios'
import Header from "@/components/Header.vue"
import EventItem from "@/components/EventItem.vue";

export default {
    components: {
        EventItem,
        Header
    },

  data() {
    return { 
        items: [],
    }
  },

  mounted() {
    axios
      .get('http://5db050f78087400014d37dc5.mockapi.io/api/users/6/events/')
      .then(response => (this.items = response.data))
  },

  methods:{
    deleteItem(index){
      this.items.splice(index, 1);
    },
  }
};

</script>

<style lang="scss" scoped>

.EventList {
  display: flex;
  flex-direction: column;
}

.settings {
  display: flex;
  justify-content: space-between;
}

.separation:not(:last-child) {
  margin-bottom: 40px;
}

.router-addEvent{
  text-decoration: none;
  user-select: none;
  border: none;
}

.button-addEvent {
  display: flex;
  align-items: center;
  background-color:#19d94f;
  text-decoration: none;
  user-select: none;
  outline: none;
  border-radius: 40px;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 28px;
  font-weight: 500;
  border: 1px solid none;

  &:hover{
    background-color: rgb(255, 255, 255);
    color: rgb(25, 217, 79);
    border: 1px solid rgb(25, 217, 79);
    cursor: pointer;
  }
}

.sorting {
  text-decoration: none;
  user-select: none;
  outline: none;
  border-radius: 40px;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
  border: 1px solid rgb(0, 0, 0);
  font-size: 24px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  line-height: 28px;

  &:hover{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
    border: 1px solid none;
    cursor: pointer;
  }
}

.event-list {
  padding-left: 150px;
  padding-right: 150px;
  display: flex;
  flex-direction: column;
}

.page-selection {
  display: flex;
  justify-content: center;

  & *{
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #000000;
    border-radius: 5px;
    background-color: rgb(255, 255, 255);
    outline: none;
    font-size: 16px;
    line-height: 19px;
    font-weight: normal;
    padding: 10px;
    
    &:not(:last-child){
      margin-right: 10px;
    }

    &:hover{
      background-color: rgb(210, 210, 210);
    }
  }
}

</style>

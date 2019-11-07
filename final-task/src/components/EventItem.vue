<template>
    <div class="separation event">
      <div class="event-separation event-head">
        <router-link
         class="router-openEvent" 
         :to="{ name: 'openEvent', params: { eventId: event.id}}"
         >
          <h2>{{event.title}}</h2>
        </router-link>
        <button class="button-delete" @click="deleteEvent">Удалить</button>
      </div>

      <p class="event-separation">{{event.description}}</p>

      <div class="event-foot">
        <div class="date-publication">Дата публикации: {{event.dete | formatDate}}</div>
        <div class="count-comments">Комментарии: {{event.countOfComments}}</div>
      </div>
    </div>
</template>

<script>

export default {
  props: {
    event: Object,
  },

  methods:{
    deleteEvent(){
      return this.$emit("delete-event");
    }  
  }
};
</script>

<style lang="scss" scoped>

h2{
  font-size: 24px;
  line-height: 28px;
  font-weight: 500;
  color: #000000;
}

p {
  font-size: 16px;
  font-size: 16px;
  line-height: 19px;
  color:#222222;
  font-weight: normal;
}

.event {
  padding: 15px;
  box-shadow: 0 0px 3px rgb(128, 128, 128);
  border-radius: 10px;
  font-family: Arial;
  line-height: 1.2;

  &-head {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  &-foot {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    color: rgb(151, 151, 151);
  }

  &-separation {
    margin-bottom: 30px;
  } 

  .button-delete {
    color: #FF2F2F;
    border: 1px solid rgba(0, 0, 0, 0);
    background-color: transparent;
    outline: none;
    cursor: pointer;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
  
    &:hover {
      border: 1px solid #FF2F2F;
      background-color: rgb(255, 255, 255);
    }
  }
}

.router-openEvent{
  text-decoration: none;
  user-select: none;
  border: none;
}

</style>
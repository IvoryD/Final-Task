<template>
    <div class="EventList">
        <Header></Header>

        <div class="createEvent">
        
            <RoundButton title="Назад"></RoundButton>

            <h1 class="create-event separation">Создание мероприятия</h1>

            <div class="container-article container-separation">
                <h2 class="article">Заголовок:</h2>
                <input type="text" name="input-article" class="input input-article" placeholder="Введите заголовок мероприятия"/>
            </div>

            <div class="container-description container-separation">
                <h2 class="description">Описание:</h2>
                <input type="text" name="input-description" class="input input-description" placeholder="Введите описание мероприятия"/>
            </div>

            <div class="container-date container-separation">
                <h2 class="date">Дата</h2>
                <input type="date" class="input-date" v-model="date"/>
            </div>
        </div>
    </div>
</template>

<script>

import Header from "@/components/Header.vue"
import RoundButton from "@/components/RoundButton.vue"
export default {
   components: {
        Header,
        RoundButton
    },

    data(){
      return { 
        date: '1970-07-01'
    }
    },

  name: "createEvent",

};
</script>

<style lang="scss" scoped>

h1{
    font-weight: 500;
    font-size: 36px;
    line-height: 42px;
}

h2{
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 15px;
}

.input{
    color: #888888;
    font-size: 16px;
    line-height: 19px;
    width: 100%;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0px 3px rgb(128, 128, 128);
    padding-left: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    outline: none;
}

.input-description{
    padding-bottom: 160px;
}

.input-date{
    color: #888888;
    font-size: 16px;
    line-height: 19px;
    border-radius: 10px;
    border: none;
    box-shadow: 0 0px 3px rgb(128, 128, 128);
    outline: none;
    padding-left: 20px;
    padding-top: 12px;
    padding-right: 20px;
    padding-bottom: 12px;
}

.createEvent{
    display: flex;
    flex-direction: column;
    padding-left: 150px;
    padding-right: 150px;
}

.separation{
    margin-bottom: 40px;
}

.container-separation:not(:last-child){
    margin-bottom: 20px;
}

.router-back{
    text-decoration: none;
    user-select: none;
    border: none;
}

</style>
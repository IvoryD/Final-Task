<template>
    <div class="separation container-roundButton">

        <router-link class="router-back"  to="/">
            <button class="roundButton">&lt;</button>
        </router-link> 
        
        <h1 class="back">{{title}}</h1>
        
    </div>
</template>

<script>
    export default {

        props: {
            title: {
            type:String, 
            required:true
            }    
        },
    }

</script>

<style lang="scss" scoped>

.container-roundButton {
    display: flex;
    align-items: center;
}

.roundButton {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid rgb(191, 191, 191);
    background-color: white;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
    outline: none;
    margin-right: 10px;
    color: rgb(191, 191, 191);
    display: flex;
    align-items: center;
}

.back {
    color: rgb(191, 191, 191);
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
}

.router-back{
    text-decoration: none;
    user-select: none;
    border: none;
}
</style>
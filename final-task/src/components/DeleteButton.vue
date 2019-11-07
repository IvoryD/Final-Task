<template>
     <button class="button-delete" @click="deleteEvent">Удалить</button>
</template>

<script>
export default {

  methods:{
    deleteItem(){
      return this.$emit("delete-item");
    }
  }

};
</script>

<style lang="scss" scoped>

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
  
</style>
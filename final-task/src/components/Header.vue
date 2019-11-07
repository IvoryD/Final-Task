<template>

  <header class="separation">

    <nav class="nav-top">
      <button class="button-past">Прошедшие</button>
      <button class="button-current">Текущие</button>
      <button class="button-nearest">Ближайшие</button>
    </nav>

    <div class="container-search">
      <img class="img-search" src="@/assets/search.png">
      <input type="search" class="search" tabindex="0" placeholder="Поиск..." />
    </div>

  </header>
    
</template>

<script>
</script>

<style lang="scss" scoped>

header {
  display: flex;
  justify-content: space-between;
  padding-left: 170px;
  padding-right: 170px;
  box-shadow: 0 4px 4px rgba($color: #000000, $alpha: 0.25);
  align-items: center;
}

.nav-top {
  display: flex;
  flex-wrap: nowrap;
  & * {
    padding: 20px;
    border: none;
    font-size: 24px;
    background-color: rgb(255, 255, 255);
    outline: none;

    &:hover {
      background-color: #F0EEEE;
      cursor: pointer;
    }
  }
}

.container-search{
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 46px;
  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  width: 108px;

  .search {
    color: #808080;
    font-size: 24px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .img-search{
    position: absolute;
    margin-left: -34px;
    z-index: 1;
    color: #808080
  }
}

.container-search input#search::-webkit-input-placeholder {
  color: #808080
}

</style>
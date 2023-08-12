<template>
  <div class="page-container">
    <div class="nav-bar">

      <div class="nav-item">
        <a href="">Home</a>
        <img src="/home.png" alt="Home" height="30" width="30">
      </div>

      <div class="nav-item">
        <a href="">Talentos</a>
        <img src="/talento.png" alt="Home" height="30" width="30">
      </div>

      <div class="nav-item">
        <a href="">Sobre</a>
        <img src="/sobre.png" alt="Home" height="30" width="30">
      </div>
    </div>

    <br><br><br><br>
    <About></About>
  </div>
</template>

<script>
import About from './views/about/About.vue'

export default {
  components: { About }
}
</script>


<style>
.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-bar {
  display: flex;
  gap: 50px;
}

.nav-item {
  border: solid 2px #9EADBA;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 150px;
  height: 40px;
}
</style>

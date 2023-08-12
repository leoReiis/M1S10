<template>
  <div class="page-container">

    <div class="nav-bar">

      <router-link to="/" class="nav-item">
        <div class="nav-item">
          <a href="">Home</a>
          <img src="/home.png" alt="Home" height="30" width="30">
        </div>
      </router-link>

      <router-link to="/talentos" class="nav-item">
        <div class="nav-item">
          <a href="">Talentos</a>
          <img src="/talento.png" alt="Home" height="30" width="30">
        </div>
      </router-link>

      <router-link to="/sobre" class="nav-item">
        <div class="nav-item">
          <a href="">Sobre</a>
          <img src="/sobre.png" alt="Home" height="30" width="30">
        </div>
      </router-link>

    </div>

    <br><br><br><br>
    <About></About>
    <Home></Home>
    <Talentos></Talentos>
  </div>
</template>

<script>
import About from './views/about/About.vue'
import Home from './views/Home/Home.vue'
import Talentos from './views/Talentos/Talentos.vue'

export default {
  components: { About, Home, Talentos }
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

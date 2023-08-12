<template>
  <div class="main-container">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from './components/Menu/Menu.vue'

export default {
  components: { Menu }
}
</script>


<style>
.main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

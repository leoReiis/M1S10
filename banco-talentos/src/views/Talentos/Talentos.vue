<template>
  <div class="main-container">
    <h1>Talentos</h1>
    <br><br>
    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, expedita ut similique, totam necessitatibus,
      architecto voluptate neque facere adipisci omnis ea iste veritatis placeat unde assumenda possimus dignissimos quos
      esse!</h2>
    <br>
    <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium molestias beatae voluptas facere laboriosam
      unde quod tempore maxime autem iusto dicta, animi provident omnis nihil dignissimos distinctio reiciendis sapiente
      aspernatur.</h2>
    <br>
    <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam quae recusandae ex, quis vero aperiam ipsum?
      Repellat iusto distinctio consectetur nam vitae qui ratione? Eum quae sequi recusandae dolorem unde?</h2>
    <br><br>

    <h2>Faça parte, Cadastre-se</h2>
    <br><br><br>
    <router-link to="/talentos/novo">
      <button>Cadastrar</button>
    </router-link>
  </div>
</template>

<script>
import NovoTalento from './CadastrarTalento.vue'
export default {
  components: { NovoTalento }
}
</script>

<style scoped>
.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
}

button {
  height: 40px;
  width: 200px;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  background-color: #A5D1FE;
  cursor: pointer;
}
</style>
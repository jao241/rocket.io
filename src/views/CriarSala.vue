<template>
  <div class="home">
    <logo/>
    <div class="main">
      <background-image/>
      <section class="formulario">
        <h2>Crie sua própria sala</h2>
        <input type="password" name="" id="" placeholder="Insira uma senha">
        <router-link to="/home">
          <img src="" alt=""> Criar sala
        </router-link>
      </section>
    </div>
    <background-itens/>
  </div>
</template>

<script>
import BackgroundImage from '../components/Background-image.vue'
import BackgroundItens from '../components/Background-itens.vue'
import Logo from '../components/Logo.vue'

export default {
  name: 'CriarSala',
  components: { Logo, BackgroundImage, BackgroundItens}
}
</script>

<style scoped>
  .main{
    display: flex;
  }
</style>
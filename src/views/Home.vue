<template>
  <div>
    <logo/>
    <div class="main">
      <background-image/>
      <section class="formularios">
        <form action="">
          <h2>Entre como participante</h2>
          <input type="text" placeholder="Código da sala" v-model="state.codigo">
          <button class="button"><img src="@/assets/entrar-sala-icone.svg" alt="Icone entrar na sala"> Entrar na sala</button>
        </form>
        <div>
          <span></span>
          <p>ou</p>
          <span></span>
        </div>
        <form action="">
          <h2>Crie sua própria sala, de forma fácil</h2>
            <router-link to="/criar" class="button btn-criar-sala">
              <img src="@/assets/criar-sala-icone.svg" alt="Icone criar a sala"> Criar sala
            </router-link>
        </form>
      </section>
    </div>
      <background-itens/>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import backgroundItens from '../components/Background-itens.vue'
import backgroundImage from '../components/Background-image.vue'
import Logo from '../components/Logo.vue'

export default {
  name: 'Home',
  components: {backgroundItens, backgroundImage, Logo},
  setup(){
    const state = reactive({
      codigo: ''
    })

    return{
      state,
    }
  }
}
</script>

<style scoped>

a{
  display: flex;
  text-decoration: none;
  color: #3485FF;
  font-family: 'Poppins', sans-serif;
}

.main{
  display: flex;
}

.formularios{
  margin: 80px auto;
}

.formularios form{
  display: flex;
  flex-direction: column;
  width: 70%;
}

.formularios form h2{
  font-family: 'Poppins', sans-serif;
  font-size: 28px;
  margin-top: 20px;
}

.formularios form input{
  font-family: 'Open Sans', sans-serif;
  padding: 10px;
  margin-bottom: 20px;
  border-color: grey;
  border-radius: 5px;
  border-style: solid;
}

.formularios div{
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  width: 70%;
  align-items: center;
}

.formularios span{
  border-bottom: 1px solid black;
  width: 160px;
}

.formularios p{
  margin: 10px;
}

.formularios form button img{
  margin-right: 10px;
}

.formularios .btn-criar-sala{
  background-color: white;
  color: #0555e9c0;
  border-style: solid;
  border-color: #0555e9c0;
}

.formularios form button, .formularios form input{
  font-size: 16px;
}

.button{
  font-family: 'Poppins', sans-serif;
  background-color: #0555e9c0;
  padding: 10px;
  margin-bottom: 20px;
  border-color: grey;
  border-radius: 5px;
  border-style: solid;
  color: white;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button img{
  margin-right: 10px;
}

</style>

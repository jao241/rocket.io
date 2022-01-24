<template>
    <div class="sala">
        <header>
            <logo/>
            <options/>
        </header>
        <h2>Faça a sua pergunta</h2>
        <textarea name="" id=""></textarea>
        <button>Enviar</button>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Options from '../components/Options.vue'

export default {
  components: { Logo, Options },
    name: 'Sala'
}
</script>

<style scoped>

.sala header{
    display: flex;
}

</style>
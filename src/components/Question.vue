<template>
    <section class="com-perguntas">
        <div class="pergunta-bloco" :class="options">
            <div class="pergunta">
                <img src="@/assets/anonimo.svg" alt="icone anonimo" v-if="options.defaultColor">
                <img src="@/assets/anonimo-cinza.svg" alt="icone anonimo" v-else>
                <p>{{question.question}}</p>
            </div>
            <div class="opcoes" v-if="options.defaultColor">
                <div class="checar">
                    <img src="@/assets/check-icone.svg" alt="icone de checado">
                    <p @click="checkQuestion">Marcar como lida</p>
                </div>
                <div class="remover">
                    <img src="@/assets/trash-icone.svg" alt="icone de lixeira">
                    <p>Excluir</p>
                </div>
            </div>
            <div class="opcoes margin-max" v-else>
                <div class="checar">
                    <img src="@/assets/check-icone.svg" alt="icone de checado">
                    <p>Pergunta lida</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props:{
        question: Object
    },
    data(){
        return{
            options: {
                defaultColor: true,
                checkedColor: false
            },
        }
    },
    methods: {
        checkQuestion(){
            this.options.defaultColor = false;
            this.options.checkedColor = true;
        }
    }
}
</script>

<style scoped>

div{ 
    display: flex;
}

p{
    color: #0D114F;
}

.pergunta-bloco{
    border-radius: 0 3px 3px;
    justify-content: initial;
    flex-direction: column;
    margin-bottom: 10px;
}

.defaultColor{
    background-color: #E0ECFF;
}

.checkedColor{
    background-color: #D3D9E2;
}

.pergunta{
    padding-top: 20px;
}

.pergunta img{
    width: 52px;
    height: 52px;
    padding: 0 10px;
}

.pergunta p{
    font-family: 'Open sans', sans-serif;
    font-size: 16px;
}

.opcoes{
    margin-left: 80%;
}

.opcoes img{
    width: 24px;
    height: 24px;
    padding-right: 5px;
}

.opcoes p{
    padding-right: 10px;
    font-family: 'Open sans', sans-serif;
    color: #4D5E77;
}

.checar,
.remover{
    align-items: center;
    cursor: pointer;
}

.margin-max{
    margin-left: 88%;
}
</style>
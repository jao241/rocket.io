<template>
    <div class="sala">
        <header>
            <logo/>
            <options/>
        </header>
        <section>
            <h2>Faça a sua pergunta</h2>
            <!-- <textarea name="" id="" placeholder="O que você quer perguntar?"></textarea> -->
            <div class="novaPergunta">
                <input type="text" name="pergunta" id="pergunta" placeholder="O que você quer perguntar?">
                <div class="texto">
                    <img src="@/assets/cadeado.svg" alt="cadeado"><p>Esta pergunta é anônima</p>
                    <button>Enviar</button>
                </div>
            </div>
        </section>
        <section class="sem-perguntas" v-show="!hasQuestions">
            <img src="@/assets/baloes-conversa.svg" alt="baloes de conversa">
            <h3>Nenhuma pergunta por aqui...</h3>
            <p>Faça sua primeira pergunta e envie o código dessa sala para outras pessoas!</p>
        </section>
        <section class="com-perguntas">
            <div class="pergunta-bloco" v-for="question in questions" :key="question.id">
                <div class="pergunta">
                    <img src="@/assets/anonimo.svg" alt="icone anonimo">
                    <p>{{question.question}}</p>
                </div>
                <div class="opcoes">
                    <div class="checar">
                        <img src="@/assets/check-icone.svg" alt="icone de checado">
                        <p>Marcar como lida</p>
                    </div>
                    <div class="remover">
                        <img src="@/assets/trash-icone.svg" alt="icone de lixeira">
                        <p>Excluir</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Options from '../components/Options.vue'

export default {
  components: { Logo, Options },
    name: 'Sala',
    data(){
        return{
            questions: [{
                id: 1,
                question: 'Qual a diferença entre const, var e let no Javascript?'
            },
            {
                id: 2,
                question: 'O que é Typescript?'
            },
            {
                id: 3,
                question: 'O que é Javascript?'
            }
            ]
        }
    },
    computed:{
        hasQuestions(){
            return this.questions.length > 0 ? true : false;
        }
    }
}
</script>

<style scoped>

.sala header{
    display: flex;
}

.sala section h2{
    font-family: 'Poppins', sans-serif;
}

.sala section{
    width: 80%;
    margin: 50px auto 0;
}

.sala section div{
    display: flex;
}

.novaPergunta{
    border: 2px solid #A1B2CD;
    border-radius: 0 3px 3px;
    flex-direction: column;
}

.novaPergunta input{
    outline: none;
    border: none;
    padding: 10px 0 100px 10px;
    font-family: 'Open sans', sans-serif;
    font-size: 16px;
}

.sala section button{
    height: 35px;
    margin-left: 80%;
    padding: 0 14px;
    background-color: #3485FF;
    text-decoration: none;
    color: white;
    font-family: 'Poppins', sans-serif;
    border-radius: 2px;
    border: none;
    cursor: pointer;
}

.sala section div .texto img{
    padding: 0 10px;
}

.texto{
    align-items: center;
}

.texto p{
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #A5B0C1;
}

.sala .sem-perguntas{
    width: 17vw;
    display: flex;
    flex-direction: column;
    align-items: center;    
}

.sala .sem-perguntas h3{
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #0D114F;
}

.sala .sem-perguntas p{
    font-family: 'Open Sans', sans-serif;
    font-size: 14px;
    color: #4D5E77;
}

.pergunta-bloco{
    background-color: #E0ECFF;
    border-radius: 0 3px 3px;
    justify-content: initial;
    flex-direction: column;
    margin-bottom: 10px;
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
</style>
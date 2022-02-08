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
                <input type="text" name="pergunta" id="pergunta" placeholder="O que você quer perguntar?" v-model="newQuestion">
                <div class="texto">
                    <img src="@/assets/cadeado.svg" alt="cadeado"><p>Esta pergunta é anônima</p>
                    <button @click="addQuestion">Enviar</button>
                </div>
            </div>
        </section>
        <no-question v-show="!hasQuestions"/>
        <question v-for="question in questions" :key="question.id" :question="question"/>
    </div>
</template>

<script>
import Logo from '../components/Logo.vue'
import Options from '../components/Options.vue'
import Question from '../components/Question.vue'
import NoQuestion from '../components/NoQuestion.vue'

export default {
  components: { Logo, Options, Question, NoQuestion },
    name: 'Sala',
    data(){
        return{
            questions: [
            {
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
            ],
            newQuestion: '',
            count: 4
        }
    },
    computed:{
        hasQuestions(){
            return this.questions.length > 0 ? true : false;
        }
    },
    methods: {
        addQuestion(){
            const objQuestion = {
                id: this.count,
                question: this.newQuestion
            }

            this.questions.unshift(objQuestion);
            this.count++;
            this.newQuestion = '';
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
    margin: 20px auto 0 auto;
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

</style>
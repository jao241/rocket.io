<template>
    <div>
        <button class="button ">#323243 
            <img src="@/assets/copy.svg" alt="copiar">
        </button>
        <router-link to="/" class="button">
            <img src="@/assets/criar-sala-white-icone.svg" alt="criar sala"> Criar sala
        </router-link>
    </div>
</template>

<style scoped>

a{
  display: flex;
  text-decoration: none;
  color: white;
  font-family: 'Poppins', sans-serif;
  background-color: #3485FF;
}

a img{
    padding-right: 10px;
}

div{
    display: flex;
    margin-left: 60%;    
    margin-top: 30px;
    height: 80px;

}

.button{
    font-family: 'Poppins', sans-serif;
    padding: 10px;
    margin-bottom: 20px;
    border-color: grey;
    border-radius: 5px;
    border-style: solid;
    border-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: 10px;
    margin: 10px;
}

button:nth-child(1){
    background-color: white;
    color: #0555e9c0;
    border-style: solid;
    border-color: #0555e9c0;
}

button img{
    padding-left: 5px;
}
</style>
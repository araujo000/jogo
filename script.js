/* =========================================
   O JARDIM DO NOSSO AMOR
   SCRIPT.JS
   PARTE 1
========================================= */


// ================================
// ELEMENTOS
// ================================

const intro = document.getElementById("intro");
const game = document.getElementById("game");
const envelopeScene = document.getElementById("envelopeScene");
const letterScene = document.getElementById("letterScene");
const finalScene = document.getElementById("finalScene");


const startButton = document.getElementById("start");
const openEnvelopeButton = document.getElementById("openEnvelope");
const restartButton = document.getElementById("restart");


const question = document.getElementById("question");
const answersBox = document.getElementById("answers");
const counter = document.getElementById("counter");

const letterText = document.getElementById("letterText");

const music = document.getElementById("music");



// ================================
// PÉTALAS
// ================================


const petals = [

document.getElementById("petal1"),
document.getElementById("petal2"),
document.getElementById("petal3"),
document.getElementById("petal4"),
document.getElementById("petal5")

];



// ================================
// VARIÁVEIS
// ================================


let currentQuestion = 0;

let petalsOpened = 0;




// ================================
// PERGUNTAS
// ================================


const questions = [


{

text:

"O que cresce quanto mais dividimos com alguém?",

answers:[

"Dinheiro",

"Tempo",

"Amor ❤️",

"Sorte"

],

message:

"Porque o amor verdadeiro nunca diminui."

},



{

text:

"O que transforma um dia comum em um dia especial?",

answers:[

"Um presente",

"Uma viagem",

"Seu sorriso ❤️",

"Um lugar"

],

message:

"Seu sorriso consegue mudar tudo ao meu redor."

},



{

text:

"Qual é o melhor lugar do mundo?",

answers:[

"Uma praia",

"Uma cidade",

"Seus braços ❤️",

"Minha casa"

],

message:

"Porque meu lugar favorito sempre será ao seu lado."

},



{

text:

"O que vale mais que qualquer riqueza?",

answers:[

"Dinheiro",

"Fama",

"Nosso amor ❤️",

"Sucesso"

],

message:

"Porque ter você vale mais do que qualquer coisa."

},



{

text:

"Se eu pudesse escolher novamente..."

,

answers:[

"Você ❤️",

"Você ❤️",

"Você ❤️",

"Você ❤️"

],

message:

"A resposta sempre foi você."

}


];




// ================================
// CARTA FINAL
// ================================


const letter = `

Igual eu sempre falo pra você, isso daqui é apenas uma lembrancinha 
para você lembrar e ver o quão  
especial você é para mim, chatgpt me ajudou em praticamente toda criação
porem sem um ponta pé
inicial esse jogo não funcionaria, espero que você goste mesmo sendo simples
tinha muito tempo que eu não programava...
e mais uma vez exaltando você aqui porque é uma mulher excepcional em tudo que faz
e mais uma vez agradecer por estar comigo para tudo, melhor parte do meu dia é compartilhar
ele contigo, sua presença mesmo distante ja melhora meu dia

eu te amo para todo o sempre, minha pretona bicudinha mãe dos meus pivete.

`;




// ================================
// COMEÇAR
// ================================


startButton.onclick = () => {


intro.classList.remove("active");


game.classList.add("active");



music.volume = 0;

music.play().catch(()=>{});


let volume = 0;

let fade = setInterval(()=>{

    if(volume < 0.35){

        volume += 0.01;

        music.volume = volume;

    }else{

        clearInterval(fade);

    }

},100);



showQuestion();


};/* =========================================
PARTE 2
SISTEMA DO JOGO
========================================= */



// ================================
// MOSTRAR PERGUNTA
// ================================


function showQuestion(){


 let data = questions[currentQuestion];


 question.innerHTML = data.text;


 answersBox.innerHTML = "";



 data.answers.forEach(answer => {



     const button = document.createElement("div");


     button.classList.add("answer");


     button.innerHTML = answer;



     button.onclick = () => {

         answerQuestion();

     };



     answersBox.appendChild(button);



 });



}



// ================================
// RESPONDER
// ================================


function answerQuestion(){



 // evita múltiplos cliques

 const buttons = document.querySelectorAll(".answer");


 buttons.forEach(button => {


     button.style.pointerEvents = "none";


 });



 // abre pétala atual

 petals[petalsOpened].classList.add("open");



 petalsOpened++;



 counter.innerHTML =

 `Pétalas: ${petalsOpened} / 5`;



 showMessage();



 setTimeout(()=>{



     currentQuestion++;



     if(currentQuestion >= questions.length){


         finishFlower();


     }else{


         showQuestion();


     }



 },2200);



}



// ================================
// MENSAGEM ROMÂNTICA
// ================================


function showMessage(){



 const message = document.createElement("p");


 message.classList.add("loveMessage");



 message.innerHTML =

 questions[currentQuestion].message;



 game.appendChild(message);



 setTimeout(()=>{


     message.remove();



 },2000);



}



// ================================
// FINAL DA FLOR
// ================================


function finishFlower(){



 question.innerHTML =

 "🌹 Nossa flor floresceu";



 answersBox.innerHTML = "";



 counter.innerHTML =

 "5 / 5 pétalas abertas ❤️";



 setTimeout(()=>{


     game.classList.remove("active");


     envelopeScene.classList.add("active");



 },3500);



}





// ================================
// ABRIR ENVELOPE
// ================================


openEnvelopeButton.onclick = () => {



 envelopeScene.classList.remove("active");


 letterScene.classList.add("active");



 typeLetter();



};/* =========================================
PARTE 3
CARTA + FINAL + EFEITOS
========================================= */



// ================================
// MÁQUINA DE ESCREVER
// ================================


let letterIndex = 0;


function typeLetter(){


 letterText.innerHTML = "";


 letterIndex = 0;


 writeLetter();


}



function writeLetter(){



 if(letterIndex < letter.length){


     letterText.innerHTML += letter.charAt(letterIndex);


     letterIndex++;


     setTimeout(writeLetter,35);



 }else{


     setTimeout(()=>{


         goToFinal();



     },3000);


 }



}



// ================================
// IR PARA TELA FINAL
// ================================


function goToFinal(){



 letterScene.classList.remove("active");


 finalScene.classList.add("active");



 startHearts();



}



// ================================
// CORAÇÕES
// ================================


const sky = document.getElementById("sky");



function createHeart(){



 const heart = document.createElement("div");


 heart.innerHTML = "❤️";


 heart.style.position = "fixed";


 heart.style.bottom = "-20px";


 heart.style.left = Math.random()*100+"vw";


 heart.style.fontSize =

 (15 + Math.random()*30)+"px";


 heart.style.animation =

 "heartFloat 6s linear forwards";



 heart.style.zIndex = "999";



 document.body.appendChild(heart);



 setTimeout(()=>{


     heart.remove();



 },6000);



}



let heartTimer;



function startHearts(){


 heartTimer = setInterval(createHeart,350);


}



// ================================
// REINICIAR
// ================================


restartButton.onclick = () => {



 clearInterval(heartTimer);



 finalScene.classList.remove("active");


 intro.classList.add("active");



 currentQuestion = 0;


 petalsOpened = 0;



 counter.innerHTML =

 "Pétalas: 0 / 5";



 petals.forEach(petal=>{


     petal.classList.remove("open");


 });



 letterText.innerHTML = "";



 music.pause();


 music.currentTime = 0;



};


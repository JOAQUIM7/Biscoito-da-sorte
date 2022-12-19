const ButtonOpen = document.querySelector(".open")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonagain = document.querySelector(".again")

const fortune = [
    "O aprendizado é como o horizonte: não há limites.",
    "Não há que ser forte, há que ser flexível.",
    "Limitações são fronteiras criadas apenas pela nossa mente.",
    "O cão não ladra por valentia e sim por medo.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "A palavra é prata, o silêncio é ouro.",
    "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
    "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
    "O homem só envelhece quando os lamentos substituem seus sonhos.",
    "A persistência realiza o impossível.",
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "A vida trará coisas boas se tiver paciência.",
    "O amor está sempre mais próximo do que você imagina.",
    "Realize o óbvio, pense no improvável e conquiste o impossível.",
  ]


function shiftPage() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

ButtonOpen.addEventListener('click', function() {
    shiftPage()
    pickFortune()
})

buttonagain.addEventListener('click', function() {
    shiftPage()
})


function pickFortune() {
    let allFortunes = fortune.length
    let randomNumber = Math.floor(Math.random() * allFortunes)  
    screen2.querySelector("p").innerText = `${fortune[randomNumber]}`
}
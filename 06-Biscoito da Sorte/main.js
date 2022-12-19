const ButtonOpen = document.querySelector(".open")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const buttonagain = document.querySelector(".again")

function shiftPage() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

ButtonOpen.addEventListener('click', function() {
    shiftPage()
})

buttonagain.addEventListener('click', function() {
    shiftPage()
})
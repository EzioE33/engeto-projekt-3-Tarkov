// Datum a čas
function updateDateTime() {
    const now = new Date()
    const currentDateTime = now.toLocaleString()
    document.querySelector("#datetime").textContent = currentDateTime
}
setInterval(updateDateTime, 1000)

// Animace hamburgru
const hamburger = document.querySelector(".hamburger")
const navBar = document.querySelector(".nav-bar")
const firstBar = document.querySelector(".bar:nth-child(1)")
const secondBar = document.querySelector(".bar:nth-child(2)")
const thirdBar = document.querySelector(".bar:nth-child(3)")
const buttonUp = document.querySelector(".btn-up")
const switcher = document.getElementById('switcher')

hamburger.onclick = function () {
    hamburger.classList.toggle("change")
    navBar.classList.toggle("active")
    switcher.style.display = "none"
}

const scaleChanger = (element, number) => {
    element.style.scale = number
}

const menuColorChanger = (color) => {
    firstBar.style.background = color
    secondBar.style.background = color
    thirdBar.style.background = color
}

hamburger.addEventListener("mouseenter", () => {
    scaleChanger(hamburger, 1.2)
    menuColorChanger("wheat")
})

hamburger.addEventListener("mouseleave", () => {
    scaleChanger(hamburger, 1.0)
    menuColorChanger("white")
})

document.onclick = function (e) {
    if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
        hamburger.classList.remove("change")
        navBar.classList.remove("active")
        switcher.style.display = "block"
    }
}

// Nové tlačítko dark/light
const body = document.querySelector("body")

switcher.onclick = function () {
    switcher.classList.toggle('light')
    body.classList.toggle('light')
}

// Sekce ANIMATION + CLIPS
const videos = document.querySelectorAll("video:not(.vault--animation video)")

videos.forEach(video => {
    video.addEventListener("mouseenter", () => {
        video.play()
        scaleChanger(unmuteBtn, 0.8)
        scaleChanger(muteBtn, 0.8)
    })
    video.addEventListener("mouseleave", () => {
        video.pause()
        scaleChanger(unmuteBtn, 1.0)
        scaleChanger(muteBtn, 1.0)
    })
})

const muteControlFirst = document.getElementById("myVideoFirst")
const muteControlSecond = document.getElementById("myVideoSecond")
const unmuteBtn = document.querySelector(".icon--unmute")
const muteBtn = document.querySelector(".icon--mute")

function disableMute() {
    muteControlFirst.muted = false;
    muteControlSecond.muted = false;
    unmuteBtn.style.display = "none"
    muteBtn.style.display = "block"
}
function enableMute() {
    muteControlFirst.muted = true;
    muteControlSecond.muted = true;
    muteBtn.style.display = "none"
    unmuteBtn.style.display = "block"
}

// Sekce - ZB-014
const formular = document.querySelector(".form")
const formHeader = document.querySelector(".form h1")
const formWindow = document.querySelector(".form--window")
const fullName = document.querySelector(".fullName")
const email = document.querySelector(".email")
const notName = document.querySelector(".notificationName")
const notificationMailWrong = document.querySelector(".notificationMailWrong")
const password1 = document.querySelector(".password1")
const password2 = document.querySelector(".password2")
const passwordMatch = document.querySelector(".passwordMatch")
const passwordNotMatch = document.querySelector(".passwordNotMatch")
const vaultAnimation = document.querySelector(".vault--animation")
const accesAnimation = document.querySelector(".vault--animation video")
const pattern = /^([a-z\d\.\-]+)@([a-z\d\-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

email.addEventListener("input", () => {
    const emailValue = email.value

    if (emailValue.match(pattern)) {
        notificationMailWrong.style.display = "none"
    } else {
        attention(notificationMailWrong)
    }
})

const attention = (element) => {
    element.style.display = "block"
}

const hidding = (element) => {
    element.style.display = "none"
}

formular.addEventListener("submit", (event) => {
    event.preventDefault()

    if (fullName.value !== "" && email.value.match(pattern) && password1.value === password2.value) {
        attention(passwordMatch)
        attention(vaultAnimation)
        attention(accesAnimation)
        hidding(formular)
        accesAnimation.play()
    } if (fullName.value === "") {
        attention(notName)
    } if (password1.value !== password2.value) {
        attention(passwordNotMatch)
    } if (password1.value === password2.value) {
        hidding(passwordNotMatch)
    } if (fullName.value !== "") {
        hidding(notName)

    }
})

// Tlačítko UP
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        buttonUp.style.display = "block"
    } else {
        buttonUp.style.display = "none"
    }
})

buttonUp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})




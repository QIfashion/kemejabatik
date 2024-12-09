const searchInput = document.getElementById("searchInput")
const searchIcon = document.getElementById("searchIcon")

searchInput.addEventListener('focus', function () {
    searchIcon.style.opacity = '0';
    searchInput.setAttribute('placeholder', '')
})

searchInput.addEventListener('blur', function () {
    if (searchInput.value === '') {
        searchIcon.style.opacity = '1';
        searchInput.setAttribute('placeholder', '     Cari produk...')
    }
})

//countdown-time

let timeRemaining = 3 * 60 * 60

function updateCountdown() {

    let hours = Math.floor(timeRemaining / 3600)
    let minutes = Math.floor((timeRemaining % 3600) / 60)
    let seconds = timeRemaining % 60;

    document.getElementById("hours").innerHTML = `${hours} <span>JAM<span>`;
    document.getElementById("minutes").innerHTML = `${minutes} <span>MENIT<span>`
    document.getElementById("seconds").innerHTML = `${seconds} <span>DETIK<span>`

    if (timeRemaining > 0) {
        timeRemaining--;
    } else {
        document.getElementById("countdown").innerHTML = "waktu habis!!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

let notifElement = Array.from(document.querySelectorAll('.notif'));
let remainingNotif = [...notifElement];
let cooldownTime = 10 * 60 * 1000;

function showNotification() {
    if (remainingNotif.length === 0) {
        setTimeout(() => {
            remainingNotif = [...notifElement];
        }, cooldownTime);
        return;
    }

    let randomIndex = Math.floor(Math.random() * notifElement.length);
    let selectedNotif = notifElement[randomIndex];

    selectedNotif.classList.add('show');

    setTimeout(() => {
        selectedNotif.classList.remove('show');
    }, 3000)

    remainingNotif.splice(randomIndex, 1);
}

setInterval(showNotification, 10000)

let lastScrollTop = 0;
let notifContainer = document.querySelector('.container-notif');

window.addEventListener ('scroll', () => {
    let currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop) {
        notifContainer.classList.add('scrolled');
    } else {
        notifContainer.classList.remove('scrolled');
    }

    lastScrollTop = currentScrollTop;
});
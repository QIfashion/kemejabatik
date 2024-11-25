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

const countdownInterval = setInterval(updateCountdown, 1000)
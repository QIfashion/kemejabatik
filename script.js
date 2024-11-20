const searchInput = document.getElementById("searchInput")
const searchIcon = document.getElementById("searchIcon")

searchInput.addEventListener('focus', function () {
    searchIcon.style.opacity = '0';
    searchInput.setAttribute('placeholder', '')
})

searchInput.addEventListener('blur', function () {
    if (searchInput.value === '') {
        searchIcon.style.opacity = '1';
        searchInput.setAttribute('placeholder','     Cari produk...')
    }
})


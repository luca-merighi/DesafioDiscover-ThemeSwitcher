const body = document.querySelector('body')
const toggleTheme = document.querySelector('.toggle')

toggleTheme.addEventListener('click', () => {
    toggleTheme.classList.toggle('dark')
    body.classList.toggle('dark')

    saveThemeOnLocalStorage()
})

toggleTheme.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        toggleTheme.classList.toggle('dark')
        body.classList.toggle('dark')

        saveThemeOnLocalStorage()
    }
})

function saveThemeOnLocalStorage() {
    if(body.classList.contains('dark')) {
        window.localStorage.setItem('theme', JSON.stringify('dark'))
    } else {
        window.localStorage.setItem('theme', JSON.stringify('light'))
    }
}

const getThemeInLocalStorage = JSON.parse(localStorage.getItem('theme'))
if(getThemeInLocalStorage == 'dark') {
    toggleTheme.classList.toggle('dark')
    body.classList.toggle('dark')
}
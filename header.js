const header = document.querySelector('.site-header')

window.addEventListener('scroll', () => {
    if(window.scrollY > 50) {
        header.classList.add('site-header--scrolled')

    } else {
        header.classList.remove('site-header--scrolled')
    }
})

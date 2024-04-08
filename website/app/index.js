const body = document.querySelector('body');
const header = document.querySelector(".header");
const btnHamburger = document.getElementById('btnHamburger');
const fadeElems = document.querySelectorAll('.fadeElems')


// Hamburger Button Clicked or Menu Section

btnHamburger.addEventListener("click", openMenu);

function openMenu() {
    if (header.classList.contains('open')) {
        body.style.overflow = 'auto';
        fadeElems.forEach(elems => {
            elems.classList.add('fade-out');
            elems.classList.remove('fade-in');
        })
        header.classList.remove('open');
    }

    else {
        body.style.overflow = 'hidden';
        fadeElems.forEach(elems => {
            elems.classList.add('fade-in');
            elems.classList.remove('fade-out');
        })
        header.classList.add('open')
    }
}

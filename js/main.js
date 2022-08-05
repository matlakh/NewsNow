document.addEventListener('DOMContentLoaded', function(event) {
    const headerMenu = document.getElementById('header__menu');
    const dropdownMenu = document.getElementById('main__aside--dropdownbody');
    const dropdownBtn = document.getElementById('main__aside--dropdownbtn');
    const dropdownCircle = document.getElementById('main__aside--circle');
    const links = document.querySelectorAll('#article-link');
    const strParents = document.querySelectorAll('#main__author--text');
    const moreButtons = document.querySelectorAll('#main__author--more');
    const nav = document.querySelector('#nav');
    const menu = document.querySelector('#menu');
    const menuToggle = document.querySelector('.nav__toggle');
    const menuClose = document.querySelector('.nav__close');
    const body = document.querySelector('#body');
    const windowInnerWidth = window.innerWidth;
    let isMenuOpen = false;
    const accordionsButton = document.querySelectorAll('#footer__accordion--button');
    const accordions = document.querySelectorAll('#footer__accordion');
    const accordionsPanel = document.querySelectorAll('#footer__accordion--panel');

    // Header Scroll
    window.onscroll = function() {
        var top = this.document.scrollingElement.scrollTop;
        if (top >= 354) {
            headerMenu.classList.add('active');
        } else if (top <= 354) {
            headerMenu.classList.remove('active');
        }
    }

    // Aside Menu Open 
    dropdownBtn.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-menu');
        dropdownCircle.classList.toggle('active');
    })
    dropdownCircle.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show-menu');
        dropdownCircle.classList.toggle('active');
    })

    // Smooth Scrolling in Aside
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault()

            const blockID = link.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })
    }

    //Article Script
    for (let i = 0; i < strParents.length; i++) {
        const str = strParents[i].innerHTML;
        if (windowInnerWidth <= 425) {
            strParents[i].innerHTML = str.substr(0, 280);
        } else if (windowInnerWidth <= 992) {
            strParents[i].innerHTML = str.substr(0, 700);
        } else if (windowInnerWidth <= 1200) {
            strParents[i].innerHTML = str.substr(0, 650);
        } else {
            strParents[i].innerHTML = str.substr(0, 850);
        }


        moreButtons[i].addEventListener('click', function() {
            this.style.display = 'none';
            strParents[i].classList.add('active');
            strParents[i].innerHTML = str;
        })
    }

    //Mobile Menu Toggle
    menuToggle.addEventListener('click', e => {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;

        body.classList.add('body__hidden');
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');
    });
    menuClose.addEventListener('click', e => {
        e.preventDefault();
        isMenuOpen = !isMenuOpen;

        body.classList.remove('body__hidden');
        menu.hidden = !isMenuOpen;
        nav.classList.toggle('nav--open');
    });

    //Footer Accordion
    for (let i = 0; i < accordionsButton.length; i++) {
        accordionsButton[i].addEventListener('click', function() {
            accordions[i].classList.toggle('open');
            accordionsPanel[i].classList.toggle('show-menu');
        })
    }
})
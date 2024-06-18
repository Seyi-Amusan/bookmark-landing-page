import { tabcontent } from "./tabComponent.js";
const tabs = Array.from(document.getElementsByClassName('tab'))
const hrs = Array.from(document.getElementsByClassName('hr'))
const target =  document.querySelector('.target')
const navIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.icon-close')
const mobileNav = document.querySelector('.mobile-nav')
const headers = document.querySelectorAll('.accordion-header');

console.log(hrs);

//MOBILE-NAV
navIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('block')
})

closeIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('block')
})

//TABS
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        target.innerHTML = tabcontent[index]

        hrs.forEach( (hr, i) => {
            if (i === index) {
                hr.classList.add('active')
            } else {
                hr.classList.remove('active')
            }
        });
    })
})


//ACCORDION
headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;

        content.classList.toggle('show');
    });
});
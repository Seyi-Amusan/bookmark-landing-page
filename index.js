import { tabcontent } from "./tabComponent.js";
const tabs = Object.values(document.getElementsByClassName('tab'))
const target =  document.getElementsByClassName('target')
const navIcon = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.icon-close')
const mobileNav = document.querySelector('.mobile-nav')

console.log(mobileNav);

navIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('block')
})

closeIcon.addEventListener('click', () => {
    mobileNav.classList.toggle('hidden')
    mobileNav.classList.toggle('block')
})

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        target.innerHtml = tabcontent[index]
        console.log(tabcontent[index]);
        console.log(target);
    })
})
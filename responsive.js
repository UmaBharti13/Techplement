burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
right_nav=document.querySelector('.right_nav')
navlist=document.querySelector('.navlist')


burger.addEventListener('click',()=>{
    right_nav.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})
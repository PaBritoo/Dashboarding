 const sideMenu = document.querySelector ("aside");
 const menuBtn = document.querySelector ('#menu-btn');
 const closeBtn = document.querySelector ('#closed-btn');
 const themeToggler = document.querySelector('#version');

 // show sidebar
 menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
 })

 // close sidebar             >>>>>>>corrigir erro<<<<<<
 /*closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
 })*/


 //change theme
 themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle ('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle ('active');
 })

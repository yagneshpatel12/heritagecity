function navbar_font_color_change(){
//Getting Some Element
var navbar_section = document.getElementsByClassName('navbar-section')[0];
var nav_color_change = document.getElementsByClassName('color-change');
var hamburger_icon = document.getElementsByClassName('hamburger')[0];
let sidebar = document.getElementsByClassName('sidebar')[0];
//changing font color on scroll
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar_section.style.backgroundColor='white';
        hamburger_icon.firstElementChild.style.color='#50cc25';
        sidebar.style.boxShadow='1px 1px 10px rgb(212,212,212,1)'
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='#424242';
    } 
    else {
        navbar_section.style.backgroundColor='transparent';
        hamburger_icon.firstElementChild.style.color='white';
        sidebar.style.boxShadow='none';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='white';
    }
};
}
navbar_font_color_change();
///navbar
let navbar_down = document.getElementsByClassName('navbar-down')[0];
navbar_down.addEventListener('click',()=>{
    let sidebar = document.getElementsByClassName('sidebar')[0];
    if(navbar_down.getAttribute('display')==='hidden'){
    navbar_down.style.transform='rotate(180deg)';
    sidebar.style.display='inline'
    navbar_down.setAttribute('display','visible');
}
    else{
        navbar_down.style.transform='rotate(0deg)';
        navbar_down.setAttribute('display','hidden');
        sidebar.style.display='none';
    }
});

//mpbile nav
let hamburger = document.getElementsByClassName('hamburger')[0];
hamburger.addEventListener('click',()=>{
    let sidebar = document.getElementsByClassName('sidebar')[0];
      sidebar.style.display='inline';
});
let cancel = document.getElementsByClassName('cancel')[0];
cancel.addEventListener('click',()=>{
    let sidebar = document.getElementsByClassName('sidebar')[0];
    sidebar.style.display='none';
})
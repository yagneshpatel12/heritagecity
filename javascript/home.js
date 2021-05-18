var navbar_section = document.getElementsByClassName('navbar-section')[0];
var nav_color_change = document.getElementsByClassName('color-change')
let navbar_user = document.getElementsByClassName('navbar-user')[0];
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar_section.style.backgroundColor='white';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='#424242';
        navbar_user.style.boxShadow='1px 1px 10px rgb(212,212,212,1)'
    } 
    else {
        navbar_section.style.backgroundColor='transparent';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='white';
        navbar_user.style.boxShadow='none';
    }
};
let gallery_section = document.getElementsByClassName('carousel')[0];
gallery_section.setAttribute('data-flickity','{ "freeScroll": true ,"wrapAround": true ,"autoPlay":true }');
console.log(gallery_section.getAttribute('data-flickity')); 

///navbar
let navbar_down = document.getElementsByClassName('navbar-down')[0];
navbar_down.addEventListener('click',()=>{
    let navbar_user = document.getElementsByClassName('navbar-user')[0];
    if(navbar_down.getAttribute('display')==='hidden'){
    navbar_down.style.transform='rotate(180deg)';
    navbar_user.style.display='inline'
    navbar_down.setAttribute('display','visible');
}
    else{
        navbar_down.style.transform='rotate(0deg)';
        navbar_down.setAttribute('display','hidden');
        navbar_user.style.display='none';
    }
});
//mpbile nav
let hamburger = document.getElementsByClassName('hamburger')[0];
hamburger.addEventListener('click',()=>{
    let navbar_user = document.getElementsByClassName('navbar-user')[0];
      navbar_user.style.display='inline';
});
let cancel = document.getElementsByClassName('cancel')[0];
cancel.addEventListener('click',()=>{
    let navbar_user = document.getElementsByClassName('navbar-user')[0];
    navbar_user.style.display='none';
})

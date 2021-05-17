var navbar_section = document.getElementsByClassName('navbar-section')[0];
var nav_color_change = document.getElementsByClassName('color-change')
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        navbar_section.style.backgroundColor='white';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='#424242';
    } 
    else {
        navbar_section.style.backgroundColor='transparent';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='white'
    }
};
let gallery_section = document.getElementsByClassName('carousel')[0];
gallery_section.setAttribute('data-flickity','{ "freeScroll": true ,"wrapAround": true ,"autoPlay":true }');
console.log(gallery_section.getAttribute('data-flickity')); 
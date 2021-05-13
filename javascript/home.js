var nav_without_login = document.getElementsByClassName('nav-without-login')[0];
var nav_color_change = document.getElementsByClassName('color-change')
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav_without_login.style.backgroundColor='white';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='black'
    } 
    else {
        nav_without_login.style.backgroundColor='transparent';
        for(let i=0;i<nav_color_change.length;i++)
        nav_color_change[i].style.color='white'
    }
};
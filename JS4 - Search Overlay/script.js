//- window.innerHeight เอาความสูงของ output
let WinHeight = window.innerHeight;
let SearchButton = document.getElementById('search-button');
let closeSB = document.getElementById('fullscreen-close-button');
let SearchOverlay = document.getElementById('search-overlay');
let searchBar = document.getElementById('fullscreen-searchform');

//! Resize px
window.addEventListener('resize', function () {
    console.log(WinHeight);
     WinHeight = window.innerHeight;
    searchBar.style.top = WinHeight / 2 + 'px';
}, true); //* true is parameter

document.addEventListener('click',function(){
    SearchButton.onclick = function () {
        SearchOverlay.classList.add('fullscreen-search-overlay-show');
    };
    closeSB.onclick = function () {
        SearchOverlay.classList.remove('fullscreen-search-overlay-show');
    }
})
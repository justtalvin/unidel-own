const openMenu = document.querySelector("#open-menu-btn");
const closeMenu = document.querySelector("#close-menu-btn");
const menuTab = document.querySelector("#menu-tab");

openMenu.addEventListener("click", ()=>{
    menuTab.style.display= "flex";
});
closeMenu.addEventListener("click", ()=>{
    menuTab.style.display= "none";
});
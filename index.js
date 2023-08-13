const menuicon = document.querySelector(".menuicon");
const mainmenu = document.querySelector(".mainmenu");
const hassubmenu = document.querySelector(".has-submenu");
const submenu = document.querySelector(".submenu");

let state = false;

menuicon.addEventListener("click",()=>{
    mainmenu.classList.toggle("mainmenu-visable");

    if(state === false)
    {
        menuicon.classList.toggle("bi-x-lg");
        menuicon.classList.remove("bi-list");
        state = true;
    }
    else
    {
        menuicon.classList.remove("bi-x-lg");
        menuicon.classList.add("bi-list");
        state = false;
    }
})

hassubmenu.addEventListener("click",()=>{
    submenu.classList.toggle("submenuon");
})

document.addEventListener("click",(eve)=>{
    if(eve.target.id != "has-submenu" && submenu.classList.contains("submenuon"))
    {
        submenu.classList.remove("submenuon");
    }
})
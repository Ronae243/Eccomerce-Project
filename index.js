const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

//show sidebar
menuBtn.addEventListener("click",() => {
    sideMenu.style.display ="block";
}) 

//close sidebar 
closeBtn.addEventListener("click", () =>{
    sideMenu.style.display = "none";
}) 

//change theme
themeToggler.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme-variables");

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

/*solves the issue where if the sidebar is activated 
and deactivated at the phone view on pc the side bar
disappears on the fully maximised pc view or tablet view on destop browsers*/

let mediaQueryList = window.matchMedia('(min-width: 769px)');

function screenTest(e) {
  if (e.matches) {
    /* the viewport is more than 769 pixels wide */
   sideMenu.style.display = "block";

  } else {
    /* the viewport is 769 pixels wide or less */
   sideMenu.style.display = "none";
  }
}

mediaQueryList.addListener(screenTest);
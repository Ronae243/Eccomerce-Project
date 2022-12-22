const sideMenu = document.querySelector("aside");
const sideMenuOp = document.querySelector(".sidebar");
const sideMenuOp_Ch = sideMenuOp.getElementsByTagName("a");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");
const themeToggler = document.querySelector(".theme-toggler");

for (const sMenu of sideMenuOp_Ch){
  sMenu.addEventListener("click",() =>{
    // Get a reference to all elements with the active class
    const activeElements = document.querySelectorAll('.active');

    // Loop through the active elements and remove the active class
    for (const activeElement of activeElements) {
      activeElement.classList.remove('active');
    }

    // Add the active class to the element that was just clicked
    sMenu.classList.add('active');
  });
}



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
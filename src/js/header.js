const headerIcons = document.querySelector(".header-mobile-menu-icons");
const menu = document.getElementById("mobile-menu-container").classList;
   
headerIcons.addEventListener("click", () => {
    const iconMenu = document.getElementById("open-mobile-menu").classList;
    const iconCross = document.getElementById("close-mobile-menu").classList;
    

        if (iconMenu.contains("burger-menu")) {
            iconMenu.replace("burger-menu", "hidden");
            iconCross.replace("hidden", "header-cross");
        } else if (iconCross.contains("header-cross")) {
            iconMenu.replace("hidden", "burger-menu");
            iconCross.replace("header-cross", "hidden");
    }
    
    if (menu.contains("visual-hidden")) {
        menu.replace("visual-hidden", "mobile-menu-container");
        menu.add("container");
    }  else if (menu.contains("mobile-menu-container")) {
        menu.replace("mobile-menu-container", "visual-hidden");
        menu.remove("container");
    };
});

const mobileMenu = document.getElementById("mobile-menu-container");

window.addEventListener("scroll", () => {
  if (menu.contains("mobile-menu-container")) {
    const scrollY = window.scrollY;

    const maxScrollPosition = mobileMenu.offsetTop + mobileMenu.clientHeight;

    if (scrollY >= maxScrollPosition) {
      
      mobileMenu.classList.add("allow-scroll");
    } else {
      mobileMenu.classList.remove("allow-scroll");
    }
  } else {
    mobileMenu.classList.remove("allow-scroll");
  }
});






    







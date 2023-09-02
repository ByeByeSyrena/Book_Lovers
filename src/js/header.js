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


window.addEventListener('scroll', () => {
const allowedScrollPercentage = 10;

const viewportHeight = window.innerHeight;
    const allowedScrollPixels = (allowedScrollPercentage / 100) * viewportHeight;
    
  const scrollY = window.scrollY;

  if (menu.contains("mobile-menu-container") && scrollY > allowedScrollPixels) {
    window.scrollTo(0, allowedScrollPixels);
  }
});


    







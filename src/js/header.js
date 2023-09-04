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

const menuLinks = document.querySelectorAll('.menu-link');
menuLinks.forEach(link => {
  link.addEventListener('click', function (e) { 
    e.preventDefault(); 
 
     menuLinks.forEach(menuLink => {
      menuLink.classList.remove('active-link');  
     }); 
    this.classList.add('active-link');   
 
    });      
});    
  





    







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

const pageLinks = document.querySelectorAll('menu-link');
 
  pageLinks.forEach(function (pageLink) { 
  pageLink.addEventListener('click', function (e) {
    e.preventDefault(); 
 
    pageLinks.forEach(function (link) {
      link.classList.remove('active-link');
    });
 
   pageLink.classList.add('active-link');
  });
}); 

const bodyEl = document.querySelector(".current");
const shoppingLink = document.querySelector(".shopping-link");
const activeLink = document.querySelector(".active-link")

 function current() {
if(bodyEl.classList.contains('current')){

  shoppingLink.classList.add('heder_link--current');
  activeLink.classList.add('active-link-none');
}
 };
 current();

// Header navigation - current location -- допрацьовую!!!
function colorCurrentPage() {
  const currentPageURL = window.location.href;

  const homeLinkLi = document.querySelector(".li-to-home-page");
  const shoppingListLinkLi = document.querySelector(".li-to-shopping-page");


  const homeLinkMobile = document.querySelector(".mobile-menu-home-button");
  const shoppingLinkMobile = document.querySelector(".mobile-menu-shopping-list");

  const body = document.body;

  if (currentPageURL.includes("index.html")) {
    homeLinkLi.classList.add("change-background");
    homeLinkMobile.classList.add("change-background");

    shoppingListLinkLi.classList.remove("change-background");
    // shoppingLinkMobile.classList.remove("change-background");

  } else if (currentPageURL.includes("shopping-list.html")) {
    shoppingListLinkLi.classList.add("change-background");
    // shoppingLinkMobile.classList.add("change-background");

    homeLinkLi.classList.remove("change-background");
    // homeLinkMobile.classList.remove("change-background");
  }
}

colorCurrentPage();





 

 

 
 


           





    







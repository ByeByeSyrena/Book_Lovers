const themeSelector = document.querySelector('.toggle');
const slider = document.querySelector('slider');   
const themeSwitch = document.getElementById('themeSwitch');

themeSelector.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  event.preventDefault();
  if (localStorage.getItem('theme') === 'dark') {
    localStorage.removeItem('theme');
    themeSwitch.checked = false;  
  } else {
    localStorage.setItem('theme', 'dark');
    themeSwitch.checked = true; 
  }
  addDarkClassToHTML();
}

function addDarkClassToHTML() { 
  try {
    if (localStorage.getItem('theme') === 'dark') { 
      document.querySelector('body').classList.add('dark');
      slider.style.transform = 'translateX(17px)'; //темна теми
      slider.style.backgroundColor = ' rgb(50, 40, 93)'; 
    } else { 
      document.querySelector('body').classList.remove('dark'); 
      slider.style.transform = 'translateX(0)'; //світла тема
      slider.style.backgroundColor = ' rgb(117, 100, 190)'; 
    }
  } catch (err) {}
}  

addDarkClassToHTML();







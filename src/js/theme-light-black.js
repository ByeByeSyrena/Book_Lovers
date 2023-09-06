// const themeSelector = document.querySelector('.toggle');
// const slider = document.querySelector('.slider');   
// const themeSwitch = document.getElementById('themeSwitch');

// themeSelector.addEventListener('click', onChangeColor);

// function onChangeColor(event) {
//   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//     localStorage.removeItem('theme');
//     themeSwitch.checked = false;  
//   } else {
//     localStorage.setItem('theme', 'dark');
//     themeSwitch.checked = true; 
//   }
//   addDarkClassToHTML();
// }

// function addDarkClassToHTML() { 
//   try {
//     if (localStorage.getItem('theme') === 'dark') { 
//       document.querySelector('body').classList.add('dark');
//       slider.style.transform = 'translateX(17px)'; //темна теми
//       slider.style.backgroundColor = ' rgb(50, 40, 93)'; 
//     } else { 
//       document.querySelector('body').classList.remove('dark'); 
//       slider.style.transform = 'translateX(0)'; //світла тема
//       slider.style.backgroundColor = ' rgb(117, 100, 190)'; 
//     }
//   } catch (err) {}
// }  

// addDarkClassToHTML();


function theme() {
  const checkbox = document.querySelector('.switch input[type="checkbox"]');
  const el = document.documentElement;
console.log(el);
    // Зміна стилів для плавної анім;ації
  el.style.transition = 'background-color 0.5s ease, color 0.5s ease';

    
    // відповідає за зміну теми при зміні стану чекбоксу.

  checkbox.addEventListener('change', () => {
    if (el.hasAttribute('data-theme')) {
      el.removeAttribute('data-theme');
      localStorage.removeItem('theme');
    } else {
      el.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  });

    // ця функція перевіряє, чи пристрій встановлений на тему "dark" за замовчуванням,
    // і встановлює відповідний стан чекбоксу та атрибут data - theme для елемента el при завантаженні сторінки.
  function setThemeFromMediaQuery() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      el.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
    }
  }

    // ця функція змінює тему сторінки в залежності від поточного часу,

  function updateThemeByTime() {
    const currentHour = new Date().getHours();
    if (currentHour >= 18 || currentHour < 6) {
      el.setAttribute('data-theme', 'dark');
      checkbox.checked = true;
    } else {
      el.removeAttribute('data-theme');
      checkbox.checked = false;
    }
  }

    // Це умова перевіряє, чи існує значення теми, збережене в локальному сховищі (localStorage).
    
  if (localStorage.getItem('theme') !== null) {
    el.setAttribute('data-theme', 'dark');
    checkbox.checked = true;
  } else {
    setThemeFromMediaQuery();
    updateThemeByTime();
  }

  el.style.transition = 'background-color 0.3s, color 0.3s';
}

theme();





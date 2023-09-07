const themeSelector = document.querySelector('.toggle');

themeSelector.addEventListener('click', onChangeColor);

function onChangeColor(event) {
        if (localStorage.getItem('theme') === 'dark') {
          localStorage.removeItem('theme');
        }
        else {
          localStorage.setItem('theme', 'dark')
        }
        addDarkClassToHTML()
      };
      
      function addDarkClassToHTML() {
        try {
          if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('body').classList.add('dark');
          }
          else {
            document.querySelector('body').classList.remove('dark');
          }
        } catch (err) { }
      }
      
      addDarkClassToHTML();







//Variables
const menuToggle = document.querySelector('#menu-toggle');
//event listebers
menuToggle.addEventListener('click', toggleMenu);

//functions

// menu toggle function
function toggleMenu() {
  //navigation element
  const menu = document.querySelector('header nav');
  if (menu.classList.contains('display-menu')) {
    menu.classList.remove('display-menu');
  } else {
    menu.classList.add('display-menu');
  }

  //toggle menu icon
  const menuIcon = document.querySelector('#menu-toggle i');
  menuIcon.classList.toggle('uil-times');
}

//current date for footer section
newDate();

function newDate() {
  const date = new Date();
  const fullYear = date.getFullYear();
  const copyRightYear = document.querySelector('.sub_footer span');

  copyRightYear.textContent = fullYear;
}

const menu= document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// Function to display mobile menu
const mobileMenu = () => {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// Function to show active Section of Menu
const highlightMenu = () => {
  const elem = document.querySelector('.highlight')
  const homeMenu = document.querySelector('#home-page')
  const aboutMenu = document.querySelector('#about-page')
  const projectsMenu = document.querySelector('#projects-page')
  const contactMenu = document.querySelector('#contact-page')

  let scrollPos = window.scrollY

  // adds 'highlight' class to my menu items
  if(window.innerWidth > 960 && scrollPos < 650) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
  } 
  else if(window.innerWidth > 960 && scrollPos < 1500) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    projectsMenu.classList.remove('highlight')
    return
  }
  else if(window.innerWidth > 960 && scrollPos < 2050) {
    projectsMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    contactMenu.classList.remove('highlight')
    return
  }
  else if(window.innerWidth > 960 && scrollPos >= 2050){
    contactMenu.classList.add('highlight')
    projectsMenu.classList.remove('highlight')
    return
  }
  else if((elem && window.innerWidth < 960 && scrollPos < 650) || elem){
    elem.classList.remove('hightlight')
    homeMenu.classList.remove('highlight')
    aboutMenu.classList.remove('highlight')
    projectsMenu.classList.remove('highlight')
    contactMenu.classList.remove('highlight')
  }
}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

// Close Mobile Dropdown menu after clicking
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active')
  if(window.innerWidth <= 960 && menuBars){
    menu.classList.toggle('is-active')
    menuLinks.classList.remove('active')
  }
}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)
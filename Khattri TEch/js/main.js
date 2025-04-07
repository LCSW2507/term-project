const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mainNav.classList.toggle('show')
})
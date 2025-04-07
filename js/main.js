/* Student Name: Prabin Raj Karki
Student ID: C0956644 */
const hamburger = document.getElementById('hamburger')
const mainNav = document.getElementById('mainNav')
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  mainNav.classList.toggle('show')
})
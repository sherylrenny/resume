let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x') /*for the cross on the menu*/
	navbar.classList.toggle('active');
}
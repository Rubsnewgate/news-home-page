// Code for open the mobile menu
const OPEN_MENU_BTN = document.querySelector('.open-menu-btn')
const MOBILE_MENU = document.querySelector('.mobile__menu')
const BODY = document.body

OPEN_MENU_BTN.addEventListener('click', () => {
	MOBILE_MENU.style.display = 'flex'
})

// Code for close the mobile menu
const CLOSE_MENU_BTN = document.querySelector('.close-menu-btn')

CLOSE_MENU_BTN.addEventListener('click', () => {
	MOBILE_MENU.style.display = 'none'
})

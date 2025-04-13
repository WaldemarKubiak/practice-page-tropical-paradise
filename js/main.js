const nav = document.querySelector('.nav__items-container');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	// Toggle klasy aktywujące/usuwa menu
	nav.classList.toggle('nav__items-container--active');

	navBtnBars.classList.remove('black-bars-color');

	// Jeśli menu jest zamykane, usuń animację
	if (!nav.classList.contains('nav__items-container--active')) {
		removeNavItemsAnimation(); // Usuwamy animację, jeśli menu jest zamknięte
	}

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items-container--active');
			removeNavItemsAnimation(); // Usuwamy animację po kliknięciu w element menu
		});
	});

	// Jeśli menu jest otwarte, dodajemy animację
	if (nav.classList.contains('nav__items-container--active')) {
		handleNavItemsAnimation();
	}
};

const handleNavItemsAnimation = () => {
	let delayTime = 0;

	allNavItems.forEach(item => {
		item.classList.add('nav-items-animation');
		item.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

const removeNavItemsAnimation = () => {
	allNavItems.forEach(item => {
		item.classList.remove('nav-items-animation');
		item.style.animationDelay = ''; // Resetowanie opóźnienia animacji
	});
};

const handleObserver = () => {
	const currentSection = window.scrollY;

	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.add('black-bars-color');
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
			navBtnBars.classList.remove('black-bars-color');
		}
	});
};

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();
navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);

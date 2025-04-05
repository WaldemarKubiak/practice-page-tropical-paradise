const nav = document.querySelector('.nav__items-container');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav__items-container--active');

	allNavItems.forEach(item => {
		item.addEventListener('click', () => {
			nav.classList.remove('nav__items-container--active');
		});
	});
};

navBtn.addEventListener('click', handleNav);

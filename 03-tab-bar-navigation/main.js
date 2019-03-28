const tabs = document.querySelectorAll('.tab');
const body = document.body;

tabs.forEach(clickedTab => {
	clickedTab.addEventListener('click', () => {
    // Remove all active class
		tabs.forEach(tab => {
			tab.classList.remove('active');
    });
    
    //Add active class in current tab on click
		clickedTab.classList.add('active');
		body.style.backgroundColor = getComputedStyle(clickedTab).getPropertyValue('color');
	});
});

// Initially load next animation (show on demo)
// const loadNextAnimation = () => {
// 	const active = document.querySelector('.tab.active');
// 	const next = active.nextElementSibling;
	
// 	active.classList.remove('active');
// 	next.classList.add('active');
// 	body.style.backgroundColor = getComputedStyle(next).getPropertyValue('color');
// }

// setTimeout(loadNextAnimation, 1500);

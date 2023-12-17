let html = document.documentElement;
let body = document.body;
let nav_mobile = document.getElementById('nav-mobile');
let menu_bar = document.getElementById('nav-bar');
let nav_menu = document.getElementById('nav');
window.onscroll =  function () {scrollFunc()};
function scrollFunc() {
	if (html.scrollTop > 70 || body.scrollTop > 70){
		nav_mobile.style.backgroundColor = "rgba(0,0,0,0.7)";
		nav_mobile.style.transition = "0.9s ease-in-out";
		nav_menu.style.transition = "0.9s ease-in-out";
		nav_menu.style.backgroundColor = "rgba(0,0,0,0.7)";
	} else{
		nav_mobile.style.backgroundColor = "transparent";
		nav_menu.style.backgroundColor = "transparent";
	}
	if (true) {} else {}
}
function openNav() {
	if (nav_mobile.style.display == "block"	) {
		nav_mobile.style.display = "none";
	} else {
		nav_mobile.style.display = "block";
	}
}

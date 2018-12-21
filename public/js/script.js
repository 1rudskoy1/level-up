var slides = document.querySelectorAll(".slide");
var switch_Up = document.querySelectorAll(".switch__toward_up");
var switch_Down = document.querySelectorAll(".switch__toward_down");
var search = document.querySelector(".search__input_svg");
var search_input = document.querySelector(".search__input");
var burger_icon = document.querySelector(".menu__burger_svg");
var burger_menu = document.querySelector(".items");

burger_icon.onclick = function () {
	if(burger_menu.style.display == "block") {
		burger_menu.style.display = "none";
	}else{
		burger_menu.style.display = "block";
	}

}
search.onclick = function () {
	search_input.className += " search__input_active"; 
}
for(let i = 1; i < slides.length; i++){
	slides[i].style.display = "none";
}
for(let i = 0;i < switch_Up.length;i++){
	switch_Up[i].onclick = function () {
		let next = i+1;
		if(i >= slides.length-1){
			slides[i].style.display = "none";
			slides[0].style.display = "block";
			next = 0;
		}
		slides[i].style.display = "none";
		slides[next].style.display = "block";
	}
}
for(let i = 0;i < switch_Down.length;i++){
	switch_Down[i].onclick = function () {
		 if( i <=0 ){
			slides[switch_Down.length-1].style.display = "block";
		 	slides[i].style.display = "none";
		}else{
			let late = i-1;
			slides[i].style.display = "none";
			slides[late].style.display = "block";
		}
	}
}

//Burger_menu

document.querySelector(".menu__burger_svg").addEventListener("click", function () {
	var burger_menu = document.querySelector(".items");
	if(burger_menu.style.display == "block") {
		burger_menu.style.display = "none";
	}else {
		burger_menu.style.display = "block";
	}
});


// Search

document.querySelector(".search__input_svg").addEventListener("click", function () {
	let search_input = document.querySelector(".search__input");
	search_input.className += " search__input_active"; 
});




//Slide
function slide(classes, target){
	let slides = document.querySelectorAll(classes);
	let tabs = document.querySelectorAll(target);
	let index = 0;
	for (i = 1; i <slides.length;i++){
		slides[i].style.display = " none";
	}
	for (i = 0; i < tabs.length; i++) {
		tabs[i].addEventListener("click", function(e){
			for(let j = 0; j < slides.length; j++){
				slides[j].style.display = " none"
			}
			if(e.target.classList.contains("switch__toward_up") === true){
				if(index != 0){
					index--;
				}
				slides[index].style.display = "block";
			}else{
				if(index >= 2){
					index = 0;
				}else{
					index++;
				}
				slides[index].style.display = "block";
			}	
		});
	}	
}

slide(".slide", ".switch__toward i");

window.onload = function () {

	
	var search = document.querySelector('.search');
	var search_icon = document.querySelector('.search .icon');
	var search_input = document.querySelector('#search_input');
	var btn = document.querySelector('.header .btn');
	var navWrap = document.querySelector('.navWrap');
	var state = false;
	var show = false;

	console.log(btn);

	btn.onclick = function(){
		if(show === false){
			navWrap.style.display = 'block';
			show = true;
		}else{
			navWrap.style.display = 'none';
			show = false;
		}
	}

	search_icon.onclick = zoom;

	search_input.onblur = zoom;

	// search_input.onfocus = zoom;

	search_input.onkeyup = function (event) {
		if (event.keyCode == 13) {
			search.style.width = 2 + 'rem';
			state = 0;
		}
	}


	function zoom() {
	console.log("run")
		if (state === false) {
			search.style.width = 15 + 'rem';
			search.style.transition = 0.5 + 's';
			state = true;
		} else {
			search.style.width = 2 + 'rem';
			search.style.transition = 0.5 + 's';
			state = false;
		}
	}
}



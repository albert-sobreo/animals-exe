score = 0;

dragula([
	document.getElementById('1'),
	document.getElementById('2'),
	document.getElementById('3'),
	document.getElementById('4'),
	document.getElementById('5')
])

.on('drag', function(el) {
	
	// add 'is-moving' class to element being dragged
	el.classList.add('is-moving');
})
.on('dragend', function(el) {	
	// remove 'is-moving' class from element after dragging has stopped
	el.classList.remove('is-moving');
	answers(el);
	// checkSnakes();
	// checkHorses();
	// checkKangaroos();
	// checkFish();
	// add the 'is-moved' class for 600ms then remove it
	window.setTimeout(function() {
		el.classList.add('is-moved');
		window.setTimeout(function() {
			el.classList.remove('is-moved');
		}, 600);
	}, 100);
});


var createOptions = (function() {
	var dragOptions = document.querySelectorAll('.drag-options');
	
	// these strings are used for the checkbox labels
	var options = ['Research', 'Strategy', 'Inspiration', 'Execution'];
	
	// create the checkbox and labels here, just to keep the html clean. append the <label> to '.drag-options'
	function create() {
		for (var i = 0; i < dragOptions.length; i++) {

			options.forEach(function(item) {
				var checkbox = document.createElement('input');
				var label = document.createElement('label');
				var span = document.createElement('span');
				checkbox.setAttribute('type', 'checkbox');
				span.innerHTML = item;
				label.appendChild(span);
				label.insertBefore(checkbox, label.firstChild);
				label.classList.add('drag-options-label');
				dragOptions[i].appendChild(label);
			});

		}
	}
	
	return {
		create: create
	}
	
	
}());

var showOptions = (function () {
	
	// the 3 dot icon
	var more = document.querySelectorAll('.drag-header-more');
	
	function show() {
		// show 'drag-options' div when the more icon is clicked
		var target = this.getAttribute('data-target');
		var options = document.getElementById(target);
		options.classList.toggle('active');
	}
	
	
	function init() {
		for (i = 0; i < more.length; i++) {
			more[i].addEventListener('click', show, false);
		}
	}
	
	return {
		init: init
	}
}());

createOptions.create();
showOptions.init();

function answers(movess){
	moves = movess.innerHTML;
	if(moves == "Gallop"){
		if ((document.getElementById(4).outerHTML.includes("Gallop"))){
			console.log("GALLOP; YOU ARE CORRECT");
		}
		else{
			console.log("You are wrong");
		}
	}
	else if(moves == "Swim"){
		if ((document.getElementById(2).outerHTML.includes("Swim"))){
			console.log("SWIM; YOU ARE CORRECT");
		}
		else{
			console.log("You are wrong");
		}
	}
	else if(moves == "Slither"){
		if ((document.getElementById(5).outerHTML.includes("Slither"))){
			console.log("SLITHER; YOU ARE CORRECT");
		}
		else{
			console.log("You are wrong");
		}
	}
	else if(moves == "Jump"){
		if ((document.getElementById(3).outerHTML.includes("Jump"))){
			console.log("JUMP; YOU ARE CORRECT");
		}
		else{
			console.log("You are wrong");
		}
	}
}

function checkSnakes(){
	if ((document.getElementById(5).outerHTML.includes("Slither"))){
		document.getElementById("snakeboi").style.background = "green";
	}
	else{
		document.getElementById("snakeboi").style.background = "#2A92BF";
	}
}

function checkHorses(){
	if ((document.getElementById(4).outerHTML.includes("Gallop"))){
		document.getElementById("horseboi").style.background = "green";
	}
	else{
		document.getElementById("horseboi").style.background = "#2A92BF";
	}
}

function checkKangaroos(){
	if ((document.getElementById(3).outerHTML.includes("Jump"))){
		document.getElementById("kangboi").style.background = "green";
	}
	else{
		document.getElementById("kangboi").style.background = "#2A92BF";
	}
}

function checkFish(){
	if((document.getElementById(2).outerHTML.includes("Swim"))){
		document.getElementById("fishboi").style.background = "green";
	}
	else{
		document.getElementById("fishboi").style.background = "#2A92BF";
	}
}

function checkButton(){
	var fish_items = document.getElementById('fishboi-body').getElementsByTagName("li");
	var kang_items = document.getElementById('kangboi-body').getElementsByTagName("li");
	var horse_items =document.getElementById('horseboi-body').getElementsByTagName("li");
	var snake_items =document.getElementById('snakeboi-body').getElementsByTagName("li");

	for(var i = 0; i < fish_items.length; i++){
		// console.log(items[i].innerHTML);
		if(fish_items[i].innerHTML == 'Swim'){
			console.log(fish_items[i].innerHTML + " You are right")
			fish_items[i].style.backgroundColor = '#4aed4a';
			score++;
		}
		else{
			fish_items[i].style.backgroundColor = '#f21f18';
		}
	}
	for(var i = 0; i < kang_items.length; i++){
		// console.log(items[i].innerHTML);
		if(kang_items[i].innerHTML == 'Jump'){
			console.log(kang_items[i].innerHTML + " You are right")
			kang_items[i].style.backgroundColor = '#4aed4a';
			score++;
		}
		else{
			kang_items[i].style.backgroundColor = '#f21f18';
		}
	}
	for(var i = 0; i < horse_items.length; i++){
		// console.log(items[i].innerHTML);
		if(horse_items[i].innerHTML == 'Gallop'){
			console.log(horse_items[i].innerHTML + " You are right")
			horse_items[i].style.backgroundColor = '#4aed4a';
			score++;
		}
		else{
			horse_items[i].style.backgroundColor = '#f21f18';
		}
	}
	for(var i = 0; i < snake_items.length; i++){
		// console.log(items[i].innerHTML);
		if(snake_items[i].innerHTML == 'Slither'){
			console.log(snake_items[i].innerHTML + " You are right")
			snake_items[i].style.backgroundColor = '#4aed4a';
			score++;
		}
		else{
			snake_items[i].style.backgroundColor = '#f21f18';
		}
	}
	$(".drag-container").addClass("disabledbutton");
	document.getElementById('check-answers').disabled = true;
	document.getElementById('score').innerHTML = "Score: " + score + "/4"
}
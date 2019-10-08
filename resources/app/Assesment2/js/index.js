var score = 0;

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
	var animal = (el.innerHTML)
	var n = animal.indexOf('<')
	var animal = animal.slice(0, n)
	answers(animal);
	// checkFly();
	// checkRun();
	// checkSwim();
	// checkCrawl();

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

function answers(animal){
	if (animal == "Pigeon "){
		if ((document.getElementById(2)).outerHTML.includes("Pigeon ")){
			console.log("YOU ARE CORRECT");
		}
	}
}

function checkFly(){
	if ((document.getElementById(2).outerHTML.includes("Eagle"))){
		if ((document.getElementById(2).outerHTML.includes("Dragonfly"))){
			if ((document.getElementById(2).outerHTML.includes("Pigeon"))){
				document.getElementById("flybois").style.background = "green";
			}
			else{
				document.getElementById("flybois").style.background = "#2a92bf";
			}
		}
		else{
			document.getElementById("flybois").style.background = "#2a92bf";
		}
	}
	else{
		document.getElementById("flybois").style.background = "#2a92bf";
	}
}

function checkRun(){
	if ((document.getElementById(3).outerHTML.includes("Giraffe"))){
		if ((document.getElementById(3).outerHTML.includes("Elephant"))){
			if ((document.getElementById(3).outerHTML.includes("Tiger"))){
				document.getElementById("runbois").style.background = "green";
			}
			else{
				document.getElementById("runbois").style.background = "#2a92bf";
			}
		}
		else{
			document.getElementById("runbois").style.background = "#2a92bf";
		}
	}
	else{
		document.getElementById("runbois").style.background = "#2a92bf";
	}
}

function checkSwim(){
	if ((document.getElementById(4).outerHTML.includes("Shark"))){
		if ((document.getElementById(4).outerHTML.includes("Whale"))){
			if ((document.getElementById(4).outerHTML.includes("Eel"))){
				if ((document.getElementById(4).outerHTML.includes("Turtle"))){
					document.getElementById("swimbois").style.background = "green";
				}
				else{
					document.getElementById("swimbois").style.background = "#2a92bf";
				}
			}
			else{
				document.getElementById("swimbois").style.background = "#2a92bf";
			}
		}
		else{
			document.getElementById("swimbois").style.background = "#2a92bf";
		}
	}
	else{
		document.getElementById("swimbois").style.background = "#2a92bf";
	}
}

function checkCrawl(){
	if ((document.getElementById(5).outerHTML.includes("Crab"))){
		if ((document.getElementById(5).outerHTML.includes("Lizard"))){
			document.getElementById("crawlbois").style.background = "green";
		}
		else{
			document.getElementById("crawlbois").style.background = "#2a92bf";
		}
	}
	else{
		document.getElementById("crawlbois").style.background = "#2a92bf";
	}
}

function checkButton(){
	var fly_items = document.getElementById('flyboi-body').getElementsByTagName("li");
	var run_items = document.getElementById('runboi-body').getElementsByTagName("li");
	var swim_items =document.getElementById('swimboi-body').getElementsByTagName("li");
	var crawl_items =document.getElementById('crawlboi-body').getElementsByTagName("li");

	for(var i = 0; i < fly_items.length; i++){
		if(fly_items[i].innerHTML.includes("Pigeon") || fly_items[i].innerHTML.includes("Dragonfly") || fly_items[i].innerHTML.includes("Eagle")){
			fly_items[i].style.backgroundColor = "#4aed4a";
			score++;
		}
		else{
			fly_items[i].style.backgroundColor = "#f21f18";
		}
	}
	for(var i = 0; i < run_items.length; i++){
		if(run_items[i].innerHTML.includes("Tiger") || run_items[i].innerHTML.includes("Elephant") || run_items[i].innerHTML.includes("Giraffe")){
			run_items[i].style.backgroundColor = "#4aed4a";
			score++;
		}
		else{
			run_items[i].style.backgroundColor = "#f21f18";
		}
	}
	for(var i = 0; i < swim_items.length; i++){
		if(swim_items[i].innerHTML.includes("Turtle") || swim_items[i].innerHTML.includes("Eel") || swim_items[i].innerHTML.includes("Whale") || swim_items[i].innerHTML.includes("Shark")){
			swim_items[i].style.backgroundColor = "#4aed4a";
			score++;
		}
		else{
			swim_items[i].style.backgroundColor = "#f21f18";
		}
	}
	for(var i = 0; i < crawl_items.length; i++){
		if(crawl_items[i].innerHTML.includes("Lizard") || crawl_items[i].innerHTML.includes("Crab")){
			crawl_items[i].style.backgroundColor = "#4aed4a";
			score++;
		}
		else{
			crawl_items[i].style.backgroundColor = "#f21f18";
		}
	}
	$(".drag-container").addClass("disabledbutton");
	document.getElementById('check-answers').disabled = true;
	document.getElementById('score').innerHTML = "Score: " + score + "/12"
}
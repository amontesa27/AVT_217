$(document).ready(function() {
    // run function on initial page load
	colorGuess();
});

function fruitGuess() {
	var fruitArray = ["Apple","Apricots","Blueberry","Banana","Blackberry","Cherry","Clementine","Cranberries","Grapefruit","Grape","Guava","HoneydewMelon","Kiwi","Lemon","Lime","Lychee","Mango","Nectarine","Orange","Papaya","PassionFruit","Peaches","Pear","Plums","Pomegranate","Prunes","Raspberries","Strawberries","Tamarind","Tangerine","Watermelon"];
	var stripped = fruitArray[randomNumber].toLowerCase();
	console.log(fruitArray[randomNumber]);
	console.log(stripped);
	$('body').css('background-color', fruitArray[randomNumber]);
	$('#submit').click(function() {
		var input = $('input').val();
		var guess = input.toLowerCase();
		console.log(guess);
		if (guess == stripped || guess == fruitArray[randomNumber]) {
			$('h1').text(guess + ' is right!');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		} else  {
			$('h1').text(guess + ' is wrong');
			$('input').val('');
			$('.button p').text('Play Again?');
			$('#submit').click(function() {
				location.reload(true);
			});
		}
	});
	$(document).keypress(function(e){
			if(e.which == 13){ //Enter key pressed
					$('#submit').click();//Trigger button click event
			}
	});
}

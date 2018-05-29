var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var span1 = document.querySelector('#span1');
var p1Score = 0;
var span2 = document.querySelector('#span2')
var p2Score = 0;
var numInput = document.querySelector("input");
var gameOver = false;
var resetButton = document.querySelector('#p3');
var score = 5;
var p = document.querySelector('p');
var winScoreDisplay = document.querySelector('p span')

p1button.addEventListener("click", function(){
	if(!gameOver){
	p1Score++;
	if(p1Score === score){
		span1.classList.add('winner');
		gameOver = true;
	}
	span1.textContent = p1Score;
}
});

p2button.addEventListener('click', function() {
	if(!gameOver){
	p2Score++;
	if(p2Score ===score){
		span2.classList.add('winner');
		gameOver = true;
	}
	span2.textContent = p2Score;
}
})

resetButton.addEventListener('click', function() {
	p1Score=0;
	p2Score=0;
	span1.textContent = 0;
	span2.textContent = 0;
	span1.classList.remove('winner');
	span2.classList.remove('winner');
	gameOver = false;
});

numInput.addEventListener('change', function () {
	winScoreDisplay.textContent = numInput.value;
	score = Number(numInput.value);
});
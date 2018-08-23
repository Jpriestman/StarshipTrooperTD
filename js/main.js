

var enemyOne = document.querySelector("#bugOne");
var enemyTwo = document.querySelector("#bugTwo");
var enemyThree = document.querySelector("#bugThree");
var enemyFour = document.querySelector("#bugFour");
var enemyFive = document.querySelector("#bugFive");
var timer = setInterval(moveDiv, 10);
var pos = 5;


function moveDiv() {
	//timer will run until max value is reached, then timer clears
	if(pos < 540) {
	pos += 2;
	enemyOne.style.left = pos+'px';
	enemyTwo.style.left = pos+'px';
	enemyThree.style.left = pos+'px';
	enemyFour.style.left = pos+'px';
	enemyFive.style.left = pos+'px';
}else {
	clearInterval(timer);
}

}


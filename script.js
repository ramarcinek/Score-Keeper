let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btnRes = document.getElementById("btn-res");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");
let finalScore = document.getElementById("finalScore");
let inputScore = document.querySelector("input");
let pointsPlayer1 = 0;
let pointsPlayer2 = 0;
let upToScore = 5; //default value

//Set end of game points number - 5 pts. by default
finalScore.textContent = upToScore;

//Set end of game points number manually
function setScoring(){

	upToScore = inputScore.value;
	finalScore.textContent = upToScore;
};

//Event handler - button Player 1
const addPts1 = function(){

	pointsPlayer1++;
	score1.innerHTML= pointsPlayer1;

	if (pointsPlayer1 == upToScore) {

		btn1.removeEventListener("click", addPts1);
		btn2.removeEventListener("click", addPts2);
		score1.style.color = "green";
	};
};

//Event handler - button Player 2
const addPts2 = function(){
	
	pointsPlayer2++;
	score2.innerHTML= pointsPlayer2;

	if (pointsPlayer2 == upToScore) {
	
		btn2.removeEventListener("click", addPts2);
		btn1.removeEventListener("click", addPts1);
		score2.style.color = "green";
	};
};

//Event handler - button Reset
const reset = function(){

	pointsPlayer1 = 0;
	pointsPlayer2 = 0;

	(function (){
		upToScore = 5;
		finalScore.textContent = upToScore;
	})();

	score1.textContent = pointsPlayer1;
	score2.textContent = pointsPlayer2;
	score1.style.color = "black";
	score2.style.color = "black";
	btn1.addEventListener("click", addPts1);
	btn2.addEventListener("click", addPts2);
};

btn1.addEventListener("click", addPts1);
btn2.addEventListener("click", addPts2);
btnRes.addEventListener("click", reset);


window.onload = function(){

	var ties = 0;

	var losses = 0;

	var wins = 0;

	var getChecked = function(elemid){
			return document.getElementById(elemid).checked;
	};

	var result = function(par1){
		document.getElementById("result").innerHTML = par1
	};

	var Player = function(){
		if(getChecked("Rock")){
			return 1;
		} else if(getChecked("Paper")){
			return 2;
		} else if(getChecked("Scissors")){
			return 3;
		}
	};

	var calcPercentages = function(){
		if(wins<1){document.getElementById("wins%").innerHTML = "100%"}
		if(losses<1){document.getElementById("losses%").innerHTML = "100%"}
		if(ties<1){document.getElementById("ties%").innerHTML = "100%"}
		document.getElementById("wins%").innerHTML = Math.floor(wins/(wins+losses+ties)*100) + "%";
		document.getElementById("losses%").innerHTML = Math.floor(losses/(wins+losses+ties)*100) + "%";
		document.getElementById("ties%").innerHTML = Math.floor(ties/(wins+losses+ties)*100) + "%";
	}

	var RPSGo = function(){

		var JSChoice = Math.floor(Math.random()*3+1);

		var PlayerChoice = Player();

		switch(PlayerChoice){
			case 1:
				switch(JSChoice){
					case 1:
						result("JavaScript chooses Rock! It's a tie!");
						ties++;
						break;
					case 2:
						result("JavaScript chooses Paper! You lose!");
						losses++;
						break;
					case 3:
						result("JavaScript chooses Scissors! You win!");
						wins++;
						break;
					default: {
						result("An error has occured!");
					}
				}
				break;
			case 2:
				switch(JSChoice){
					case 1:
						result("JavaScript chooses Rock! You win!");
						wins++;
						break;
					case 2:
						result("JavaScript chooses Paper! It's a tie!");
						ties++;
						break;
					case 3:
						result("JavaScript chooses Scissors! You lose!");
						losses++;
						break;
					default: {
						result("An error has occured!");
					}
				}
				break;
			case 3:
				switch(JSChoice){
					case 1:
						result("JavaScript chooses Rock! You lose!");
						losses++;
						break;
					case 2:
						result("JavaScript chooses Paper! You win!");
						wins++;
						break;
					case 3:
						result("JavaScript chooses Scissors! It's a tie!");
						ties++;
						break;
					default: {
						result("An error has occured!");
					}
				}
				break;
			default: {
				result("An error has occured!");
			}
		}
		document.getElementById("wins").innerHTML = wins + "/" + (wins+losses+ties);
		document.getElementById("losses").innerHTML = losses + "/" + (wins+losses+ties);
		document.getElementById("ties").innerHTML = ties + "/" + (wins+losses+ties);

		calcPercentages();
	};

	document.getElementById("RPSGo").onclick = RPSGo;
};

//   player choice is received and stored in var userChoice
var userChoice = prompt("Do you choose rock, paper or scissors?");
	console.log("User: ", userChoice);

// var computerChoice gets 1 of the 3 choices randomly: rock, paper, scissors
var //computerChoice = Math.random()
	 min = 1
	,max = 3
	,random = Math.floor(Math.random() * (max - min + 1)) + min
	,answers = ["rock", "paper", "scissors"]
	,computerChoice = answers[random - 1]
	,tableResults = {
		 "rock" 	: {"rock" : -1, "paper" : 0, "scissors" : 1 }
		,"paper" 	: {"rock" : 1, "paper" : -1, "scissors" : 0 }
		,"scissors" : {"rock" : 0, "paper" : 1, "scissors" : -1}
	}
	;
	console.log("Computer: ", computerChoice);
	
var answer = tableResults[userChoice][computerChoice]
	console.log("result: ", answer);
	if(answer == 1){
		console.log("You won!");
	}
	else if(answer == 0){
		console.log("Computer won!");
	}
	else if(answer == -1){
		console.log("Nobody won!");
		
	}

var messages = {
	"1" 	: "You won!"
	,"0"	: "Computer won!"
	,"-1" 	: "Nobody won!"
};

console.log("#2-----", messages[answer]);

	// Лучше использовать массив, нежели условные операторы когда есть вывод 1-й строки или 
	// 1-о значение .

console.log("The javascript is loaded.");

// Pokemon Game
// The Cards

// Game Object
const game = {
	playableCards: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	playedCards: [],
	checkAllPlayedCards(){
		let playedCardsString = "";
		if(this.playedCards.length === 0){
			console.log("There are no played cards.");
		} else for(let i = 0; i <= this.playedCards.length-1; i++){
			if(i === this.playedCards.length-1){
				playedCardsString += "and " + this.playedCards[i];
			} else {
				playedCardsString += this.playedCards[i] + ", ";
			}
		}
		return "The played cards are " + playedCardsString + ".";
	},
	checkCardsLeft(){
		if(this.playedCards.length = 1){
			return "There is " + this.playedCards.length + " card remaining.";
		} else {
			return "There are " + this.playedCards.length + " cards remaining.";
		}
	},
	points: 0,
	round: 0,
	roundsGameWon: 0,
	roundsPlayerWon: 0,
	dealCard(deal){
		deal += 0;
		if(this.playableCards.length <= 2){
			if(this.points > player.points){
				this.roundsGameWon++;
				console.log("Your opponent has won this round.");
			} else if(this.points < player.points){
				this.roundsPlayerWon++;
				console.log("You have won this round!")
			}
			this.round++;
			return "There are no more playable cards left! Start a new game!";
		} else {
			for(let i = 0; i < 1+deal; i++){
				let randomNum = parseInt(Math.random() * (this.playableCards.length-1));
				let dealtCard = this.playableCards[randomNum];
				this.cards.push(dealtCard);
				this.playableCards.splice(randomNum,1);
			}
			for(let i = 0; i < 1+deal; i++){
				let randomNum = parseInt(Math.random() * (this.playableCards.length-1));
				let dealtCard = this.playableCards[randomNum];
				player.cards.push(dealtCard);
				this.playableCards.splice(randomNum,1);
			}
			console.log("Cards have been dealt!");
		}
	},
	determinePlayWinner(gameCard, playerCard){
		console.log("You have chosen: " + playerCard);
		console.log("Your opponent has chosen: " + gameCard);
		if(gameCard > playerCard){
			this.points++;
			console.log("Your opponent has won this play.");
		} else if(gameCard < playerCard){
			player.points++;
			console.log("You have won this play.");
		} else {
			console.log("It was a draw.");
		}
	},
	chooseCard(){
		let randomNum = parseInt(Math.random() * (this.cards.length-1));
		let gameCard = this.cards[randomNum];
		return gameCard;
	},
	cards: [],
	startGame(){
		this.points = 0;
		player.points = 0;
		this.dealCard(3);
		return "New game started!";
	}
}

// Player Object
const player = {
	cards: [],
	playedCards: [],
	points: 0,
	checkPoints(){
		return "Player points: " + this.points + " || Opponent Points: " + game.points; 
	},
	checkRoundsWon(){
		return "Rounds Player Won: " + game.roundsPlayerWon + " || Rounds Opponent Won: " + game.roundsGameWon;
	},
	checkPlayerPlayedCards(){
		let playedCardsString = "";
			if(this.playedCards.length === 0){
				console.log("There are no played cards.");
			} else for(let i = 0; i <= this.playedCards.length-1; i++){
				if(i === this.playedCards.length-1){
					playedCardsString += "and " + this.playedCards[i];
				} else {
					playedCardsString += this.playedCards[i] + ", ";
				}
			}
			return "The played cards are " + playedCardsString + ".";
	},
	checkCards(){
		for(let i = 0; i <= this.cards.length-1; i++){
			console.log(this.cards[i]);
		}
		return "Here are your cards!";
	},
	checkIsCardAvailable(chosenCard){
		console.log(chosenCard);
		console.log(this.cards.length-1);
		let cardCheck = false;
		for(let i = 0; i <= this.cards.length-1; i++){
			console.log(this.cards[i]);
			if(chosenCard == this.cards[i].name){
				console.log(cardCheck);
				cardCheck = true;
			}
		}
		console.log(cardCheck);
		return cardCheck;
	},
	playCard(){
		this.checkCards();
		let playerCard = prompt("Which card do you choose to play?", "Choose your Pokemon!");
		if(this.checkIsCardAvailable(playerCard) === false){
			return "Please select a valid card!";
		} else {
			let gameCard = game.chooseCard();
			game.determinePlayWinner(gameCard, playerCard);
			game.dealCard();
			console.log("End of play.");
		}

	}
}
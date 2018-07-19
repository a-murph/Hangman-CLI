var Letter = require("./Letter.js");

var Word = function(newWord) {
	this.wordArr = newWord.split();
	this.letterArr = [];

	//sets letterArr to an array of Letter objects matching the word given
	for (var i = 0; i < this.wordArr.length; i++) {
		var newLetter = new Letter(wordArr[i]);
		this.letterArr.push(newLetter);
	}

	//function to return current status of word as a String
	this.returnWord = function() {
		var word = "";

		for (var i = 0; i < this.letterArr.length; i++) {
			word += this.letterArr[i].returnLetter();
		}

		return word;
	}

	//function to check guess against each Letter in the array
	this.guess = function(input) {
		for (var i = 0; i < this.letterArr.length; i++) {
			this.letterArr[i].guess(input);
		}
	}
}

module.exports = Word;
var Letter = function(correct) {
	this.answer = correct;
	this.solved = false;
	
	this.current = function() {
		if (this.solved)
			return this.answer;
		else
			return "_";
	}

	this.guess = function(input) {
		if (input == this.answer)
			this.solved = true;
	};
}
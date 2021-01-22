options = ["As I see it, yes.", " Ask again later.", "Better not tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.", "It is certain.", " It is decidedly so.", "Most likely.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Outlook good.", "Reply hazy, try again.", "Signs point to yes.", "Very doubtful.", "Without a doubt.", "Yes.", "Yes - definitely.", "You may rely on it."]


function choose(){
	var eightballA = document.getElementById("eightballA");
    eightballA.id = 'eightballB'

	var choice = Math.floor(Math.random() * 20);
	
    var randomChoice = options[choice];

    var result = document.getElementById("result");
    result.innerHTML = (randomChoice);
}

function restart(){
	location.reload();
}

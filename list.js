var todos = ['BUy New Turtle'];

var input = prompt('What would you like to do?');


while(input !== "quit") {
	if(input === "list") {
		console.log(todos);
	
	} 
	else if(input === "new") {

	var newTodo = prompt("enter a new todo");
	todos.push(newTodo);
}
 input = prompt("what would you like to do?");
}

console.log("OK, YOU QUIT");

var todos = ['BUy New Turtle'];

var input = prompt('What would you like to do?');


while(input !== "quit") {
	if(input === "list") {
		listTodos();
	} 
	else if(input === "new") {
		addTodo();
	} else if(input === "delete") {
		deletedTodo();
	}
 input = prompt("what would you like to do?");
}
console.log("OK, YOU QUIT");


function listTodos() {
	console.log("**************")
		todos.forEach(function(todo, i){
			console.log(i + ":" + todo);
		});
		console.log("***********")
	};

function addTodo() {
	var newTodo = prompt("enter a new todo");
	todos.push(newTodo);
	console.log("added todo");
}

function deletedTodo(){
	var index = prompt("enter index of todo to delete");
	todos.splice(index, 1);
	console.log("deleted todo");
}
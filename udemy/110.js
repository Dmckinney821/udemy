
		
function factorial(num) {
	//define a result variablr
   var result = 1;
   for (var i = 2; i <= num; i++){
   	result  *= i;
   }

 return result;
	//return the result variable


function kebabToSnake(str) {
	var newStr = str.replace(/-, /g, '_');
	return newStr();
}
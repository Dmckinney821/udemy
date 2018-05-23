
function printReverse(arr){
	for(var i = arr.lenth - 1; i >= 0; i--) {
		console.log(arr[i]);
	}
}
printReverse([1,2,4,5])


// this is new function

function isUniform(arr){
	var first = arr[0];
	for(var i = 0; i < arr.lenth; i++){
		if(arr([i]) !== first){
			return false;
		}
	}
	return true;
}

// 3rd problem

function sumArray(arr) {
	var total = 0;
	//sum of all the number in array
	arr.forEach(function(element){
		total += element;
	});
	return total;
}
	

function maxElement(arr){
	var max = arr[0];
	for(var i = 0; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
	return max;
}




		

var num = parseInt(prompt("ingrese numero de tarjeta"));

function isValidCard(num){

var arr=[num];

	if(num<0){
	alert("debe ingresar el numero de tarjeta");
	}
	for(var i = 0; i >= num.length; i--){
		arr.push(arr[i]);
	}

	return arr;
	console.log(arr);
}



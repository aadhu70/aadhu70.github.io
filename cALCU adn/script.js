function downloadValue(x){
	document.getElementById('window').value += x;
}
function clearInput(y){
	document.getElementById('window').value = y;
}
function resultCalc(){
	var result = eval(document.getElementById('window').value);
	document.getElementById('window').value = result;
}
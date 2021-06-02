// JavaScript Document
var op;
var number1;
var number2;
function btnNumber(e){
	var txt = document.getElementById('display');
	txt.value += e.id;
	}
function opration(e){
	op=e.id;
	var txt = document.getElementById('display');
	number1=parseInt(txt.value);
	txt.value=' ';
}
function calc(){
	var txt = document.getElementById('display');
	var result;
	number2=parseInt(txt.value);
	
	switch (op.trim()){
			case '+': result=number1+number2; break;
			case '-': result=number1-number2; break;
			case '×': result=number1*number2; break;
			case '÷': result=number1/number2; break;
		default: result='Error'
	}
			txt.value = result;
}

function clearFunction() {
	var txt = document.getElementById('display');
	txt.value=' ';
}
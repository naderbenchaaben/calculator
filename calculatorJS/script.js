function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}
function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{
		document.getElementById("output-value").innerText=getFormattedNumber(num);
	}	
}
function getFormattedNumber(num){
	if(num=="-"){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}
/*replacing the , with an empty space*/
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}
var operator = document.getElementsByClassName("operator");
for(var i = 0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        //alert("the operator clicked is:" + this.id);
        if (this.id="clear"){
            printHistory("");
            printOutput("");
        }

        
    });
}
var number = document.getElementsByClassName("number");
for(var i = 0;i<operator.length;i++){
    number[i].addEventListener('click',function(){
       /* alert("the number clicked is:" + this.id);*/
      var output=reverseNumberFormat(getOutput());
      if(output!=NaN){ //checking if the output is a number
        output=output+this.id;
        printOutput(output);
        
      }
        
    });
}



    
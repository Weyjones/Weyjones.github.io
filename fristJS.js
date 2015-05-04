/*my frist javasctipt*/
var num1;
var num2; //This is a string
var anwser; //This is a boolean
var myDiv;
console.log("Before my alert");
alert("Welcome to my first Javascript"); 
 num1=prompt("What's your frist number?");
 num2=prompt("What's your second number?")
if (num1<num2){
  console.log("num2 is bigger");
  alert(num2+" is greater than"+num1); 
  
else if(num1>num2){ 
  console.log("num1 is bigger");
  alert(num1+" is greater than"+num2);}
  else{
  	 alert(" They are the same.");
  }
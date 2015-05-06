function count(){
var num;
var i = 0;       // Set counter to 1
var msg = '';    // Message

// Store 5 times table in a variable
num=document.getElementById("intNumber").value;
while (i < 11) {
  msg += i + ' x '+num+' = ' + (i * num) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;
}
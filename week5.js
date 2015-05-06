var num;
var i = 0;       // Set counter to 1
var msg = '';    // Message

// Store 5 times table in a variable
num=prompt("Enter a number to generate the multiplication table");
while (i < 11) {
  msg += i + ' x '+num+' = ' + (i * num) + '<br />';
  i++;
}

document.getElementById('answer').innerHTML = msg;
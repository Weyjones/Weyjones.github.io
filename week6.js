/*This function receives 4 parameters and use them to draw a line:
* vlineSize:  It defines how long the line will be.  In other words, how many times the symbol sent by the user will be printed
* vColor:  This indicates which color the line will be printed
* vSymbol:  This indicates the character that is going to be used to draw the line 
*vDivToChange:  This indicates which <div> in the HTML will change

NOTE:  This Javascript is not robust and you can improve it adding the following functionality:
- Verify that the user enters a number and not a character
- Instead of using the style in the Javascript code, we can use a CSS file
*/
function myfunction() {
    var lines=document.getElementById("line").value;
var word="<p>";
var even='<span style="color:' +document.getElementById("coe").value +'">'+document.getElementById("sym").value+"</span>";
 var odd='<span style="color:' +document.getElementById("coo").value +'">'+document.getElementById("sym").value+"</span>";
    if(lines===""||isNaN(lines))
    {
        alert("Not Numeric");
    }
    else {
        
            for ( var int2 = 0; int2 <=lines; int2++) {
              if(int2%2===0){
                word +=odd;
              }else{
                word +=even;
              }
            }
            word +="<br>";
        }
    
  word +="</p>";
  document.getElementById("input").innerHTML=word;
}


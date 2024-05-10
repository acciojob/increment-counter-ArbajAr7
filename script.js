//your JS code here. If required.
var number = 1;
function incrementNumber() {
	number += 1;
  document.getElementById("abc").innerHTML = number;
}
document.getElementById('xyz').innerHTML += "<p id='abc'>" + number + "</p>";
document.getElementById('xyz').innerHTML += "<button id ='btn'>Increment</button>";
document.getElementById('btn').addEventListener("click",incrementNumber);
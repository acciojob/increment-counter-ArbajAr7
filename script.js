//your JS code here. If required.
var number = 0;
function incrementNumber() {
	number += 1;
  document.getElementById("counter").innerHTML = number;
}
document.getElementById('xyz').innerHTML += "<p id='counter'>0</p>";
document.getElementById('xyz').innerHTML += "<button id ='incrementBtn'>Increment</button>";
document.getElementById('incrementBtn').addEventListener("click",incrementNumber);
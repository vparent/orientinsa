var verticalDegree=document.getElementById("vertDeg").value;
var verticalMinutes=document.getElementById("vertMin").value;
var verticalSeconds=document.getElementById("vertSec").value;
var horizontalDegree=document.getElementById("horizDeg").value;
var horizontalMinutes=document.getElementById("horizMin").value;
var horizontalSeconds=document.getElementById("horizSec").value;

var submitBtn=document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(){
	console.log(verticalDegree+"°"+verticalMinutes+"'"+verticalSeconds+"''");
	console.log(horizontalDegree+"°"+horizontalMinutes+"'"+horizontalSeconds+"''");
});

var teacherUsername="Isabelle Manchon";
document.getElementById("teacherName").textContent=teacherUsername;

var addPupilBtn=document.getElementById("addPupil");
var makeGroupBtn=document.getElementById("makeGroup");
var makeRouteBtn=document.getElementById("makeRoute");
var raceProgressBtn=document.getElementById("raceProgress");

addPupilBtn.addEventListener("click",function(){
	window.location.href="../view/addPupil.html";
});
makeGroupBtn.addEventListener("click",function(){
	window.location.href="../view/groupMaking.html";
});
makeRouteBtn.addEventListener("click",function(){
	window.location.href="../view/routeMaking.html";
});
raceProgressBtn.addEventListener("click",function(){
	window.location.href="../view/teacherInterface.html";
});

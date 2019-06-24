var teacherUsername="Isabelle Manchon";
document.getElementById("teacherName").textContent=teacherUsername;

var addPupilBtn=document.getElementById("addPupil");
var makeGroupBtn=document.getElementById("makeGroup");
var raceProgressBtn=document.getElementById("raceProgress");

addPupilBtn.addEventListener("click",function(){
	window.location.href="../view/addPupil.html";
});
makeGroupBtn.addEventListener("click",function(){
	window.location.href="../view/groupMaking.html";
});
raceProgressBtn.addEventListener("click",function(){
	window.location.href="../view/teacherInterface.html";
});

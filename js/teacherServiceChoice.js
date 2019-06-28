var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    document.getElementById("teacherName").textContent=this.responseText;
}
xmlhttp.open("GET", "../index.php?q=rqstName");
xmlhttp.send();

var addPupilBtn=document.getElementById("addPupil");
var makeGroupBtn=document.getElementById("makeGroup");
var addMarkerBtn=document.getElementById("addMarker");
var makeRouteBtn=document.getElementById("makeRoute");
var raceResumeBtn=document.getElementById("raceResume");
var raceProgressBtn=document.getElementById("raceProgress");
var logoutBtn=document.getElementById("logoutBtn");

addPupilBtn.addEventListener("click",function(){
	window.location.href="../view/addPupil.html";
});
makeGroupBtn.addEventListener("click",function(){
	window.location.href="../view/groupMaking.html";
});
addMarkerBtn.addEventListener("click",function(){
	window.location.href="../view/addMarker.html";
});
makeRouteBtn.addEventListener("click",function(){
	window.location.href="../view/routeMaking.html";
});
raceResumeBtn.addEventListener("click",function(){
	window.location.href="../view/race.html";
});
raceProgressBtn.addEventListener("click",function(){
	window.location.href="../view/teacherInterface.html";
});
logoutBtn.addEventListener("click", function(){
    window.location.href="../logout.php";
});

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    document.getElementById("teacherName").textContent=this.responseText;
}
xmlhttp.open("GET", "http://localhost:9000/index.php?q=rqstName");
xmlhttp.send();

var addPupilBtn=document.getElementById("addPupil");
var makeGroupBtn=document.getElementById("makeGroup");
var makeRouteBtn=document.getElementById("makeRoute");
var raceProgressBtn=document.getElementById("raceProgress");
var logoutBtn=document.getElementById("logoutBtn");

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
logoutBtn.addEventListener("click", function(){
    window.location.href="../logout.php";
});

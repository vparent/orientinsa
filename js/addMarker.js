class Marker {
	constructor(num,isIndividual,vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec){
		this.num=num; /* The number of the marker if the markers*/
		this.isIndividual=isIndividual; /* True if the marker needs to be found by only one pupil
                                   False if it needs to be found by each member of the group */
		this.vertDir=vertDir;
		this.vertDeg=vertDeg;
		this.vertMin=vertMin;
		this.vertSec=vertSec;
		this.horizDir=horizDir;
		this.horizDeg=horizDeg;
		this.horizMin=horizMin;
		this.horizSec=horizSec;
		
		this.isSelected=false;
	}
};

var verticalDegree=document.getElementById("vertDeg").value;
var verticalMinutes=document.getElementById("vertMin").value;
var verticalSeconds=document.getElementById("vertSec").value;
var horizontalDegree=document.getElementById("horizDeg").value;
var horizontalMinutes=document.getElementById("horizMin").value;
var horizontalSeconds=document.getElementById("horizSec").value;

/*var submitBtn=document.getElementById("submitBtn");
submitBtn.addEventListener("click",function(){
	console.log(verticalDegree+"°"+verticalMinutes+"'"+verticalSeconds+"''");
	console.log(horizontalDegree+"°"+horizontalMinutes+"'"+horizontalSeconds+"''");
});*/

var validBtn=document.getElementById("validBtn");
validBtn.addEventListener("click",function(){
    var num = 0;
	num=document.getElementById("numberInput").value;
	var isIndividual;
	if(document.getElementById("typeInput").value=="Individuelle") isIndividual=true;
	else if(document.getElementById("typeInput").value=="Collective") isIndividual=false;
	var vertDir="N";
	if(document.getElementById("north").checked) vertDir="N";
	else if(document.getElementById("south").checked) vertDir="S";
    var vertDeg=0;
	vertDeg=document.getElementById("vertDeg").value;
    var vertMin=0;
	vertMin=document.getElementById("vertMin").value;
    var vertSec=0;
	vertSec=document.getElementById("vertSec").value;
	var horizDir="E";
	if(document.getElementById("east").checked) horizDir="E";
	else if(document.getElementById("west").checked) horizDir="W";
    var horizDeg = 0;
	horizDeg=document.getElementById("horizDeg").value;
    var horizMin = 0;
	horizMin=document.getElementById("horizMin").value;
    var horizSec = 0;
	horizSec=document.getElementById("horizSec").value;
	
	console.log(num);console.log(isIndividual);
	console.log(vertDir);console.log(vertDeg);console.log(vertMin);console.log(vertSec);
	console.log(horizDir);console.log(horizDeg);console.log(horizMin);console.log(horizSec);

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        console.log("send request to server");
    }
    if (vertDir == "S") {
        vertDeg *= -1;
    }
    if (horizDir == "W") {
        horizDeg *= -1;
    }
    window.location.href = "../index.php?q=addTag&nb=" + num + "&vdeg=" + vertDeg + "&vmin=" + vertMin + "&vsec=" + vertSec + "&hdeg=" + horizDeg + "&hmin=" + horizMin + "&hsec=" + horizSec + "&"

	const newMarker = new Marker(num,isIndividual,vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec);
	return newMarker;
});

var goToRouteMakingBtn=document.getElementById("goToRouteMaking");
goToRouteMakingBtn.addEventListener("click",function(){
	window.location.href="../view/routeMaking.html";
});

var goToTeacherServiceChoiceBtn=document.getElementById("goToTeacherServiceChoice");
goToTeacherServiceChoiceBtn.addEventListener("click",function(){
	window.location.href="../view/teacherServiceChoice.html";
});

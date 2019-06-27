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

var validBtn1=document.getElementById("validBtn1");
validBtn1.addEventListener("click",function(){
	var num=document.getElementById("numberInput1").value;
	var isIndividual;
	if(document.getElementById("typeInput1").value=="Individuelle") isIndividual=true;
	else if(document.getElementById("typeInput1").value=="Collective") isIndividual=false;
	var vertDir="N";
	var vertDeg=document.getElementById("vertDeg1").value;
	if(Number(vertDeg)<-90 || Number(vertDeg)>90){
		alert("Le degré de latitude doit être compris entre -90 et 90");
		return 0;
	}
	var vertMin=document.getElementById("vertMin1").value;
	if(Number(vertMin)<0 || Number(vertMin)>60){
		alert("La minute d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var vertSec=document.getElementById("vertSec1").value;
	if(Number(vertSec)<0 || Number(vertSec)>60){
		alert("La seconde d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var horizDir="E";
	var horizDeg=document.getElementById("horizDeg1").value;
	if(Number(horizDeg)<-180 || Number(horizDeg)>180){
		alert("Le degré de longitude doit être compris entre -180 et 180");
		return 0;
	}
	var horizMin=document.getElementById("horizMin1").value;
	if(Number(horizMin)<0 || Number(horizMin)>60){
		alert("La minute d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var horizSec=document.getElementById("horizSec1").value;
	if(Number(horizSec)<0 || Number(horizSec)>60){
		alert("La seconde d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	
	console.log(num);console.log(isIndividual);
	console.log(vertDir);console.log(vertDeg);console.log(vertMin);console.log(vertSec);
	console.log(horizDir);console.log(horizDeg);console.log(horizMin);console.log(horizSec);
	
	const newMarker = new Marker(num,isIndividual,vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec);
	return newMarker;
});

var validBtn2=document.getElementById("validBtn2");
validBtn2.addEventListener("click",function(){
	var num=document.getElementById("numberInput2").value;
	var isIndividual;
	if(document.getElementById("typeInput2").value=="Individuelle") isIndividual=true;
	else if(document.getElementById("typeInput2").value=="Collective") isIndividual=false;
	var vertDir;
	if(document.getElementById("north").checked) vertDir="N";
	else if(document.getElementById("south").checked) vertDir="S";
	var vertDeg=document.getElementById("vertDeg2").value;
	if(Number(vertDeg)<0 || Number(vertDeg)>90){
		alert("Le degré de latitude doit être compris entre 0 et 90");
		return 0;
	}
	var vertMin=document.getElementById("vertMin2").value;
	if(Number(vertMin)<0 || Number(vertMin)>60){
		alert("La minute d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var vertSec=document.getElementById("vertSec2").value;
	if(Number(vertSec)<0 || Number(vertSec)>60){
		alert("La seconde d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var horizDir;
	if(document.getElementById("east").checked) horizDir="E";
	else if(document.getElementById("west").checked) horizDir="W";
	var horizDeg=document.getElementById("horizDeg2").value;
	if(Number(horizDeg)<0 || Number(horizDeg)>180){
		alert("Le degré de longitude doit être compris entre 0 et 180");
		return 0;
	}
	var horizMin=document.getElementById("horizMin2").value;
	if(Number(horizMin)<0 || Number(horizMin)>60){
		alert("La minute d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	var horizSec=document.getElementById("horizSec2").value;
	if(Number(horizSec)<0 || Number(horizSec)>60){
		alert("La seconde d'angle doit être comprise entre 0 et 60");
		return 0;
	}
	
	console.log(num);console.log(isIndividual);
	console.log(vertDir);console.log(vertDeg);console.log(vertMin);console.log(vertSec);
	console.log(horizDir);console.log(horizDeg);console.log(horizMin);console.log(horizSec);
	
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

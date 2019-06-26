class Pupil {
	constructor(firstname,lastname){
		this.firstname=firstname;
		this.lastname=lastname;
		this.groupNum=0; //Initialized as 0
		this.isSelected=false;
		this.indexInList=-1;
	}
};
var pupilsList = [];

class Group {
	constructor(num,members,startTime){
		this.num=num;
		this.members=members;
		this.startTime=startTime;
		this.indexInGroupList=-1;
	}
	/*function addMember(pupil){
		members.push(pupil);
	}*/
};
var groupsList = [];

var pupilsPerGroup=2;
window.onload=function(){
	pupilsPerGroup=2;
	document.getElementById("pupilsPerGroup").value=2;
}
var validPupilsPerGroupBtn=document.getElementById("validPupilsPerGroup");
validPupilsPerGroup.addEventListener("click",function(){
		pupilsPerGroup=document.getElementById("pupilsPerGroup").value;
		console.log(pupilsPerGroup);
		/*var containers=document.getElementsByClassName("container");
		for(var k=0 ; k<containers.length ; k++){
			containers[k].style.display="flex";
		}*/
		var groupMakingContainers=document.getElementById("groupMakingContainers");
		groupMakingContainers.style.display="flex";
		groupMakingContainers.style.flexDirection="column";
		document.getElementById("nbPupilsChoiceContainer").style.display="none";
});

var groupNum=0;
var startTimeSec=-15, startTimeMin=0;

const Quentin = new Pupil("Quentin","Couturier");
pupilsList.push(Quentin);
const Vincent = new Pupil("Vincent","Parent");
pupilsList.push(Vincent);
const Boris = new Pupil("Boris","Resch");
pupilsList.push(Boris);
const Anthony = new Pupil("Anthony","Carado");
pupilsList.push(Anthony);
const Minh = new Pupil("The Minh","Bui");
pupilsList.push(Minh);
const Antonin = new Pupil("Antonin","Chauvet");
pupilsList.push(Antonin);

var selectedPupilsList=[];

function createPupilElt(pupil){
	var pupilElt=document.createElement("div");
	pupilElt.setAttribute("id",pupil.firstname+pupil.lastname);
	pupilElt.setAttribute("class","pupilElt");
	pupilElt.textContent=pupil.firstname+" "+pupil.lastname;
	pupilElt.addEventListener("click",function(){
		if(pupil.isSelected){
			pupilElt.style.backgroundColor="white";
			pupilElt.style.borderColor="black";
			pupilElt.style.color="black";
			pupil.isSelected=false;
			//Let's remove it from the list!
			selectedPupilsList.splice(selectedPupilsList.indexOf(pupil),1);
			for(var j=0 ; j<selectedPupilsList.length ; j++){
				selectedPupilsList[j].indexInList=j;
			}
		}
		else {			
			if(selectedPupilsList.length<pupilsPerGroup){
				pupilElt.style.backgroundColor="blue";
				pupilElt.style.borderColor="blue";
				pupilElt.style.color="white";
				pupil.isSelected=true;
				for(var j=0 ; j<selectedPupilsList.length ; j++){
					selectedPupilsList[j].indexInList=j;
				}
				selectedPupilsList.push(pupil);
			}
		}
	});
	return pupilElt;
}

function createFinalPupilGroupElt(members,num,startTime){
	var finalPupilGroupElt=document.createElement("div");
	finalPupilGroupElt.setAttribute("class","finalPupilGroupElt");
	//groupNumElt
	var groupNumElt=document.createElement("div");
	groupNumElt.setAttribute("class","groupNumElt");
	groupNumElt.setAttribute("id","groupNumElt"+String(groupNum));
	groupNumElt.textContent=groupNum;
	finalPupilGroupElt.appendChild(groupNumElt);
	//pupilGroupElt
	var pupilGroupElt=document.createElement("div");
	pupilGroupElt.setAttribute("class","pupilGroupElt");
	for(var i=0; i<members.length ; i++){
		var pupil=members[i];
		var pupilElt = document.createElement("div");
		pupilElt.textContent=(pupil.firstname+" "+pupil.lastname);
		pupilGroupElt.appendChild(pupilElt);
		//document.getElementById("listOfPupils").removeChild(document.getElementById(pupil.firstname+pupil.lastname));
		//document.getElementById(pupil.firstname+pupil.lastname).style.display="none";
	}
	finalPupilGroupElt.appendChild(pupilGroupElt);
	//startTimeElt
	var startTimeElt=document.createElement("div");
	startTimeElt.setAttribute("class","startTimeElt");
	startTimeElt.setAttribute("id","startTimeElt"+String(groupNum));
	startTimeElt.textContent=startTime;
	finalPupilGroupElt.appendChild(startTimeElt);
	return finalPupilGroupElt;
}

function createPupilsList(){
	var listOfPupilsElt=document.getElementById("listOfPupils");
	for(var i=0; i<pupilsList.length ; i++){
		var pupil=pupilsList[i];
		var pupilElt=createPupilElt(pupil);
		listOfPupilsElt.appendChild(pupilElt);
	}
}
createPupilsList();

var validBtn=document.getElementById("groupValidBtn");
validBtn.addEventListener("click",function(){
	if(selectedPupilsList.length==pupilsPerGroup){
		
		//// Creation of a Group ////
		const group = new Group(0,[],"");
		console.log("New group!");
		console.log(group);
		group.indexInGroupList=groupsList.length;
		groupsList.push(group);
		for(var i=0; i<selectedPupilsList.length ; i++){
			group.members.push(selectedPupilsList[i]);
		}
		
		//// Updating the variables ////
		/*groupNum+=1;
		startTimeSec+=15;
		if(startTimeSec==60){
			startTimeMin+=1;
			startTimeSec=0;
		}
		var startTimeTxt="";
		if(startTimeSec==0)	startTimeTxt=startTimeMin+"'00''";
		else startTimeTxt=startTimeMin+"'"+startTimeSec+"''";*/
		
		//// Creation of the element ////
		var pupilGroupBlockElt=document.createElement("div");
		pupilGroupBlockElt.setAttribute("class","pupilGroupBlockElt");
		//pupilGroupElt
		var pupilGroupElt=document.createElement("div");
		pupilGroupElt.setAttribute("class","pupilGroupElt");
		for(var i=0; i<selectedPupilsList.length ; i++){
			var pupil=selectedPupilsList[i];
			var pupilElt = document.createElement("div");
			pupilElt.textContent=(pupil.firstname+" "+pupil.lastname);
			pupilGroupElt.appendChild(pupilElt);
			document.getElementById("listOfPupils").removeChild(document.getElementById(pupil.firstname+pupil.lastname));
			//document.getElementById(pupil.firstname+pupil.lastname).style.display="none";
		}
		pupilGroupBlockElt.appendChild(pupilGroupElt);
		//imgElt
		var imgElt=document.createElement("img");
		imgElt.setAttribute("src","../asset/delete.png");
		imgElt.addEventListener("click",function(){
			pupilGroupBlockElt.style.color="white";
			pupilGroupBlockElt.style.backgroundColor="red";
			var removedGroup=groupsList.splice(groupsList.indexOf(group),1);
			console.log(removedGroup);
			for(var l=0 ; l<removedGroup[0].members.length ; l++){
				var recreatedPupil = removedGroup[0].members[l];
				recreatedPupil.isSelected=false;
				document.getElementById("listOfPupils").appendChild(createPupilElt(recreatedPupil));
				pupilGroupBlockElt.style.display="none";
			}
		});
		pupilGroupBlockElt.appendChild(imgElt);		
		document.getElementById("groupsList").appendChild(pupilGroupBlockElt);
		
		var len=selectedPupilsList.length;
		for(var l=0 ; l<len ; l++){
			selectedPupilsList.pop();
		}
	} else {
		console.log("Pas assez d'élèves sélectionnés!");
	}
});

var groupsValidBtn=document.getElementById("groupsValid");
groupsValidBtn.addEventListener("click",function(){
	var nbUnselectedPupils=document.getElementsByClassName("pupilElt").length;
	if (nbUnselectedPupils==0){
		document.getElementById("groupMakingContainers").style.display="none";
		document.getElementById("finalGroupsContainer").style.display="flex";
		console.log(groupsList);
		for(var j=0 ; j<groupsList.length ; j++){
			groupNum+=1;
			startTimeSec+=15;
			if(startTimeSec==60){
				startTimeMin+=1;
				startTimeSec=0;
			}
			var startTimeTxt="";
			if(startTimeSec==0)	startTimeTxt=startTimeMin+"'00''";
			else startTimeTxt=startTimeMin+"'"+startTimeSec+"''";
			groupsList[j].num=groupNum;
			groupsList[j].startTime=startTimeTxt;
			var finalGroupElt=createFinalPupilGroupElt(groupsList[j].members,groupsList[j].num,groupsList[j].startTime);
			document.getElementById("finalGroupsContainer").appendChild(finalGroupElt);
		}
	}
	else alert("Il reste des élèves à assigner");
});

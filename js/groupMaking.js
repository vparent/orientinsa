class Pupil {
	constructor(firstname,lastname){
		this.firstname=firstname;
		this.lastname=lastname;
		this.groupNum=0; //Initialized as 0
		this.isSelected=false;
		this.indexInList=-1;
	}
};

var pupilsPerGroup=2;
var groupNum=0;
var startTimeSec=-15, startTimeMin=0;

var pupilsList = [];
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
			/*if(pupil.indexInList==0){
				if(selectedPupilsList.length==pupilsPerGroup){
					selectedPupilsList[1].indexInList=0;
					selectedPupilsList.shift();
					console.log(selectedPupilsList);
				} else {
					selectedPupilsList.shift();
				}
			}
			else if(pupil.indexInList==1){
				selectedPupilsList.pop();
			}*/
		}
		else {			
			if(selectedPupilsList.length<pupilsPerGroup){
				pupilElt.style.backgroundColor="blue";
				pupilElt.style.borderColor="blue";
				pupilElt.style.color="white";
				pupil.isSelected=true;
				if(selectedPupilsList.length==0) pupil.indexInList=0;
				else if(selectedPupilsList.length==1) pupil.indexInList=1;
				selectedPupilsList.push(pupil);
			}
		}
	});
	return pupilElt;
}

function createPupilsList(){
	var listOfPupils=document.getElementById("listOfPupils");
	for(var i=0; i<pupilsList.length ; i++){
		var pupil=pupilsList[i];
		var pupilElt=createPupilElt(pupil);
		listOfPupils.appendChild(pupilElt);
	}
}
createPupilsList();

var validBtn=document.getElementById("groupValidBtn");
validBtn.addEventListener("click",function(){
	if(selectedPupilsList.length=pupilsPerGroup){
		var pupilGroupBlockElt=document.createElement("div");
		pupilGroupBlockElt.setAttribute("class","pupilGroupBlockElt");
		//groupNumElt
		var groupNumElt=document.createElement("div");
		groupNumElt.setAttribute("class","groupNumElt");
		groupNum+=1;
		groupNumElt.textContent=groupNum;
		pupilGroupBlockElt.appendChild(groupNumElt);
		//pupilGroupElt
		var pupilGroupElt=document.createElement("div");
		pupilGroupElt.setAttribute("class","pupilGroupElt");
		for(var i=0; i<selectedPupilsList.length ; i++){
			var pupil=selectedPupilsList[i];
			var pupilElt = document.createElement("div");
			pupilElt.textContent=(pupil.firstname+" "+pupil.lastname);
			pupilGroupElt.appendChild(pupilElt);
			document.getElementById("listOfPupils").removeChild(document.getElementById(pupil.firstname+pupil.lastname));
		}
		pupilGroupBlockElt.appendChild(pupilGroupElt);
		//startTimeElt
		var startTimeElt=document.createElement("div");
		startTimeElt.setAttribute("class","startTimeElt");
		startTimeSec+=15;
		if(startTimeSec==60){
			startTimeMin+=1;
			startTimeSec=0;
		}
		if(startTimeSec==0)	startTimeElt.textContent=startTimeMin+"'00''";
		else startTimeElt.textContent=startTimeMin+"'"+startTimeSec+"''";
		pupilGroupBlockElt.appendChild(startTimeElt);
		document.getElementById("groupsList").appendChild(pupilGroupBlockElt);
		selectedPupilsList.shift();selectedPupilsList.shift();
	} else {
		console.log("Pas assez d'élèves sélectionnés!");
	}
});

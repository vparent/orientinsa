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

class Group {
	constructor(num,members,startTime){
		this.num=num;
		this.members=members;
		this.startTime=startTime;
		this.indexInGroupList=-1;
	}
	addMember(pupil){
		this.members.push(pupil);
	}
};
var groupsList = [];
const group1 = new Group(1,[],"0'00''");
group1.addMember(Quentin);
group1.addMember(Vincent);
groupsList.push(group1);
const group2 = new Group(2,[],"0'15''");
group2.addMember(Boris);
group2.addMember(Anthony);
groupsList.push(group2);
const group3 = new Group(3,[],"0'30''");
group3.addMember(Minh);
group3.addMember(Antonin);
groupsList.push(group3);

function createPupilGroupElt(members,num,startTime){
	var pupilGroupElt=document.createElement("div");
	pupilGroupElt.setAttribute("class","pupilGroupElt");
	//groupNumElt
	var groupNumElt=document.createElement("div");
	groupNumElt.setAttribute("class","groupNumElt");
	groupNumElt.setAttribute("id","groupNumElt"+String(num));
	groupNumElt.textContent=num;
	pupilGroupElt.appendChild(groupNumElt);
	//pupilsElt
	var pupilsElt=document.createElement("div");
	pupilsElt.setAttribute("class","pupilsElt");
	pupilsElt.style.display="flex";
	pupilsElt.style.flexDirection="column";
	for(var i=0; i<members.length ; i++){
		var pupil=members[i];
		var pupilElt = document.createElement("div");
		pupilElt.textContent=(pupil.firstname+" "+pupil.lastname);
		pupilsElt.appendChild(pupilElt);
	}
	pupilGroupElt.appendChild(pupilsElt);
	//startTimeElt
	var startTimeElt=document.createElement("div");
	startTimeElt.setAttribute("class","startTimeElt");
	startTimeElt.setAttribute("id","startTimeElt"+String(num));
	startTimeElt.textContent=startTime;
	pupilGroupElt.appendChild(startTimeElt);
	return pupilGroupElt;
}

function addPupilGroupsInContainer(){
	var groupsMainContainer=document.getElementById("groupsMainContainer");
	for(var i=0; i<groupsList.length ; i++) {
		var pupilGroupElt = createPupilGroupElt(groupsList[i].members,groupsList[i].num,groupsList[i].startTime);
		groupsMainContainer.appendChild(pupilGroupElt);
	}
}
addPupilGroupsInContainer();

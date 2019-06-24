class Pupil {
	constructor(firstname,lastname,classroom){
		this.firstname=firstname;
		this.lastname=lastname;
		this.classroom=classroom;
	}
}

var pupilsList=[];

var firstnameInput=document.getElementById("firstname");
var lastnameInput=document.getElementById("lastname");
var classroomInput=document.getElementById("class");
/*var validBtn=document.getElementById("validBtn");

validBtn.addEventListener("onclick",function(){
	const JohnDoe = new Pupil(firstnameInput.value,lastnameInput.value,classroomInput.value);
	pupilsList.push(JohnDoe);
	console.log(pupilsList);
});*/

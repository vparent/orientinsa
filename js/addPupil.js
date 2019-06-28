class Pupil {
	constructor(firstname,lastname,classroom){
		this.firstname=firstname;
		this.lastname=lastname;
		this.classroom=classroom;
	}
}

var pupilsList = [];

var firstnameInput=document.getElementById("firstname");
var lastnameInput=document.getElementById("lastname");
var classroomInput=document.getElementById("class");
var retBtn=document.getElementById("retBtn");

retBtn.addEventListener("onclick", function() {
    window.location.href="../view/teacherServiceChoice.html";
});

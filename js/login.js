var usernameInput = document.getElementById("username");
usernameInput.value="";
var passwordInput = document.getElementById("password");
passwordInput.value="";
var btnValid = document.getElementById("validBtn");

var pupilUsername = "qcouturi";
var pupilPassword = "Ben63Dsm";
var teacherUsername = "T-800";
var teacherPassword = "illbeback";

btnValid.addEventListener("click",function login() {
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;
	if(usernameInput.value==pupilUsername && passwordInput.value==pupilPassword) console.log("Bonjour élève!");
	else if(usernameInput.value==teacherUsername && passwordInput.value==teacherPassword) console.log("Bonjour professeur!");
	else console.log("Erreur d'authentification!");
}
);

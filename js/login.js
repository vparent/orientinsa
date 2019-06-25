var usernameInput = document.getElementById("username");
usernameInput.value="";
var passwordInput = document.getElementById("password");
passwordInput.value="";
var btnValid = document.getElementById("validBtn");

btnValid.addEventListener("click",function login() {
	var usernameValue=usernameInput.value;
	var passwordValue=passwordInput.value;

    window.location.href = "../login.php?login="+usernameValue+"&password="+genHash(passwordValue)+"&";
}
);

function genHash(text)
{
    if (text != '')
    {
        var md = forge.md.sha256.create();
        md.start();
        md.update(text, "utf8");
        var hashText = md.digest().toHex();

        return hashText;
    }
    else
    {
        return '';
    }
}

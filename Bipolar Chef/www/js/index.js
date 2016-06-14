function loadLogIn(){	
	window.location.href = "login.html";
}

function loadSignUp(){
	window.location.href = "signup.html";
}

var wap = 0;
function faceWap(){
	if (wap == 0){
		wap = 1;
		document.getElementById("logoDiv").style.background = "url(../img/logo2.png) no-repeat center top";
	}
	else{
		wap = 0;
		document.getElementById("logoDiv").style.background = "url(../img/logo.png) no-repeat center top";
	}
	document.getElementById("logoDiv").style.backgroundSize = "100%";
}
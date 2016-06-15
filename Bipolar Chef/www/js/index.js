function loadLogIn(){	
	window.location.href = "login.html";
}

function loadSignUp(){
	window.location.href = "signup.html";
}

var wap = 0;
var located = 0;
function faceWap(){
	if (wap == 0){
		wap = 1;
		document.getElementById("logoDiv").style.background = "url(img/logo2.png) no-repeat center top";
	}
	else{
		wap = 0;
		document.getElementById("logoDiv").style.background = "url(img/logo.png) no-repeat center top";
	}
	document.getElementById("logoDiv").style.backgroundSize = "100%";
}

var onSuccess = function(position) {
        /*alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');*/	
			  
		document.getElementById("Locate_DeliverButton").innerHTML = '<img src="img/deliver1.png" style="vertical-align:central"/> DELIVER'; 
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

function locate_Deliver(){
	if (located == 0){
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
		located = 1;
	}
	else{
		alert("Now deliver");
	}
}
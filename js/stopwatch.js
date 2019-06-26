var hoursElt=document.getElementById("hours");
var minutesElt=document.getElementById("minutes");
var secondsElt=document.getElementById("seconds");
var startBtn=document.getElementById("startBtn");

var limHour=0,limMin=0,limSec=12;
var seconds=0, minutes=0, hours=0;
var intervalId=null;
var running=false;


function increaseStopwatch(h,m,s){
	if(limitTime()){
		startBtn.style.backgroundColor="red";
		startBtn.style.borderColor="red";
		startBtn.textContent="Fin de la course!";
		clearInterval(intervalId);
	}
	else{
		seconds+=1;
		if(seconds>=10) document.getElementById("0s").textContent="";
		else document.getElementById("0s").textContent="0";
		if(minutes>=10) document.getElementById("0m").textContent="";
		else document.getElementById("0m").textContent="0";
		if(seconds==60){
			seconds=0;
			minutes+=1;
			if(minutes==60){
				minutes=0;
				hours+=1;
			}
		}
		hoursElt.textContent==Number(hours);
		minutesElt.textContent=Number(minutes);
		secondsElt.textContent=Number(seconds);
	}
}

function limitTime(){
	//return (time==limHour*3600+limMin*60+limSec);
	return (hours==limHour && minutes==limMin && seconds==limSec);
}

startBtn.addEventListener("click",function(){
	if(!running) {
		intervalId=setInterval(increaseStopwatch,1000);
		running=true;
	}
});

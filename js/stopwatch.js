var hoursElt=document.getElementById("hours");
var minutesElt=document.getElementById("minutes");
var secondsElt=document.getElementById("seconds");
var startBtn=document.getElementById("startBtn");

var limHour=0,limMin=0,limSec=5;
var time=0;
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
		time+=1;
		var hours=(time-time%3600)/3600;
		var minutes=(time-time%60)/60;
		var seconds=time%60;
		console.log(hours+":"+minutes+":"+seconds);
		if(seconds>=10) document.getElementById("0s").textContent="";
		if(minutes>=10) document.getElementById("0m").textContent="";
		hoursElt.textContent==Number(hours);
		minutesElt.textContent=Number(minutes);
		secondsElt.textContent=Number(seconds);
	}
}

function limitTime(){
	return (time==limHour*3600+limMin*60+limSec);
}

startBtn.addEventListener("click",function(){
	if(!running) {
		intervalId=setInterval(increaseStopwatch,1000);
		running=true;
	}
});

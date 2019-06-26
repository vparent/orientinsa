var hoursElt=document.getElementById("hours");
var minutesElt=document.getElementById("minutes");
var secondsElt=document.getElementById("seconds");
var startBtn=document.getElementById("startBtn");

var seconds=12, minutes=0, hours=0;
var time=hours*3600+minutes*60+seconds;
hoursElt.textContent=Number(hours);
minutesElt.textContent=Number(minutes);
if(minutes>=10) document.getElementById("0m").textContent="";
secondsElt.textContent=Number(seconds);
if(seconds>=10) document.getElementById("0s").textContent="";
		
var intervalId=null;
var running=false;

document.getElementById("startRace").addEventListener("click",function(){
	if(!running) {
		document.getElementById("raceIsRunning").style.display="flex";
		document.getElementById("raceIsNotRunning").style.display="none";
		intervalId=setInterval(decreaseTimeout,1000);
		running=true;
	}
});


function decreaseTimeout(){
	if(limitTime()){
		document.getElementById("validBtn").disabled=false;
		clearInterval(intervalId);
	}
	else{
		var cpTime=time;
		var hours=(cpTime-cpTime%3600)/3600;
		cpTime-=(hours*3600);
		var minutes=(cpTime-cpTime%60)/60;
		cpTime-=(minutes*60);
		var seconds=cpTime;
		if(seconds>=10) document.getElementById("0s").textContent="";
		else document.getElementById("0s").textContent="0";
		if(minutes>=10) document.getElementById("0m").textContent="";
		else document.getElementById("0m").textContent="0";
		hoursElt.textContent=Number(hours);
		minutesElt.textContent=Number(minutes);
		secondsElt.textContent=Number(seconds);
		time-=1;
		document.getElementById("validBtn").disabled=true;
	}
}

function limitTime(){
	return (time==-1);
}

/*startBtn.addEventListener("click",function(){
	if(!running) {
		intervalId=setInterval(decreaseTimeout,1000);
		running=true;
	}
});*/

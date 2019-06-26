class Marker {
	constructor(vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec){
		this.vertDir=vertDir;
		this.vertDeg=vertDeg;
		this.vertMin=vertMin;
		this.vertSec=vertSec;
		this.horizDir=horizDir;
		this.horizDeg=horizDeg;
		this.horizMin=horizMin;
		this.horizSec=horizSec;
	}
};

var markersList=[]
const marker1 = new Marker("North","44","13","36","East","11","27","3");
markersList.push(marker1);
const marker2 = new Marker("South","18","32","8","West","21","7","57");
markersList.push(marker2);

var listOfMarkersElt=document.getElementById("listOfMarkers");

function createMarkerElt(marker){
	/* marker : type Marker */
	var markerElt=document.createElement("div");
	markerElt.setAttribute("class","markerElt");
	markerEltTxt="";
	markerEltTxt+=(marker.horizDir+" "+marker.horizDeg+"°"+marker.horizMin+"'"+marker.horizSec+"''");
	markerEltTxt+="\n";
	markerEltTxt+=(marker.vertDir+" "+marker.vertDeg+"°"+marker.vertMin+"'"+marker.vertSec+"''");
	markerElt.textContent=markerEltTxt;
	return markerElt;
}

function createMarkersList(){
	console.log(markersList);
	for(var i=0; i<markersList.length; i++){
		var markerElt=createMarkerElt(markersList[i]);
		listOfMarkersElt.appendChild(markerElt);
	}
}
createMarkersList();

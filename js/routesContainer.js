var colorsList=["red","blue","green","yellow","purple","darkorange"];

class Marker {
	constructor(num,isIndividual,vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec){
		this.num=num; /* The number of the marker if the markers*/
		this.isIndividual=isIndividual; /* True if the marker needs to be found by only one pupil
                                   False if it needs to be found by each member of the group */
		this.vertDir=vertDir;
		this.vertDeg=vertDeg;
		this.vertMin=vertMin;
		this.vertSec=vertSec;
		this.horizDir=horizDir;
		this.horizDeg=horizDeg;
		this.horizMin=horizMin;
		this.horizSec=horizSec;
		
		this.isSelected=false;
	}
};

class Route {
	constructor(num,markers){
		this.num=num; /* The number of the Route */
		this.markers=markers; /* The list containing the markers of the Route */
		this.hasAnOrder=false; /* True if the route needs its markers to be found in a particular order, False else. */
	}
	addMarker(marker){
		this.markers.push(marker);
	}
}

var markersList=[];
var routesList=[];

const marker1 = new Marker("N","44","13","36","E","11","27","3","1");
markersList.push(marker1);
const marker2 = new Marker("S","18","32","8","W","21","7","57","2");
marker2.isIndividual=false;
markersList.push(marker2);
const marker3 = new Marker("N","19","25","6","W","37","12","31","3");
markersList.push(marker3);
const marker4 = new Marker("S","30","41","17","E","21","7","57","4");
markersList.push(marker4);
const route1 = new Route(1,[]);
route1.addMarker(marker1);route1.addMarker(marker2);route1.addMarker(marker3);route1.addMarker(marker4);
routesList.push(route1);

const marker5 = new Marker("S","41","23","51","W","11","27","3","5");
markersList.push(marker5);
marker5.isIndividual=false;
const marker6 = new Marker("S","8","29","11","E","21","7","57","6");
markersList.push(marker6);
const marker7 = new Marker("N","32","20","27","E","37","12","31","7");
markersList.push(marker7);
const marker8 = new Marker("N","48","47","46","W","1","51","39","8");
markersList.push(marker8);
marker8.isIndividual=false;
const route2 = new Route(2,[]);
route2.addMarker(marker5);route2.addMarker(marker6);route2.addMarker(marker7);route2.addMarker(marker8);
routesList.push(route2);


function createRouteContainer(num){
	var routeContainerElt=document.createElement("div");
	routeContainerElt.setAttribute("id","routeContainer"+String(num));
	routeContainerElt.setAttribute("class","routeContainerElt");
	var routeNameElt=document.createElement("div");
	routeNameElt.setAttribute("class","routeNameElt");
	routeNameElt.style.backgroundColor=colorsList[num-1];
	routeNameElt.textContent="Parcours n°"+String(num);
	routeContainerElt.appendChild(routeNameElt);
	return routeContainerElt;
}

function addMarkerInRoute(num,marker) {
	/* num : the number of the route 
	   coords : a string given by the markerElt on which we clicked and that gives the coordinates of the corresponding marker.*/
	var markerInRouteElt=document.createElement("div");
	markerInRouteElt.style.display="flex";
	markerInRouteElt.style.flexDirection="row";
	markerInRouteElt.setAttribute("class","markerInRouteElt");
	///// markerNumElt /////
	/*if(marker.num>0){
	}*/
	var markerNumElt=document.createElement("div");
	markerNumElt.setAttribute("class","markerNumElt");
	markerNumElt.textContent=String(marker.num);
	markerInRouteElt.appendChild(markerNumElt);
	///// markerCoordsElt /////
	var markerCoordsElt=document.createElement("div");
	markerCoordsElt.setAttribute("class","markerCoordsElt");
	var coords="";
	coords+=(marker.vertDir+" "+marker.vertDeg+"°"+marker.vertMin+"'"+marker.vertSec+"''");
	coords+="  ";
	coords+=(marker.horizDir+" "+marker.horizDeg+"°"+marker.horizMin+"'"+marker.horizSec+"''");
	if(!routesList[num-1].markers.includes(marker)) routesList[num-1].markers.push(marker);
	console.log(routesList[num-1]);
	markerCoordsElt.textContent=coords;
	markerInRouteElt.appendChild(markerCoordsElt);
	///// markerTypeElt /////
	var markerTypeElt=document.createElement("img");
	markerTypeElt.setAttribute("class","markerTypeElt");
	if(marker.isIndividual) markerTypeElt.setAttribute("src","../asset/one_pupil.png");
	else  markerTypeElt.setAttribute("src","../asset/two_pupil.png");
	markerTypeElt.style.width="22px";
	markerTypeElt.style.height="22px";
	markerInRouteElt.appendChild(markerTypeElt);
	
	document.getElementById("routeContainer"+String(num)).appendChild(markerInRouteElt);
}

function addRoutesInContainer(){
	var routesMainContainer=document.getElementById("routesMainContainer");
	for(var i=0; i<routesList.length ; i++){
		routesMainContainer.appendChild(createRouteContainer(routesList[i].num));
		for(var j=0; j<routesList[i].markers.length ; j++){
			addMarkerInRoute(routesList[i].num,routesList[i].markers[j]);
		}
	}
}
addRoutesInContainer();

///// LET'S BEGIN BY CHOSING THE NUMBER OF ROUTES /////
var colorsList=["red","blue","green","yellow","purple","darkorange"];
var validNbRoutesBtn=document.getElementById("validNbRoutes");
var nbRoutes=0;
var chosenRouteNum=1;
validNbRoutesBtn.addEventListener("click",function(){
	nbRoutes=document.getElementById("nbRoutes").value;
	document.getElementById("nbRoutesInput").style.display="none";
	document.getElementById("routesCreation").style.display="flex";
	var nbFullButtonLines=(nbRoutes-nbRoutes%3)/3;
	var k=0; 
	for(var i=0; i<nbFullButtonLines ; i++){
		var fullButtonLine=document.createElement("div");
		for(var j=1; j<=3 ; j++) {
			k++;
			createRouteContainer(k);
			var routeButton=document.createElement("button");
			routeButton.setAttribute("id","button"+String(k));
			routeButton.style.backgroundColor=colorsList[k-1];
			routeButton.textContent="Parcours "+String(k);
			routeButton.addEventListener("click",function(){
				chosenRouteNum=Number(this.textContent[routeButton.textContent.length-1]);
				document.getElementById("chosenRouteSpan").textContent=chosenRouteNum;
				document.getElementById("chosenRouteSpan").style.color=colorsList[chosenRouteNum-1];
			});
			fullButtonLine.appendChild(routeButton);
		}
		fullButtonLine.setAttribute("id","fullButtonLine"+String(i));
		document.getElementById("routesButtons").appendChild(fullButtonLine);
	}
	var lastButtonLine=document.createElement("div");
	while(k<nbRoutes){
		k++;
		createRouteContainer(k);
		var routeButton=document.createElement("button");
		routeButton.setAttribute("id","button"+String(k));
		routeButton.style.backgroundColor=colorsList[k-1];
		routeButton.textContent="Parcours "+String(k);
		routeButton.addEventListener("click",function(){
			chosenRouteNum=Number(this.textContent[routeButton.textContent.length-1]);
			document.getElementById("chosenRouteSpan").textContent=chosenRouteNum;
		});
		lastButtonLine.appendChild(routeButton);
	}
	document.getElementById("routesButtons").appendChild(lastButtonLine);
});


///// AFTER THE CHOICE OF THE NUMBER OF ROUTES /////
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
		this.isSelected=false;
	}
};

class Route {
	constructor(num,markers){
		this.num=num; /* The number of the Route */
		this.markers=markers; /* The list containing the markers of the Route */
	}
}

var markersList=[]
const marker1 = new Marker("N","44","13","36","E","11","27","3");
markersList.push(marker1);
const marker2 = new Marker("S","18","32","8","W","21","7","57");
markersList.push(marker2);
const marker3 = new Marker("N","19","25","6","W","37","12","31");
markersList.push(marker3);
const marker4 = new Marker("S","30","41","17","E","21","7","57");
markersList.push(marker4);

var routesList=[];

var listOfMarkersElt=document.getElementById("listOfMarkers");

function createMarkerElt(marker){
	/* marker : type Marker */
	var markerElt=document.createElement("div");
	markerElt.setAttribute("class","markerElt");
	markerEltTxt="";
	markerEltTxt+=(marker.vertDir+" "+marker.vertDeg+"°"+marker.vertMin+"'"+marker.vertSec+"''");
	markerEltTxt+="\n";
	markerEltTxt+=(marker.horizDir+" "+marker.horizDeg+"°"+marker.horizMin+"'"+marker.horizSec+"''");
	markerElt.textContent=markerEltTxt;
	markerElt.addEventListener("click",function(){
		//addMarkerInRoute(chosenRouteNum,markerElt.textContent);
		if(!routesList[chosenRouteNum-1].markers.includes(marker))addMarkerInRoute(chosenRouteNum,marker);
		//markerElt.style.display="none";		///// DECOMMENTER POUR QUE LES BALISES CLIQUEES DISPARAISSENT /////
		/*if(marker.isSelected){
			markerElt.style.backgroundColor="white";
			markerElt.style.borderColor="black";
			markerElt.style.color="black";
			marker.isSelected=false;
		}
		else {
			markerElt.style.backgroundColor="blue";
			markerElt.style.borderColor="blue";
			markerElt.style.color="white";
			marker.isSelected=true;
			addMarkerInRoute(chosenRouteNum,markerElt.textContent);
			//markerElt.style.display="none";		///// DECOMMENTER POUR QUE LES BALISES CLIQUEES DISPARAISSENT /////
		}*/
	});
	return markerElt;
}

function createMarkersList(){
	for(var i=0; i<markersList.length; i++){
		var markerElt=createMarkerElt(markersList[i]);
		listOfMarkersElt.appendChild(markerElt);
	}
}
createMarkersList();


function createRouteContainer(num){
	var route = new Route(num,[]);
	routesList.push(route);
	var routeContainerElt=document.createElement("div");
	routeContainerElt.setAttribute("id","routeContainer"+String(num));
	routeContainerElt.setAttribute("class","routeContainerElt");
	var routeNameElt=document.createElement("div");
	routeNameElt.setAttribute("class","routeNameElt");
	routeNameElt.style.backgroundColor=colorsList[num-1];
	routeNameElt.textContent="Parcours n°"+String(num);
	routeContainerElt.appendChild(routeNameElt);
	document.getElementById("routes").appendChild(routeContainerElt);
}

function addMarkerInRoute(num,marker) {
	/* num : the number of the route 
	   coords : a string given by the markerElt on which we clicked and that gives the coordinates of the corresponding marker.*/
	var newMarker=document.createElement("div");
	newMarker.setAttribute("class","markerInRouteElt");
	var coords="";
	coords+=(marker.vertDir+" "+marker.vertDeg+"°"+marker.vertMin+"'"+marker.vertSec+"''");
	coords+="\n";
	coords+=(marker.horizDir+" "+marker.horizDeg+"°"+marker.horizMin+"'"+marker.horizSec+"''");
	if(!routesList[num-1].markers.includes(marker)) routesList[num-1].markers.push(marker);
	console.log(routesList[num-1]);
	newMarker.textContent=coords;
	newMarker.addEventListener("click",function(){
		console.log("YO");
		routesList[num-1].markers.splice(routesList[num-1].markers.indexOf(marker),1)
		this.style.display="none";
	});
	document.getElementById("routeContainer"+String(num)).appendChild(newMarker);
}

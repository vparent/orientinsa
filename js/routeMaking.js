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
				document.getElementById("routeInfoPar").style.borderStyle=solid;
				document.getElementById("routeInfoPar").style.borderColor=colorsList[chosenRouteNum-1];
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
	constructor(vertDir,vertDeg,vertMin,vertSec,horizDir,horizDeg,horizMin,horizSec,num,id,isIndividual){
		this.vertDir=vertDir;
		this.vertDeg=vertDeg;
		this.vertMin=vertMin;
		this.vertSec=vertSec;
		this.horizDir=horizDir;
		this.horizDeg=horizDeg;
		this.horizMin=horizMin;
		this.horizSec=horizSec;

		this.num=num; /* The number of the marker if the markers*/
        this.id=id /* id of the marker in the database */
		this.isIndividual=isIndividual; /* True if the marker needs to be found by only one pupil
                                   False if it needs to be found by each member of the group */
		
		this.isSelected=false;
		this.order=-1;
	}
};

class Route {
	constructor(num,markers){
		this.num=num; /* The number of the Route */
		this.markers=markers; /* The list containing the markers of the Route */
		this.isOrdered=false; /* True if the route needs its markers to be found in a particular order, False else. */
	}
	addMarker(marker){
		this.markers.push(marker);
	}
}

var markersList=[];

var xhttp = new XMLHttpRequest();
xhttp.open("GET", "../requestTags.php", false);
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
        var response = xhttp.responseText;
        var resp = JSON.parse(response);
        for (i = 0; i < resp.length; i++)
        {
            var deg_nb = Number(resp[i].LatDeg)
            var ladir = "N";
            var lodir = "E";
            if (deg_nb < 0)
            {
                ladir = "S";
            }
            var long_nb = Number(resp[i].LongDeg);
            if (long_nb < 0)
            {
                lodir = "W";
            }
            markersList.push(new Marker(ladir, resp[i].LatDeg, resp[i].LatMin, resp[i].LatSec,
                lodir, resp[i].LongDeg, resp[i].LongMin, resp[i].LongSec, 1, resp[i].ID));
        }
        console.log(markersList);
    }
};
xhttp.send();

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
		if(!routesList[chosenRouteNum-1].markers.includes(marker)){
			if(routesList[chosenRouteNum-1].isOrdered){
				marker.order=routesList[chosenRouteNum-1].markers.length+1;
				console.log(marker.order);
			}
			addMarkerInRoute(chosenRouteNum,marker);
			//markerElt.style.display="none";		///// DECOMMENTER POUR QUE LES BALISES CLIQUEES DISPARAISSENT /////
		}
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
	var routeNameBlockElt=document.createElement("div");
	routeNameBlockElt.style.display="flex";
	routeNameBlockElt.style.flexDirection="row";
	var routeNameElt=document.createElement("div");
	routeNameElt.setAttribute("class","routeNameElt");
	routeNameElt.style.backgroundColor=colorsList[num-1];
	routeNameElt.textContent="Parcours n°"+String(num);
	routeNameBlockElt.appendChild(routeNameElt);
	routeContainerElt.appendChild(routeNameBlockElt);
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
	newMarker.textContent=coords;
	newMarker.addEventListener("click",function(){
		routesList[num-1].markers.splice(routesList[num-1].markers.indexOf(marker),1)
		this.style.display="none";
	});
	document.getElementById("routeContainer"+String(num)).appendChild(newMarker);
}

var validRoutesBtn=document.getElementById("validRoutes");
validRoutesBtn.addEventListener("click", function() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "../addRoute.php", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.onreadystatechange = function() {
        console.log(this.responseText);
    }
    xhttp.send("data=" + JSON.stringify(routesList) + "&");
});

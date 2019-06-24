/*List which contains the states of the differents markers of the race.
  -1 : out of service marker, red.
  0 : not found marker, white.
  1 : found marker, green.
*/
var listMarkers=[1,0,1,0,0,0,-1,0,0,1,1,0,0,-1,0,0,1,0,0,0,-1,1,0];

/* Test value for the number of a marker that we supposed to be just found. */
var numMarker=17;
document.getElementById("numMarker").textContent=numMarker;

/* Creation of the grid representing all the markers*/
var grid=document.getElementById("gridMarkers");
grid.style.width=String(5*(54+2*2)+5*2*5+2*10 - 5)+"px";
grid.style.backgroundColor="lightblue";
grid.style.borderStyle="solid";
grid.style.borderWidth="4px";
grid.style.borderColor="black";
grid.style.borderRadius="10px";
grid.style.padding="10px";
grid.style.alignContent="center";

function createMarkerElt(k){
	var markerElt=document.createElement("div");
	markerElt.style.borderStyle="solid";
	markerElt.style.borderWidth="3px";
	markerElt.style.borderRadius="4px";
	markerElt.style.margin="5px";
	var num=document.createElement("div");
	num.style.fontFamily="Sans Serif";
	num.style.fontWeight="bold";
	num.style.height="15px";
	num.style.width="50px";
	num.style.backgroundColor="white";
	num.style.textAlign="center";
	num.style.borderBottom="2px";
	num.style.borderBottomStyle="solid";
	num.style.padding="2px";
	num.style.paddingBottom="4px";
	num.textContent=k+1;
	markerElt.appendChild(num);
	var colorBloc=document.createElement("div");
	colorBloc.style.height="50px";
	colorBloc.style.width="54px";
	markerElt.appendChild(colorBloc);
	if(listMarkers[k]==-1)
		colorBloc.style.backgroundColor="red";
	else if(listMarkers[k]==0)
		colorBloc.style.backgroundColor="white";
	else if(listMarkers[k]==1)
		colorBloc.style.backgroundColor="green";
	return markerElt
}

function createGrid(){
	/* Step 1 : full lines of 5 markers. */
	var len=listMarkers.length;
	var nbFullLines=(len-len%5)/5;
	var k=0;
	for(i=0; i<nbFullLines; i++){
		var line=document.createElement("div");
		line.style.display="flex";
		line.style.display="row";
		for(j=0; j<5; j++){
			var marker=createMarkerElt(k);
			line.appendChild(marker);
			k++;
		}
		grid.appendChild(line);
	}
	/* Step 2 : last line, <5 markers */
	var lastLine=document.createElement("div");
	lastLine.style.display="flex";
	lastLine.style.display="row";
	while(k<len){
		var marker=createMarkerElt(k);
		lastLine.appendChild(marker);
		k++;
	}
	grid.appendChild(lastLine);
}
createGrid();

/*List which contains the states of the differents markers of the race.
  -1 : out of service marker, dark grey.
  0 : not found marker, white.
  1 : found marker, blue.
*/
var listMarkers=[1,0,1,0,0,0,-1,0,0,1,1,0,0,-1,0,0,1,0,0,0,-1,1,0];

/*List which allows to check if a found marker is correct or no.
  -1 : not found or out of service marker, dark grey.
  0 : found but incorrect marker, red.
  1 : found and correct marker, green.
*/
var validationList=[1,-1,1,-1,-1,-1,-1,-1,-1,0,1,-1,-1,-1,-1,-1,0,-1,-1,-1,-1,1,-1];

/* Test value for the number of a marker that we supposed to be just found. */
var numMarker=17;
document.getElementById("numMarker").textContent=numMarker;


/* Creation of the legend */
function createLegendElt(color,description){
	var legendElt=document.createElement("div");
	legendElt.setAttribute("class","legendElt");
	legendElt.style.display="flex";
	legendElt.style.flexDirection="row";
	var legendColor=document.createElement("div");
	legendColor.setAttribute("class","legendColor");
	legendColor.style.backgroundColor=color;
	legendElt.appendChild(legendColor);
	var legendText=document.createElement("span");
	legendText.setAttribute("class","legendText");
	legendText.textContent=description;
	legendElt.appendChild(legendText);
	document.getElementById("legend").appendChild(legendElt);
}
createLegendElt("white","Balise non trouvée");
createLegendElt("blue","Balise trouvée");
createLegendElt("rgb(80,80,80)","Balise hors d'usage");


/* Creation of the grid representing all the markers*/
var grid=document.getElementById("gridMarkers");
grid.style.width=String(5*(54+2*2)+5*2*5+2*10 - 5)+"px";
grid.style.backgroundColor="white";
grid.style.borderStyle="solid";
grid.style.borderWidth="3px";
grid.style.borderColor="black";
grid.style.borderRadius="10px";
grid.style.padding="0px";
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
	colorBloc.setAttribute("id","colorBloc"+String(k+1));
	colorBloc.style.height="50px";
	colorBloc.style.width="54px";
	markerElt.appendChild(colorBloc);
	if(listMarkers[k]==-1)
		colorBloc.style.backgroundColor="rgb(80,80,80)";
	else if(listMarkers[k]==0)
		colorBloc.style.backgroundColor="white";
	else if(listMarkers[k]==1)
		colorBloc.style.backgroundColor="blue";
	return markerElt
}

function createGrid(){
	/* Step 0 : grid label */
	var label=document.createElement("div");
	label.textContent="Votre progression";
	label.style.textAlign="center";
	label.style.fontFamily="Sans Serif";
	label.style.fontSize="20px";
	label.style.fontWeight="bold";
	label.style.paddingTop="5px";
	label.style.paddingBottom="5px";
	label.style.marginBottom="5px";
	label.style.borderBottomStyle="solid";
	label.style.borderBottomWidth="3px";
	label.style.borderBottomColor="black";
	grid.appendChild(label);
	/* Step 1 : full lines of 5 markers. */
	var len=listMarkers.length;
	var nbFullLines=(len-len%5)/5;
	var k=0;
	for(i=0; i<nbFullLines; i++){
		var line=document.createElement("div");
		line.style.display="flex";
		line.style.display="row";
		line.style.marginLeft="3px";
		line.style.marginRight="5px";
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
	lastLine.style.marginLeft="3px";
	lastLine.style.marginRight="5px";
	lastLine.style.marginBottom="5px";
	while(k<len){
		var marker=createMarkerElt(k);
		lastLine.appendChild(marker);
		k++;
	}
	grid.appendChild(lastLine);
}
createGrid();

var validBtn=document.getElementById("validBtn");
validBtn.addEventListener("click",function(){
	/* Step 1 : legend update */
	var legend=document.getElementById("legend");
	legend.innerHTML="";
	/*var legendEltList=document.getElementsByClassName("legendElt");
	var len=legendEltList.length;
	console.log(len);
	console.log(legendEltList);
	for(var j=0; j<len ; j++) {
		console.log(j);
		console.log(legendEltList[0]);
		legend.removeChild(legendEltList[0]);
	}*/
	createLegendElt("green","Balise correcte");
	createLegendElt("red","Balise incorrecte");
	createLegendElt("rgb(80,80,80)","Balise non trouvée ou hors d'usage");
	/* Step 2 : markers color update */
	for(var k=0; k<validationList.length; k++){
		console.log("##############################");
		var markerToValid=document.getElementById("colorBloc"+String(k+1));
		console.log("colorBloc"+String(k+1));
		console.log(markerToValid);
		console.log(validationList[k]);
		if(validationList[k]==-1) {console.log("GREY!"); document.getElementById("colorBloc"+String(k+1)).style.backgroundColor="rgb(80,80,80)";}
		else if(validationList[k]==0) {console.log("RED!"); markerToValid.style.backgroundColor="red";}
		else if(validationList[k]==1) {console.log("GREEN!"); markerToValid.style.backgroundColor="green";}
	}
});

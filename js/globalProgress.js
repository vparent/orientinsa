var nbMarkers=23;
var grid=document.getElementById("progressGrid");

class Pupil {
	constructor(firstname,lastname,foundMarkers){
		this.firstname=firstname; //String : the firstname of the pupil
		this.lastname=lastname; //String : the lastname of the pupil
		this.foundMarkers=foundMarkers; //List : all the markers the pupil has found 
	}
	addMarker(k){
		//When the pupil discovered the k-th marker
		this.foundMarkers.push(k);
	}
}
//Tests pupils
var pupilsList=[];
const Quentin = new Pupil("Quentin","Couturier",[1,12,5]);
pupilsList.push(Quentin);
const Boris = new Pupil("Boris","Resch",[17,21]);
pupilsList.push(Boris);
const Vincent = new Pupil("Vincent","Parent",[13,14,8,20]);
pupilsList.push(Vincent);
const Antonin = new Pupil("Antonin","Chauvet",[1,3,7,15,22]);
pupilsList.push(Antonin);
const Anthony = new Pupil("Anthony","Carado",[11,5,8,17,21]);
pupilsList.push(Anthony);
const Minh = new Pupil("The Minh","Bui",[21,13,9,5,16]);
pupilsList.push(Minh);

function createLabel(pupil){
	var label = document.createElement("span");
	label.textContent=pupil.lastname+"\n"+pupil.firstname;
	label.style.height="40px";
	label.style.width="100px";
	label.style.fontFamily="Sans Serif";
	label.style.fontSize="16px";
	label.style.borderStyle="solid";
	label.style.borderColor="black";
	label.style.borderWidth="1px";
	label.style.borderRadius="5px";
	label.style.marginRight="3px";
	label.style.padding="6px";
	return label;
}

function createMarker(){
	var marker = document.createElement("div");
	marker.style.width="20px";
	marker.style.height="20px";
	marker.style.borderStyle="solid";
	marker.style.borderColor="black";
	marker.style.borderWidth="1px";
	marker.style.borderRadius="3px";
	marker.style.backgroundColor="white";
	marker.style.margin="1px";
	marker.style.paddingTop="4px";
	marker.style.fontSize="12px";
	marker.style.textAlign="center";
	return marker;
}

function createPupilLine(pupil,a){
	var pupilLine=document.createElement("div");
	pupilLine.style.display="flex";
	pupilLine.style.flexDirection="row";
	/*if(a==1){
		pupilLine.style.marginTop="2px";
	}
	if(a==2){
		pupilLine.style.marginBottom="2px";
	}*/
	return pupilLine;
}

function createGrid() {
	var lenFirstLine = ((nbMarkers-nbMarkers%2)/2)+1		/* =nbMarkers//2 +1 */
	for(var i=0; i<pupilsList.length ; i++) {
		var blockPupil=document.createElement("div");
		blockPupil.style.display="flex";
		blockPupil.style.flexDirection="row";
		blockPupil.style.marginTop="10px";	
		blockPupil.style.marginBottom="10px";
		var lines=document.createElement("div");
		lines.style.display="flex";
		lines.style.flexDirection="column";
		var pupil=pupilsList[i];
		var pupilLine1=createPupilLine(pupil,1);
		var pupilLine2=createPupilLine(pupil,2);
		for(var j=0; j<nbMarkers ; j++){
			var marker=createMarker();
			marker.textContent=String(j+1);
			if(pupil.foundMarkers.includes(j+1)){
				marker.style.backgroundColor="green";
				marker.style.color="white";
			}
			marker.setAttribute("id",String(pupil.firstname)+String(j+1));
			if(j<lenFirstLine){
				pupilLine1.appendChild(marker);
			} else {
				pupilLine2.appendChild(marker);
			}
		}
		lines.appendChild(pupilLine1);
		lines.appendChild(pupilLine2);
		blockPupil.appendChild(createLabel(pupil));
		blockPupil.append(lines);
		grid.appendChild(blockPupil);
	}
}

createGrid();

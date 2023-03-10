

//Constantes
const divDelete= document.querySelector("#deleteTarea");
const checkSoundDelte= document.querySelector("#checkSoundDelete");





divDelete.addEventListener("dragover", sobreEliminar);
divDelete.addEventListener("drop", soltarEliminar);

function sobreEliminar(e){
    e.preventDefault();
}

function soltarEliminar(){
    cardSeleccionada.remove();
    if(checkSoundDelte.checked){
        let audio= new Audio("./audio/delete.mp3");
        audio.play();
    }

}


divDelete.addEventListener("mouseover", function(){
    divDelete.childNodes[1].style.display="none";
    divDelete.childNodes[3].style.display="inline";
});


divDelete.addEventListener("mouseout", function(){
    divDelete.childNodes[1].style.display="inline";
    divDelete.childNodes[3].style.display="none";
});




/*******************
 * DRAG AND DROP
 *******************/

var tareas= document.querySelectorAll(".tareas");
var card= document.querySelectorAll(".card");
var cardSeleccionada=null;
var tareaElegida=null;


for(let i=0;i<tareas.length;i++){
    tareas[i].addEventListener("dragover", dragover);
    tareas[i].addEventListener("drop", drop);
}

for(let i=0;i<card.length;i++){
    card[i].addEventListener("drag", drag);
    card[i].draggable=true;
}
    
    

function drag(e){
    cardSeleccionada= e.toElement;
}

function dragover(e){
    e.preventDefault();
}

function drop(e){
    tareaElegida= e.toElement;
    tareaElegida.appendChild(cardSeleccionada);
    cardSeleccionada=null;
}








var cursorY=0;


//Constantes
const divDelete= document.querySelector("#deleteTarea");
const checkSoundDelte= document.querySelector("#checkSoundDelete");
const btnNewTask= document.querySelector("#newTask");


/**
 * Añande eventos
 **/
divDelete.addEventListener("dragover", sobreEliminar); //Evento cuando se pone encima el div para eliminar
divDelete.addEventListener("drop", soltarEliminar); //Evento cuado se suelta el div para eliminar
divDelete.addEventListener("mouseover", function(){ //Evento que cambia la papelera
    divDelete.childNodes[1].style.display="none";
    divDelete.childNodes[3].style.display="inline";
});

divDelete.addEventListener("mouseout", function(){ //Evento que cambia la papelera
    divDelete.childNodes[1].style.display="inline";
    divDelete.childNodes[3].style.display="none";
});










/**
 * Función evitiar el dragover
 * @param {*} e 
 */
function sobreEliminar(e){
    e.preventDefault();
}

/**
 * FUnción para soltar sobre la papelera
 */
function soltarEliminar(){
    cardSeleccionada.remove();
    if(checkSoundDelte.checked){
        let audio= new Audio("./audio/delete.mp3");
        audio.play();
    }
}



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
    e.preventDefault();
    tareaElegida= e.toElement;
    // tareaElegida.appendChild(cardSeleccionada);
    cursorY= event.clientY;
    let childrens = tareaElegida.children;

    if(childrens.length>=2){
        for(let i=0;i<childrens.length;i++){
            let child= childrens[i];
            let posChild= child.getBoundingClientRect().top;
    
            if (cursorY < posChild) {
                tareaElegida.insertBefore(cardSeleccionada, child);
                return;
            }
            else
                tareaElegida.appendChild(cardSeleccionada, child);
        }
    }
    else
        tareaElegida.appendChild(cardSeleccionada);

    cardSeleccionada=null;
}




/**
 * Crea una card
 */





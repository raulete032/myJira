
/**
 * LIBRERÍA DE FUNCIONES
 */


/**
 * Función que crea un nodo y lo devuelve
 * @param {String} tipo -> El tipo de nodo a crear
 * @param {String} txt -> Texto que llevará, en su caso, el nodo
 * @returns -> El nodo creado
 */
function creaNodo(tipo, txt) {

    if (txt == undefined)
        return document.createElement(tipo);
    else {
        let nodo = document.createElement(tipo);
        let texto = document.createTextNode(txt);

        nodo.appendChild(texto);
        return nodo;
    }
}

/**
 * Función que inserta un nodo después de otro
 * @param {*} nodo -> El nodo a insertar
 * @param {*} nodoRef -> El nodo referencia
 */
function insertAfter(nodo, nodoRef) {

    if (nodoRef.nextSibling)
        nodoRef.parentNode.insertBefore(nodo, nodoRef.nextSibling);
    else
        nodoRef.parentNode.appendChild(nodo);

}



/**
 * Función que crea una cookie
 * @param {*} strg -> Nombre de la cookie
 * @param {*} value -> Valor de la cookie
 * @param {*} expira -> Momento en el que expira la cookie
 */
function creaCookie(strg, value, expira) {

    if (expira == undefined)
        document.cookie = strg + "=" + value;
    else
        document.cookie = strg + "=" + value + ";expires=" + expira;
}


/**
 * Función que añade horas, minutos y segundos a la hora actual y devuelve
 * dicha hora en formato para utilizarlo para crear una cookie
 * @param {*} h -> Horas
 * @param {*} m -> Minutos
 * @param {*} s -> Segundos
 * @returns -> La nueva hora
 */
function expiraEn(h, m, s) {

    let ahora = new Date();

    ahora.setHours(ahora.getHours() + h);
    ahora.setMinutes(ahora.getMinutes() + m);
    ahora.setSeconds(ahora.getSeconds() + s);
    return ahora.toUTCString();
}


/**
 * Función que comprueba si una cookie existe.
 * En caso de que exista, devuelve su valor, en caso contrario
 * devuelve false
 * @param {*} strg -> Nombre de la cookie
 * @returns -> Valor de la cookie o false
 */
function dameCookie(strg) {

    if (document.cookie != "") { //Compruebo si hay cookies

        let arrayCookies = document.cookie.split(";"); //cada cookie en un "hueco" del array

        for (let i in arrayCookies) {

            if (arrayCookies[i].match(strg)) { //si ese hueco tiene la palabra que llega como parámetro entra

                let encontrada = arrayCookies[i].split("="); //separo la cookie por el = (tengo el nombre de la cookie y "valor")
                let value = encontrada[1].trim(); //me quedo con el valor (le quito los espacios en blanco);
                return value; //lo siento Rosi :( también me duele a mi ese return
            }
        }
        return false;
    }
    return false;
}


function divideArrayEnArrays(array, valoresXfragmento) {

    let newArray = [];
    let miniArray = [];
    let cont = 0;
    for (let i = 0; i < array.length; i++) {

        cont++;
        miniArray.push(array[i]);

        if (cont % valoresXfragmento == 0) {
            newArray.push(miniArray);
            miniArray = [];
        }
    }

    if (miniArray.length > 0) //si quedó algo antes de que volviera a ser multiplo de 4
        newArray.push(miniArray);


    return newArray;
}





/**
 * Función que añade la row al title del modal que se le pasa como 
 * parámetro
 */
function modalTitle(idTitle, row){
    document.getElementById(idTitle).appendChild(row);
}

/**
 * Función que añade la row al body del modal que se le pasa como 
 * parámetro
 */
function modalBody(idBody, row){
    document.getElementById(idBody).appendChild(row);
}




/**
 * Función que rellean un select con las options
 * @param {*} idSelect 
 * @param {*} data 
 */
function rellenaSelect(idSelect, data){

    let select= document.getElementById(idSelect);
    for(let i=0;i<data.length;i++){
        let opt= creaNodo("option", data[i].nombre);
            opt.value= data[i].id;
        select.appendChild(opt);
    }
}

/**
 * Función que vacía un select (salvo la primera opción)
 * @param {*} idSelect 
 */
function vaciaSelect(idSelect){
    let select= document.getElementById(idSelect);

    while(select.options.length!=1 && select.options.length!=0)
        select.options[1].remove();
}


/**
 * Función que selecciona una option de un select en base al value que se le pasa
 * @param {*} idSelect 
 * @param {*} value 
 */
function seleccionaSelect(idSelect, value){

    let select= document.getElementById(idSelect);
    let options= select.options;
    let sw=true;
    for(let i=0; i<options.length && sw; i++){
        if(options[i].value==value){
            options[i].selected=true;
            sw=false;
        }
    }
}



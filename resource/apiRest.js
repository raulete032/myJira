
/**
 * En este archivo irán todas las llamadas a la API
 */

/* Generales */
function API_autorization(username, token) {

    let obj={
            controlador:"Token",
            metodo:"compruebaToken",
            user: username,
            token: token
    }

    let headers = new Headers();
        headers.append("Content-type", "application/json");
    return new Promise(function(resolve, reject){
        fetch(API_url(),{
            method: "POST",
            headers: headers,
            body: JSON.stringify(obj)
        })
        .then(function(resp){
            if(resp.ok)
                resp.json()
                    .then(function(data){
                        resolve({datos: data})
                    })
                    .catch(function(er){
                        console.error("ERROR: " + er);
                    })
        })
        .catch(function(er){
            reject({error: er})
        })
    })

    
}

function API_url() {
    var url = window.location.origin+"/server/public/";
    return url;
}


function llamada_fetch(obj, method, headers){    

    return new Promise(function(resolve, reject){
        fetch(API_url(), {
            method: method,
            headers: headers,
            body: JSON.stringify(obj)
        })
        .then(function(resp){
            if(resp.ok)
                resp.json()
                    .then(function(data){
                       resolve({datos: data})
                    })
                    .catch(function(er){
                        console.error("ERROR: " + er);
                    })
        })
        .catch(function(er){
           reject({error: er})
        })
    })
    
}


function API_llamadaArchivo(token, obj, method = 'POST', headers, controlador, metodo) {
    return new Promise(function(resolve, reject){
        fetch(API_url()+controlador+"/"+metodo, {
            method: method,
            headers: headers,
            body: JSON.stringify(obj)
        })
        .then(function(resp){
            if(resp.ok)
                resp.blob()
                    .then(function(data){
                        resolve(data)
                    })                
        })
        .catch(function(er){
            reject({error: er})
        })
    })
}


function API_ComprobarToken(token) {
    return new Promise(function (resolve, reject) {     
        var url = API_url();
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url + "Token/comprobarToken", true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        xhr.onload = function () {
            //generales.desbloquear();
            
            if (this.status >= 200 && this.status < 300) {
                resolve(true);
            } else {
                reject(false);
            }
        };
        xhr.onerror = function () {
            //generales.desbloquear();
            reject(false);
        };
        xhr.send();
        //generales.bloquear();
    });
}


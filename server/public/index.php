<?php
include_once "../cargaClases.php";



/**
 * A este archivo me llegarán las peticiones del index.html/index.js
 */


$recibido= file_get_contents('php://input'); //aquí tengo lo que me llega del body del FETCH

$recibido= json_decode($recibido);


$db= (new DatabaseConector())->getConnection();


switch($recibido->controlador){

    case "Acceso": $controller= new AccesoController($recibido->metodo, $db, "POST");
        break;
    case "Categorias": $controller= new CategoriasController($recibido->metodo, $db, "POST");
        break;
    case "Comidas": $controller= new ComidasController($recibido->metodo, $db, "POST");
        break;
    case "Salsas": $controller= new SalsasController($recibido->metodo, $db, "POST");
        break;  
    case "Token": $controller= new TokenController($recibido->metodo, $db, "POST");
        break;
    case "Usuarios": $controller= new UsuariosController($recibido->metodo, $db, "POST");
        break;
    
}


$controller->processRequest();
<?php

include_once RUTABASE."/cargaClases.php";
include_once RUTABASE."/funciones.php";


class Usuarios{

    //Variables de instancia
    public $modelo;
    public $db;
    public $error;

    function __construct($db=null){

        $this->modelo= new UsuariosModel();
        $this->error="";

        if(is_null($db))
            $this->db= (new DatabaseConector())->getConnection();
        else
            $this->db= $db;
    }

    /**
     * Función que comprueba en la BDD si el usuario 
     * y la contraseña son correctas
     */
    function compruebaUsuario($where){

        $sql= "SELECT *
                FROM usuarios
                WHERE " . $where;

        $consulta= mysqli_query($this->db, $sql);

        return obtenerResultadoConsulta($consulta);
    }

    /**
     * Función que cambia la contraseña del usuario
     */
    function cambiaClaveUsuario($pass){

        $sql= "UPDATE usuarios
                    SET pass = md5('".$pass."');";
        
        $actualiza= mysqli_query($this->db, $sql);

        return $actualiza;
    }
}
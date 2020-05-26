var presentacion = 1;
var us;
muestra_presentacion(presentacion);

function add(numero){
    switch (this.presentacion) {
        case 1:
        {
            this.us = new usuario();
            us.add_password(numero);
        }
        default:
            break;
    }
}


function ok(){
    switch (this.presentacion) {
    case 1:
    {
        this.us = new usuario();
        this.us.login();
        break;
    }
    case 5:
    {
        if (this.us.monto_10())
        {
            muestra_presentacion(6);
        }
        else{
            alert ("DEBE SER MULTIPLO DE 10")
        }
        
        break;
    }
    default:
        break;
    }
}

function cancelar()
{
    this.us = null;
    muestra_presentacion(1);
}

function borrar()
{
    switch (this.presentacion) {
    case 1:
    {
        var elemento = document.getElementById("contrasena");
        elemento.value = "";
    }
    case 5:
    {
        var elemento = document.getElementById("monto_10");
        elemento.value = 0;
    }
    default:
        break;
}

}

function btn_1 ()
{
    switch (this.presentacion) {
    case 2:
    { 
        muestra_presentacion(3);
        break;
    }
    case 3:
    { 
        muestra_presentacion(4);
        break;
    }
    default:
        break;
    } 
}

function btn_6 (){
    switch (this.presentacion) {
        case 5:
        { 
            
            if (this.us.monto_10())
            {
                muestra_presentacion(6);
            }
            else{
                alert ("DEBE SER MULTIPLO DE 10")
            }
            
            break;
        }
        case 6:
            {
                muestra_presentacion(7);
            }
        
    }
}

function btn_7(){
    switch (this.presentacion) {
        case 4:
        { 
            muestra_presentacion(5);
            break;
        }  
    }
}

function btn_8()
{

}


function muestra_presentacion(numero){
    document.getElementById("presentacion_1").style.display="none";
    document.getElementById("presentacion_2").style.display="none";
    document.getElementById("presentacion_3").style.display="none";
    document.getElementById("presentacion_4").style.display="none";
    document.getElementById("presentacion_5").style.display="none"; 
    document.getElementById("presentacion_6").style.display="none";
    document.getElementById("presentacion_7").style.display="none";
    
    this.presentacion = numero;

    document.getElementById ("presentacion_" + this.presentacion).style.display = "block";
       
}

class usuario {
    password = "12345678";
    login(){
        var elemento = document.getElementById("contrasena");

        if (elemento.value.length==8){
            if (elemento.value == this.password){
            muestra_presentacion(2);
            }else{
                alert ("contraseña incorrecta");
            }
        }
        else{
            alert("Debe tener 8 digitos");
        }

        
    }

    add_password (numero){
        var elemento = document.getElementById("contrasena");
        elemento.value = elemento.value + numero;

    }

    monto_10 (){
        var monto = document.getElementById("monto_10").value;
        if (monto % 10 == 0){
            return true;
        }
        else {
            return false;
        }

    }
    
}
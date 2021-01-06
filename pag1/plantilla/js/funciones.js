var url = "php/json_funciones.php";
function validar_login(usuario, password){

    $.ajax({
        url:url,
        type: "POST",
        dataType: "json",
        async: true,
        data:{
            funcion:"validar_login",
            usuario:usuario,
            password: password
        },
        success:function (response){
            if (response["error"] == 0) {
                alertify.success("Credenciales correctas!!");
                window.location.href="home.php";
            }
            else
                alertify.error("Usuario y/o password incorrecto(s)");
            console.log(response);
        },
        error:function (data){
            console.log(data);
        }
    });

}


function alta_cliente(){

    $.ajax({
        url:url,
        type: "POST",
        dataType: "json",
        async: true,
        data: $("#AltaUsuario").serialize()+"&funcion=alta_cliente",
        success:function (response){
            if (response["error"] == 0) {
                alertify.success("Cliente dado de alta correctamente!!");
                console.log(response);
            }
            else{
                alertify.error("Ha ocurrido un error inesperado, intente despues");
                console.log(response);
            }

        },
        error:function (data){
            console.log(data);
        }
    });

}
function mostrarRegistro(id){
    document.location.assign("index.php?id="+id);
}

function mostrarResultados(letraEscogida){
    document.location.assign("index.php?letra="+letraEscogida);
}

function mostrarDatosIndividuales(){
    document.getElementById("contenedor").style.display = "none";
    document.getElementById("registro").style.display = "flex";
}

function ocultarTarjeton(){
    //recarga la página
    document.location.assign("index.php");
}

function abrirNuevoContacto(){
    document.getElementById("modal").style.display = "block";
}

function cerrarNuevoContacto(){
    document.getElementById("modal").style.display = "none";
}
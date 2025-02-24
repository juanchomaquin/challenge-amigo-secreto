// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // se declara una lista vacia


function agregarAmigo(){ //funcion para capturar los nombres


    if(document.getElementById('amigo').value === ""){ //si el elemento esta vacio entonces imprime una alerta

        alert("porfavor inserte un nombre")

    }else{ //sino entonces captura y guarda el nombre ingresado
    
    let ingresarNombre = document.getElementById('amigo').value; //guarda en una variable por el id de la caja

    amigos.push(ingresarNombre); //añade los nombres de la variable a la lista

     
    }

    document.querySelector('#amigo').value = ''; //limpia la caja

    console.log(amigos);

    return;

}

function recorrerLista() {

    
}




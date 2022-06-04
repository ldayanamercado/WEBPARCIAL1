
console.log("PRUEBA");
Mostrar();
var Lista = [];
var contenedor = 1;

function load() {
    document.getElementById("ListaProductos").innerHTML = "";
    if (localStorage.ListaProductos) {
        Lista = JSON.parse(localStorage.ListaProductos);
        Mostrar();
        
    }
    Clear();
}

function capturarDatos(){
    var codigo = document.getElementById("codigo").value;
    var producto = document.getElementById("producto").value;
    var precio = document.getElementById("precio").value;
    var cantidad = document.getElementById("cantidad").value;

    const Productos = {
        codigo:codigo,
        producto:producto,
        precio:precio,
        cantidad:cantidad
    }
   
   
    var ListaProductos = localStorage.getItem('ListaProductos')


    if(ListaProductos){
        ListaProductos =JSON.parse(ListaProductos);
    }else{
        ListaProductos = [];
    }
    
    if (contenedor == 1) {
        ListaProductos.push(Productos);
    } else {
        ListaProductos.splice(contenedor, 1, Productos);
    }

    

    localStorage.setItem("ListaProductos", JSON.stringify(ListaProductos));

    console.log(ListaProductos);

    Mostrar();

}

function Mostrar(){
    var ListaProductos = localStorage.getItem('ListaProductos');
    if(!ListaProductos){
        return false;
    }
    ListaProductos = JSON.parse(ListaProductos);
    var row = "";
    for(let i=0; i<ListaProductos.length; i++){

        const e = ListaProductos[i];
        row += '<tr>';
        row += '<td>' + (i+1) + '</td>';
        row += '<td>' + e.codigo + '</td>';
        row += '<td>' + e.producto + '</td>';
        row += '<td>' + e.precio + '</td>';
        row += '<td>' + e.cantidad + '</td>';
        row += '<td>' +'<div id="action"><button class="btn btn-warning" onclick="Editar(' + i + ')"><i class="fa-solid fa-pen-to-square"></i></button> </div>'+'</td>';
        row += '<td>' +'<div id="action"><button class="btn btn-danger" onclick="Eliminar(' + i + ')"><i class="fa-regular fa-trash-can"></i></button></div>'+'</td>';
        row += '</tr>';
    
    }

    var TablaProductos = document.getElementById('ListaProductos');
    TablaProductos.innerHTML = row;
}
function Eliminar(i) {
    
    var ListaProductos = localStorage.getItem('ListaProductos')
      Lista =JSON.parse(ListaProductos);
      Lista.splice(i, 1);

      localStorage.setItem("ListaProductos", JSON.stringify(Lista));
    console.log(Lista)
    Mostrar();

}
function Editar(i){ // falta

    contenedor = i;
    
    var ListaProductos = localStorage.getItem('ListaProductos')
    Lista =JSON.parse(ListaProductos);
    var UserObj = Lista[i];

    
    document.getElementById("codigo").value = UserObj.codigo;
    document.getElementById("producto").value = UserObj.producto;
    document.getElementById("precio").value = UserObj.precio;
    document.getElementById("cantidad").value = UserObj.cantidad;
    document.getElementById("submit").innerHTML = "Actualizar";

    
    // este metodo hasta el momento solo me pone los datos en las tablas en los input falta qaue edite
}




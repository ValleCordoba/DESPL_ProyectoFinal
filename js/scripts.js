var precioItem1;
var precioItem2;
var total;
var envio;
$(document).ready(function() {

    // INICIO nada mas cargar la página

    document.documentElement.setAttribute('lang', navigator.language);
    //Nos traemos el numero de items
    var count = $("#carrito").children().length;
    //Actualizamos el carrito
    $("#shopping-cart span").html(count);
    //Creamos una variable con el precio
    precioItem1 = 428;
    precioItem2 = 902;
    envio = 15;
    //obtenemos el total
    total = precioItem1 + precioItem2 + envio;
    //Añadimos en el div del precio el precio del item1
    $("#precioItem1").html("<br><b>Precio: </b>" + precioItem1 + "€");
    //Añadimos en el div del precio el precio del item2
    $("#precioItem2").html("<br><b>Precio: </b><span style='text-decoration:line-through;color:brown'>1000€</span> " + precioItem2 + "€");
    //Añadimos en el div del precio total
    $("#envio").html("<b>PRECIO ENVIO : " + envio + " €</b>");
    //Añadimos en el div del precio total
    $("#total").html("<b>PRECIO TOTAL : " + total + " €</b>");


    //FIN

    //Cuando eliminamos el item 1
    $("#borrarItem1").click(function() {

        $("#item1").remove();

        //Contamos cuantos hijos tiene para actualizar el numero del carrito
        var count = $("#carrito").children().length;
        //Actualizamos el carrito
        $("#shopping-cart span").html(count);
        total = total - precioItem1;
        //Si aun tenemos item actualizamos el total, sino mostramos mensaje
        if (count == 0) {
            $("#carrito").remove();
            $("#envio").remove();
            $("#total").html("<b>No hay productos en tu carrito</b>");
        } else {
            $("#total").html("<b>PRECIO TOTAL : " + total + " €</b>");
        }

    });

    //Similar al Item 1
    $("#borrarItem2").click(function() {

        $("#item2").remove();

        var count = $("#carrito").children().length;
        //Actualizamos el carrito
        $("#shopping-cart span").html(count);

        total = total - precioItem2;

        if (count == 0) {
            $("#carrito").remove();
            $("#envio").remove();
            $("#total").html("<b>No hay productos en tu carrito</b>");
        } else {
            $("#total").html("<b>PRECIO TOTAL : " + total + " €</b>");
        }
    });



});
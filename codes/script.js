// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Función de devolución de llamada para cambiar el color del botón
function cambiarColor() {
    var boton = document.getElementById('miBoton');
    boton.style.backgroundColor = getRandomColor();
}

// Obtener referencia al botón para asignación dinámica
var boton = document.getElementById('miBoton');

// Agregar evento de clic al botón utilizando asignación dinámica
boton.addEventListener('click', cambiarColor);

// Función de devolución de llamada para el evento con atributo HTML
function eventoConAtributo() {
    cambiarColor();
}

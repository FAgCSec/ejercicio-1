# Botón Cambiante

Este es un ejemplo de un botón en HTML que cambia de color cada vez que se hace clic en él. Se proporciona tanto el HTML como el código JavaScript necesario para lograr este efecto.

## Cómo iniciar

1. Descarga la carpeta "ejercicio 1" ahí dentro estan los archivos `index.html`, `styles.css` y `script.js`.
2. Abre `index.html` en un navegador web.

## Descripción del código

### Archivo `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Botón Cambiante</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <button id="miBoton" class="boton">Haz clic aquí</button>
    <script src="script.js"></script>
</body>
</html>
```

Este archivo HTML define la estructura básica de la página web. Contiene un botón con el ID `miBoton`, que tiene una clase CSS `boton`. También incluye enlaces a un archivo de estilos externo (`styles.css`) y un archivo de script JavaScript (`script.js`).

### Archivo `script.js`

```javascript
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
```

En este archivo JavaScript:
- `getRandomColor()` es una función que genera un color aleatorio en formato hexadecimal.
- `cambiarColor()` cambia el color de fondo del botón al color generado aleatoriamente por `getRandomColor()`.
- Se obtiene una referencia al botón con el ID `miBoton`.
- Se agrega un evento de clic al botón que llama a `cambiarColor()` cuando se hace clic en él.

### Archivo `styles.css`

```css
.boton {
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    color: white;
}

/* Estilo adicional para el botón */
#miBoton {
    background-color: #007bff; /* Color inicial */
}
```

Este archivo CSS define los estilos para el botón. La clase `.boton` establece el aspecto básico del botón, mientras que el selector `#miBoton` proporciona estilos adicionales específicamente para el botón con el ID `miBoton`, incluyendo su color de fondo inicial.

## Cómo puede ayudar este código a alguien más

Este código puede ser útil para alguien que esté aprendiendo a trabajar con eventos en JavaScript y cómo manipular el DOM para cambiar propiedades de elementos HTML. El ejemplo del botón cambiante ofrece una introducción práctica a estos conceptos, mostrando cómo responder a eventos del usuario y modificar dinámicamente la apariencia de los elementos de la página. Además, proporciona un ejemplo práctico de cómo separar el contenido (HTML), presentación (CSS) y comportamiento (JavaScript) en una página web, promoviendo buenas prácticas de desarrollo web.

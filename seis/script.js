document.addEventListener("DOMContentLoaded", function () {
    // Fecha de inicio de la relación (pon aquí la fecha de inicio)
    const fechaInicio = new Date('2023-10-06'); // Aunque es el 5 
    fechaInicio.setHours(0, 0, 0, 0); // Establecer hora en 0

    fetch('mensajes.json')
        .then(response => response.json())
        .then(data => {
            const fechaActual = new Date();
            fechaActual.setHours(0, 0, 0, 0); // Establecer hora en 0

            // Calculamos la diferencia de días entre la fecha actual y la fecha de inicio
            const diferenciaTiempo = fechaActual.getTime() - fechaInicio.getTime();
            const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 3600 * 24));

            // Mensaje de aniversario
            const mensajeAniversario = `Y oye, feliz aniversario de ${diferenciaDias} días:)`;

            // Buscamos el mensaje correspondiente al día actual en el JSON
            const dia = String(fechaActual.getDate()).padStart(2, '0');
            const mes = String(fechaActual.getMonth() + 1).padStart(2, '0');
            const claveFecha = `${mes}-${dia}`; // Formateamos la fecha
            const mensajeCumple = data[claveFecha] || "Te amo, mi bonita.";

            // Mostramos el mensaje de aniversario y el mensaje del día en la página
            const mensajeDiv = document.getElementById("mensaje");
            mensajeDiv.innerHTML = `<p>${mensajeCumple}</p><p>${mensajeAniversario}</p>`;
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });
}); 
function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.classList.contains("opened")) {
        sidebar.classList.remove("opened"); // Si el panel está abierto, remueve la clase "opened"
    } else {
        sidebar.classList.add("opened"); // Si el panel está cerrado, agrega la clase "opened"
    }
}

function mostrarHora() {
    var fecha = new Date();

    // Obtener día, mes y año
    var dia = fecha.getDate().toString().padStart(2, '0');
    var mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
    var año = fecha.getFullYear();

    // Obtener horas, minutos y segundos
    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();

    // Obtener am/pm
    var ampm = horas >= 12 ? 'pm' : 'am';

    // Convertir horas al formato de 12 horas
    horas = horas % 12;
    horas = horas ? horas : 12; // Las 12 en formato de 12 horas es 12, no 0

    // Formatear la hora
    var horaFormateada = horas.toString().padStart(2, '0') + ":" + minutos.toString().padStart(2, '0') + " " + ampm;

    // Actualizar el contenido del elemento HTML
    document.getElementById("fecha-sistema").textContent = dia + "/" + mes + "/" + año + " " + horaFormateada;
}

// Mostrar la hora inicial
mostrarHora();

// Actualizar la hora cada segundo
setInterval(mostrarHora, 1000);

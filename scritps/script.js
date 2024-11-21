function checkAccess() {
    const correctCode = "p.real"; // Aquí defines la clave correcta
    const inputCode = document.getElementById("access-code").value;

    if (inputCode === correctCode) {
        // Si la clave es correcta, mostramos el TV y ocultamos la caja de acceso
        document.getElementById("access-screen").style.display = "none";
        document.getElementById("tv-container").style.display = "block";
    } else {
        // Si la clave es incorrecta, mostramos un mensaje de error (opcional)
        alert("Clave incorrecta. Intenta de nuevo.");
    }
}

function checkAccess() {
    var accessCode = document.getElementById('access-code').value;
    if (accessCode === 'tuClave') {
        document.getElementById('access-screen').style.display = 'none'; // Oculta la caja de acceso
        document.getElementById('tv-container').style.display = 'flex'; // Muestra el televisor
    } else {
        alert('Clave incorrecta');
    }
}


// Función para cambiar el video en base al índice y reproducirlo en el televisor
function changeVideo(videoIndex) {
    const iframe = document.getElementById("video-frame");
    const videoUrl = videos[videoIndex];
    iframe.src = `${videoUrl}?autoplay=1`; // Cambia el video y lo inicia automáticamente
}

// Cargar la API de YouTube (opcional si no usas detección de estado)
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// Lista de URLs de los videos

const videos = [
    "https://www.youtube.com/embed/ROkOUS-7u2M",  // Video 1
    "https://www.youtube.com/embed/uTsSXtSMJxc",  // Video 2
    "https://www.youtube.com/embed/7V_xUsyUphU",  // Video 3
    "https://www.youtube.com/embed/Hv2Nej6UnCU",  // Video 4
    "https://www.youtube.com/embed/T-JgsLGvWDk"   // Video 5
];
// Función para ocultar el mensaje y mostrar el video después de unos segundos
setTimeout(function() {
    document.getElementById("welcomeMessage").style.display = "none"; // Ocultar mensaje
    document.getElementById("video").style.display = "block"; // Mostrar video
}, 5000); // Esperar 5 segundos (ajustable)
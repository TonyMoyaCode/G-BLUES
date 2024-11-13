// Lista de claves válidas
const validAccessCodes = [
    "p.real", "clave1", "clave2", "clave3", "clave4", "clave5", "clave6", "clave7", 
    "clave8", "clave9", "clave10", "clave11", "clave12", "clave13", "clave14", "clave15", 
    "clave16", "clave17", "clave18", "clave19", "clave20"
];


// Función para verificar la clave de acceso
function checkAccess() {
    const accessCode = document.getElementById("access-code").value;

    if (validAccessCodes.includes(accessCode)) {
        document.getElementById("access-screen").style.display = "none";
        document.getElementById("tv-container").style.display = "block";
    } else {
        alert("Clave incorrecta. Intenta de nuevo.");
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
        // Lista de claves válidas
        const validAccessCodes = [
            "p.real", "clave1", "clave2", "clave3", "clave4", "clave5", "clave6", "clave7", 
            "clave8", "clave9", "clave10", "clave11", "clave12", "clave13", "clave14", "clave15", 
            "clave16", "clave17", "clave18", "clave19", "clave20"
        ];
        // Función para verificar la clave de acceso
        function checkAccess() {
            const accessCode = document.getElementById("access-code").value;

            // Verificar si el código ingresado está en la lista de claves válidas
            if (validAccessCodes.includes(accessCode)) {
                // Si la clave es válida, ocultar la pantalla de acceso y mostrar el televisor retro
                document.getElementById("access-screen").style.display = "none";
                document.getElementById("tv-container").style.display = "block";
            } else {
                // Si la clave no es válida, mostrar un mensaje de error
                alert("Clave incorrecta. Intenta de nuevo.");
            }
        }
// Lista de URLs de los videos
const videos = [
    "https://www.youtube.com/embed/ROkOUS-7u2M", 
    "https://www.youtube.com/embed/uTsSXtSMJxc", 
    "https://www.youtube.com/embed/7V_xUsyUphU", 
    "https://www.youtube.com/embed/Hv2Nej6UnCU", 
    "https://www.youtube.com/embed/T-JgsLGvWDk"  
];


// Función para cambiar el video
function changeVideo(videoIndex) {
    const iframe = document.getElementById("tv-video");  // Obtenemos el iframe del video
    const videoUrl = videos[videoIndex - 1];  // Obtenemos la URL correspondiente del video

    // Actualizamos la URL del iframe
    iframe.src = videoUrl;
}

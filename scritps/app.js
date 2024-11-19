const app = Vue.createApp({
    data() {
        return {
            isPlaying: false,
            videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Reemplaza con tu URL
            screenMessage: "Por favor, enciende el televisor."
        };
    },
    methods: {
        togglePlay() {
            this.isPlaying = !this.isPlaying;
        },
        changeChannel() {
            const channels = [
                "https://www.youtube.com/embed/dQw4w9WgXcQ",
                "https://www.youtube.com/embed/3JZ_D3ELwOQ",
                "https://www.youtube.com/embed/L_jWHffIx5E"
            ];
            this.videoSrc = channels[Math.floor(Math.random() * channels.length)];
        }
    }
});

app.mount("#app");

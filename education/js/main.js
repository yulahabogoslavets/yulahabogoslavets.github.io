import VideoPlayer from "./modules/videoPlayer";

window.addEventListener('DOMContentLoaded', () => {
    const player = new VideoPlayer('.showup .play', '.overlay');
    player.play();
})
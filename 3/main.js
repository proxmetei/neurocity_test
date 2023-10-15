let videoPlayer = document.querySelector(".container__video-player");
videoPlayer.addEventListener('click', ()=>{
    videoPlayer.paused ? videoPlayer.play() : videoPlayer.pause();
})
videoPlayer.addEventListener('timeupdate', ()=>{
    let minutes = Math.floor(videoPlayer.currentTime / 60);
    let seconds = Math.floor(videoPlayer.currentTime - (minutes * 60));
    let miliseconds = Math.round((videoPlayer.currentTime - (minutes * 60)- seconds)*10000);
    document.querySelector('.container__time-span').textContent=String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0') + ':'
    + String(miliseconds).padStart(4, '0');
})
videoPlayer.addEventListener('ended', () => {
    videoPlayer.currentTime = 0;
    videoPlayer.pause();
})
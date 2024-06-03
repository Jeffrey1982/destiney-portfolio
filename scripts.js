document.addEventListener('DOMContentLoaded', function() {
    const videoContainer = document.querySelector('.video-container video');
    
    videoContainer.addEventListener('mouseenter', function() {
        videoContainer.play();
    });
    
    videoContainer.addEventListener('mouseleave', function() {
        videoContainer.pause();
        videoContainer.currentTime = 0; // Reset the video to the start
    });
});

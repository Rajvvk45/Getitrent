function openVideo(videoSrc) {
    let videoPlayer = document.getElementById('videoPlayer');
    let videoModal = document.getElementById('videoModal');

    videoPlayer.src = "videos/" + videoSrc;
    videoModal.style.display = 'block';
}

function closeVideo() {
    document.getElementById('videoModal').style.display = 'none';
}

function openInfoPage() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('infoPage').style.display = 'block';
}

function goBackHome() {
    document.getElementById('infoPage').style.display = 'none';
    document.getElementById('home').style.display = 'block';
}
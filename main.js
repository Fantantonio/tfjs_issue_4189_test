const tf = require('@tensorflow/tfjs');

const video = document.getElementById("webcam");
const canvas = document.getElementById("canvas");

var win = nw.Window.get();
win.showDevTools();

function loadWebcam() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
            video.srcObject = stream;
            video.play();
        });
    }
    else if (navigator.getUserMedia) { // Standard
        navigator.getUserMedia({ video: true }, function (stream) {
            video.src = stream;
            video.play();
        }, errBack);
    } else if (navigator.webkitGetUserMedia) { // WebKit-prefixed
        navigator.webkitGetUserMedia({ video: true }, function (stream) {
            video.src = window.webkitURL.createObjectURL(stream);
            video.play();
        }, errBack);
    } else if (navigator.mozGetUserMedia) { // Mozilla-prefixed
        navigator.mozGetUserMedia({ video: true }, function (stream) {
            video.srcObject = stream;
            video.play();
        }, errBack);
    } else {
        console.log("not able to open the webcam");
    }
}

// Wait till video is loaded
function waitVideoLoad() {
    return new Promise(videoStatus => {
        var interval = setInterval(() => {
            if (video.readyState >= 3) {
                console.log("out: " + video.readyState);
                clearInterval(interval);
                videoStatus(video.readyState);
            } else {
                console.log("wait: " + video.readyState);
            }
        }, 100);
    });
}

window.onload = async function () {
    loadWebcam();

    await waitVideoLoad();
    let ctx = canvas.getContext('2d');
    if (video instanceof HTMLVideoElement) {
        const input_tensor = tf.browser.fromPixels(video);
    } else {
        console.log("not an HTMLVideoElement");
    }
}

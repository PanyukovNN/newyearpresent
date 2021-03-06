var duration = 60 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 100 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 1000);

var mapScaled = false;

$(".map").on("click", function () {
    if (!mapScaled) {
        $(this).css("width", "290px")
            .css("bottom", "10px");
        mapScaled = true;
    } else {
        $(this).css("width", "150px")
            .css("bottom", "25px");
        mapScaled = false;
    }
})

$(document).ready(function() {
    $(document).snowfall({image: "img/2.png", minSize: 10, maxSize: 20, maxSpeed: 3, minSpeed: 1});
})
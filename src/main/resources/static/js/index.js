$(document).ready(function(){
    // $(document).snowfall({image :"img/2.png", minSize: 10, maxSize:20, maxSpeed: 3, minSpeed: 1});

    var imagesNumber = 12;

    var arr = [];
    for (var i = 0; i < imagesNumber; i++) {
        arr.push(i);
    }

    shuffle(arr)

    console.log(arr)

    var backstretchData = [];

    for (var i = 0; i < imagesNumber; i++) {
        backstretchData.push("img/wallpaper-" + arr[i] + ".jpg");
    }

    $(".main-image").backstretch(backstretchData, {duration: 6000, fade: 1500, fadeFirst: false});
});

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML =
            "<span class='timer-number'>" + t.days + "</span> д. " +
            "<span class='timer-number'>" + ('0' + t.hours).slice(-2) +   "</span> ч. " +
            "<span class='timer-number'>" + ('0' + t.minutes).slice(-2) + "</span> м. " +
            "<span class='timer-number'>" + ('0' + t.seconds).slice(-2) + "</span> сек.";

        // var wallpaperIndex = parseInt(new Date().getMinutes() / 6);
        // $(".main-image").css("background-image", "url(\"../img/wallpaper-" + wallpaperIndex + ".jpg\")");

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline="January 01 2021 00:30:00 GMT+0300";
var deadline = new Date(deadline);
initializeClock('countdown', deadline);

var present = $(".present");
var popup = $("#myPopup");
var blockAnimation = false;

present.on("click", function () {
    if (blockAnimation === false) {
        blockAnimation = true;

        document.documentElement.style.setProperty('--animate-duration', '1s');
        present.removeClass("animate__pulse");
        present.removeClass("animate__infinite");
        present.addClass("animate__tada");

        togglePopup();

        var returnPulseAnimation = function () {
            document.documentElement.style.setProperty('--animate-duration', '1.5s');
            present.addClass("animate__pulse");
            present.addClass("animate__infinite");
            present.removeClass("animate__tada");

            var finishAnimation = function() {
                blockAnimation = false;
            }

            setTimeout(togglePopup, 1000);
            setTimeout(finishAnimation, 2000);
        }

        setTimeout(returnPulseAnimation, 1000);
    }
});

function togglePopup() {
    if (popup.css("opacity") !== "0") {
        popup.css("opacity", "0");
    } else {
        popup.css("opacity", "0.9");
    }
}

document.documentElement.style.setProperty('--animate-duration', '1.5s');



var duration = 1 * 1000;
var animationEnd = Date.now() + duration;
var skew = 1;

function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
}

(function frame() {
    // var timeLeft = animationEnd - Date.now();
    var timeLeft = 1;
    var ticks = Math.max(200, 500);
    skew = Math.max(0.8, skew - 0.001);

    confetti({
        particleCount: 1,
        startVelocity: 0,
        ticks: ticks,
        gravity: 0.5,
        origin: {
            x: Math.random(),
            // since particles fall down, skew start toward the top
            y: (Math.random() * skew) - 0.2
        },
        colors: ['#ffffff'],
        shapes: ['circle'],
        scalar: randomInRange(0.4, 1)
    });

    if (timeLeft > 0) {
        requestAnimationFrame(frame);
    }
}());
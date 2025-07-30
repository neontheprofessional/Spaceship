var button = document.getElementById("play");
var audio = document.getElementById("player");

/*RANDOM NUMBER GENERATOR*/
function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}
// Update the image source

button.addEventListener("click", function () {
    if (audio.paused) {
        const playlist = ["./tunes/Something About Us.mp3", "./tunes/11 - Entre-deux.mp3", "./tunes/05 - Vacances.mp3"]
        audio.src = rand(playlist)
        audio.play();
        button.innerHTML = "DISCONNECT &#x23F8";

    } else {
        audio.pause();
        button.innerHTML = "LISTEN TO SPG-FM &#9658";
    }
});

//------------------------------------------------
/*
setInterval(function () {
    let bars = ["..........", ":.........", "::........", ":::.......", "::::......", ":::::.....","::::::....",":::::::...","::::::::..",":::::::::.","::::::::::",":.........",".:........","..:......."
    ]
    document.getElementById("tunes").innerHTML = rand(bars)
   
}, 1000);
*/
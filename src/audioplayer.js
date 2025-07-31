var button = document.getElementById("play");
var audio = document.getElementById("player");

/*RANDOM NUMBER GENERATOR*/
function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}
// -----------------------------------------------------
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
// -----------------------------------------------------


button.addEventListener("click", function () {
    if (audio.paused) {
        const playlist = [
            "./tunes/Something About Us.mp3",
            "./tunes/11 - Entre-deux.mp3",
            "./tunes/05 - Vacances.mp3",
            "./tunes/KAYTRANADA & Iman Omari - 2 The Music (feat. Iman Omari).mp3",
            "./tunes/MGMT - Alien Days.mp3",
            "./tunes/Outkast - E.T. (Extraterrestrial).mp3",
            "./tunes/Bryce Dessner, James McAlister, Nico Muhly & Sufjan Stevens - Pluto.mp3",
            "./tunes/Bryce Dessner, James McAlister, Nico Muhly & Sufjan Stevens - Venus.mp3",
            "./tunes/Gorillaz - Every Planet We Reach Is Dead.mp3",
            "./tunes/Joe Meek & the Blue Men - I Hear a New World.mp3"
        ]
        audio.src = rand(playlist)
        audio.play();
        button.innerHTML = "DISCONNECT &#x23F8";
        var message = "Now listening to SPG-FM, home of exactly 10 songs"
        fetch(`https:Brodcast.aether-tree.com/u/Kay/Music/${message}`);
        setCookie("reduceAmount", 2)
    } else {
        audio.pause();
        button.innerHTML = "LISTEN TO SPG-FM &#9658";
        var message = "Now listening to the silence of the Void"
        fetch(`https:Brodcast.aether-tree.com/u/Kay/Music/${message}`);
    }
    if (Number(getCookie("fuel")) < 10) {
        document.getElementById("play").disabled = true;
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
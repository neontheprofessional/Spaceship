
/*const time = new Date().getHours();
let timegreet = "";
if (time < 10) {
    timegreet = "morning";
} else if (time < 20) {
    timegreet = "afternoon";
} else {
    timegreet = "evening";
}
//-------------------------------

//------------------------------

const STNA = {
    "greeting": [`@SHIP good ${timegreet}`],
};
//-------------------------------

function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

//-------------------------------
//-------------------------------

const myForm = document.getElementById('form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission
    const nameValue = document.getElementById('input').value;
    const myElement = document.getElementById('radio');
    //CHECKING VALID MESSAGE//
    if (nameValue.includes("@")) {
        let newlog = "<br> <strong>\>SHIP</strong>: " + nameValue;
        myElement.innerHTML += newlog
        setTimeout(function () {
            myElement.innerHTML +=
                "<br>---[<strong>MESSAGE TRANSMITTED</strong>]---<br>"
        }, 1000);
    } else {
        setTimeout(function () {
            myElement.innerHTML += "<br>---[<strong>MESSAGE FAILURE: NO TARGET</strong>]---<br>";
        }, 1000);
    }
    //IF VALID MESSAGE//
    // Reply logic
    if (nameValue.includes("STNB")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNB</strong>: " + reply + "<br>";
        }, 5000);
    }
    if (nameValue.includes("STNA")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
    }
    if (nameValue.includes("STNC")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNC</strong>: " + reply + "<br>";
        }, 5000);
    }


    //------------------------------
    if (nameValue.includes("HNTR")) {
        fetch(`https://brodcast.aether-tree.com/Kay/Outbound/${nameValue}`)



    }
});
*/
function write(x, y) {
    try {
        fs.createWriteStream(y).write(x)
    } catch (error) {
        console.error(`Got an error trying to read the file: ${error.message}`);
    }
}
const time = new Date().getHours();
let timegreet = "";
if (time < 10) {
    timegreet = "morning";
} else if (time < 20) {
    timegreet = "afternoon";
} else {
    timegreet = "evening";
}
//-------------------------------

//------------------------------

const STNA = {
    "greeting": [`@SHIP good ${timegreet}`],
    "trade": [`@SHIP Sorry, I can't spare any`, `@SHIP Sure, I can do 5&#x2102; for a tank`],
    "tradeYes": [`('-')7`],
};
//-------------------------------

function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

//-------------------------------
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
//-------------------------------

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//-------------------------------


const myForm = document.getElementById('form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameinput = document.getElementById('input').value;
    var nameValue = nameinput.split("-")[0]
    var message = nameinput.split("-")[1]
    const myElement = document.getElementById('radio');
    //CHECKING VALID MESSAGE//

    /*
    if (nameValue.includes("@")) {
        fetch(`https:Brodcast.aether-tree.com/u/${nameValue}/Outbound/${message}`);
        let newlog = `<br> <strong>\>SHIP</strong>: ${nameValue}:// ${message}`;
        myElement.innerHTML += newlog
        setTimeout(function () {
            myElement.innerHTML +=
                "<br>---[<strong>MESSAGE TRANSMITTED</strong>]---<br>"
        }, 1000);
    */
    if (nameValue.includes("@")) {
        setTimeout(function () {
            let newlog = "<br> <strong>\>SHIP</strong>: " + nameValue + " " + message;
            myElement.innerHTML += newlog
            setTimeout(function () {
                myElement.innerHTML +=
                    "<br>---[<strong>MESSAGE TRANSMITTED</strong>]---<br>"
                var credits = getCookie("credits")
                var newCredits = credits - 1
                setCookie("credits", newCredits)
            }, 1000);
        }, 1000);
    } else {
        setTimeout(function () {
            myElement.innerHTML += "<br>---[<strong>MESSAGE FAILURE: NO TARGET</strong>]---<br>";
        }, 1000);
    }
    //IF VALID MESSAGE//
    // Reply logic
    if (nameValue.includes("STNA") && message.includes("hi")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
    }
    if (nameValue.includes("STNA") && message.includes("trade")) {
        setTimeout(function () {
            const reply = rand(STNA["trade"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
    }
    if (nameValue.includes("STNA") && message.includes("accept")) {
        setTimeout(function () {
            const reply = rand(STNA["tradeYes"]);
            myElement.innerHTML += "<br>\><strong>STNA</strong>: " + reply + "<br>";
        }, 5000);
    }

    if (nameValue.includes("STNB")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNB</strong>: " + reply + "<br>";
        }, 5000);
    }

    if (nameValue.includes("STNC")) {
        setTimeout(function () {
            const reply = rand(STNA["greeting"]);
            myElement.innerHTML += "<br>\><strong>STNC</strong>: " + reply + "<br>";
        }, 5000);
    }
    //------------------------------
    if (nameValue.includes("SEND")) {
        fetch(`https:Brodcast.aether-tree.com/u/Kay/Outbound/${message}`);
        let newlog = `<br> <strong>\>BROADCASTING</strong>: ${message}`;
        myElement.innerHTML += newlog

    }

    if (nameValue.includes("NAME")) {
        fetch(`https:Brodcast.aether-tree.com/u/Kay/Name/${message}`);
        let newlog = `<br> <strong>\>REASSIGNING CALLSIGN</strong>: ${message}`;
        myElement.innerHTML += newlog

    }
}
);

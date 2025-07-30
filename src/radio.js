
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

const myForm = document.getElementById('form');
myForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    const nameinput = document.getElementById('input').value;
    var nameValue = nameinput.split("-")[0]
    var message = nameinput.split("-")[1]
    const myElement = document.getElementById('radio');
    //CHECKING VALID MESSAGE//
    if (nameValue.includes("@")) {
        fetch(`https:Brodcast.aether-tree.com/u/${nameValue}/Outbound/${message}`);
        let newlog = `<br> <strong>\>SHIP</strong>: ${nameValue}:// ${message}`;
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
    if (nameValue.includes("SHIP")) {

    }
});

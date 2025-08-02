
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

            }, 1000);
        }, 1000);
    } else {
        setTimeout(function () {
            myElement.innerHTML += "<br>---[<strong>MESSAGE FAILURE: NO TARGET</strong>]---<br>";
        }, 1000);
    }
    //IF VALID MESSAGE//
    // Reply logic
    //------------------------------
    if (nameValue.includes("SEND")) {
        fetch(`https://broadcast.aether-tree.com/api/Kay/Outbound/${message}`);
        let newlog = `<br> <strong>\>BROADCASTING</strong>: ${message}`;
        myElement.innerHTML += newlog
    }

    if (nameValue.includes("NAME")) {
        fetch(`https://Broadcast.aether-tree.com/api/Kay/Name/${message}`);
        let newlog = `<br> <strong>\>REASSIGNING CALLSIGN</strong>: ${message}`;
        myElement.innerHTML += newlog
    }
}
);

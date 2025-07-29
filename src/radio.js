
import { sayHi } from './hunterchatWrite.js';
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
    if (nameValue.includes("SHIP")) {

        sayHi(nameValue); // Hello, John!



    }
});

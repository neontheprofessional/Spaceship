

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
//------------------------------------------------------

var button = document.getElementById("buy");
var newFuel = null;
button.addEventListener("click", function () {
    var fuel = getCookie("fuel")
    fuel = Number(fuel)
    if (fuel >= 100 || (fuel + 50) > 100) { newFuel = 100 }
    else {
        newFuel = Number(fuel) + 50
    }
    setCookie("fuel", newFuel)
    document.getElementById("radio").innerHTML += "<br>\><strong>SHIP SYSTEM</strong>: FUEL REFILLED: " + newFuel + "&#8461"


})





/*
var button = document.getElementById("spend");

button.addEventListener("click", function () {
    document.cookie = "spending=; expires=Thu, 18 Dec 2008 12:00:00 UTC path=/;";
    var spending = document.cookie
    document.getElementById("tester").innerHTML = "spending: " + spending

})
    */
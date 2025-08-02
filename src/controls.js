
//COOKIES
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
//+
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//------------------------------------------------------
//REFUELLER
var button = document.getElementById("refuel");
var newFuel = null;
button.addEventListener("click", function () {

    var fuelStores = getCookie("fuelStore")
    var fuel = Number(getCookie("fuel"))

    if (fuelStores < 50) {
        var credits = getCookie("credits")
        var newCredits = credits - 1
        setCookie("credits", newCredits)

    } else {
        var newFuelStores = fuelStores - 50
        setCookie("fuelStore", newFuelStores)
    }
    if (fuel >= 100 || (fuel + 50) > 100) { newFuel = 100 }
    else {
        newFuel = Number(fuel) + 50
    }
    setCookie("fuel", newFuel)
    document.getElementById("radio").innerHTML += "<br>\><strong>SHIP SYSTEM</strong>: FUEL REFILLED: " + 50 + "&#8461"


})

//------------------------------------------------------
//AUTOPILOT
var button2 = document.getElementById("autopilot");

button2.addEventListener("click", function () {

    const shipStatus = getCookie("status")
    if (shipStatus === "manual") {
        setCookie("status", "autopilot")
        document.getElementById("radio").innerHTML += "<br>---<strong>[&#9790;] CONTROLS SET TO AUTOPILOT [&#9789;]</strong>---"
        const message = "[SYSTEM SET TO AUTOPILOT]"
        setCookie("reduceAmount", 5)
        fetch(`https://Broadcast.aether-tree.com/api/Kay/Outbound/${message}`);

    }
    else if (shipStatus === "autopilot") {
        setCookie("status", "manual")
        document.getElementById("radio").innerHTML += "<br>---<strong>CONTROLS SET TO MANUAL</strong>---"
        const message = "[SYSTEM SET TO MANUAL - PILOT ONLINE]"
        fetch(`https://Broadcast.aether-tree.com/api/Kay/Outbound/${message}`);
    }

})



/*
var button = document.getElementById("spend");

button.addEventListener("click", function () {
    document.cookie = "spending=; expires=Thu, 18 Dec 2008 12:00:00 UTC path=/;";
    var spending = document.cookie
    document.getElementById("tester").innerHTML = "spending: " + spending

})
    */
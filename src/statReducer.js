

// Cookies
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
//RandArray
function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}
//-----------------------------------------

setInterval(reduceFuel, 600000);

function reduceFuel() {
    var fuel = Number(getCookie("fuel"))
    if (fuel > 0) {
        const reduceAmount = getCookie("reduceAmount")
        const newFuel = fuel - reduceAmount
        setCookie("fuel", newFuel)

    }
}
//-----------------------------------------

setInterval(reduceEngineHealth, 600000);

function reduceEngineHealth() {

    var engineHealth = Number(getCookie("engine"))
    if (engine > 0) {
        const newEngineHealth = engineHealth - 1
        setCookie("engine", newEngineHealth)

    }
}

//-----------------------------------------
//RandTimeAmount
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

const killTime = getRandomIntInclusive(86400000, 324000000)
setInterval(killSystems, killTime);

function killSystems() {

    const systems = ["navigation", "lifesupport", "communications"]
    const target = rand(systems)
    setCookie(target, "offline")

}
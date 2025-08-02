
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
//------------------------------------------------------------------

setInterval(checkSystems, 3600000);

function checkSystems() {
    setCookie("navigation", "online")
    setCookie("lifesupport", "online")
    setCookie("communications", "online")

    const nav = getCookie("navigation")
    const ls = getCookie("lifesupport")
    const comms = getCookie("communications")
    var shipStatus = null;

    if (nav === "online" && ls === "online" && comms === "online") {
        setCookie("shipstatus", "green");
        shipStatus = "System Green"
    }
    if ((nav !== "online" && ls === "online" && comms === "online") || (nav === "online" && ls !== "online" && comms === "online") || (nav === "online" && ls === "online" && comms !== "online")) {
        setCookie("shipstatus", "yellow");
        shipStatus = "Systems Yellow"
    }
    if ((nav !== "online" && ls !== "online" && comms === "online") || (nav === "online" && ls !== "online" && comms !== "online") || (nav !== "online" && ls === "online" && comms !== "online")) {
        setCookie("shipstatus", "red");
        shipStatus = "Systems Red"
    }
    //fetch(`https://Broadcast.aether-tree.com/login/Kay/123`);
    //fetch(`https://broadcast.aether-tree.com/update/Status/${shipStatus}`);

    fetch(`https://broadcast.aether-tree.com/api/Kay/Status/${shipStatus}`);
}


//--------------------------------------------------------------

setInterval(function () {
    fetch('./syslog.json')
        .then(response => response.json())
        .then(data => {
            const hydration = (data.WaterLog / 2000) * 100;
            const caffeination = (data.CaffeineLog / 200) * 100;
            const shipCreds = Number(getCookie("credits"))
            const credits = data.Credits + shipCreds
            const pilotStatus = getCookie("status")
            const shipStatus = getCookie("shipstatus")
            const fuelStore = Math.floor((Number(getCookie("fuelStore")) / 100) * 100)
            const fuel = Math.floor((Number(getCookie("fuel")) / 100) * 100)
            const engine = Number(getCookie("engine"))
            let waterBar = null;
            let caffeineBar = null;
            let fuelBar = null;
            let fuelStoreBar = null;
            let engineBar = null;

            // Hydration bar logic
            if (hydration === 0) waterBar = ` - ${waterBar}%`;
            if (hydration >= 10 && 20 >= hydration) waterBar = `| - ${hydration}% `;
            if (hydration >= 21 && 30 >= hydration) waterBar = `|| - ${hydration}% `;
            if (hydration >= 20 && 30 >= hydration) waterBar = `||| - ${hydration}% `;
            if (hydration >= 31 && 40 >= hydration) waterBar = `|||| - ${hydration}% `;
            if (hydration >= 41 && 50 >= hydration) waterBar = `||||| - ${hydration}% `;
            if (hydration >= 51 && 60 >= hydration) waterBar = `|||||| - ${hydration}% `;
            if (hydration >= 61 && 70 >= hydration) waterBar = `||||||| - ${hydration}% `;
            if (hydration >= 71 && 80 >= hydration) waterBar = `|||||||| - ${hydration}% `;
            if (hydration >= 81 && 90 >= hydration) waterBar = `||||||||| - ${hydration}% `;
            if (hydration >= 91 && 100 >= hydration) waterBar = `|||||||||| - ${hydration}% `;

            // Caffeination bar logic
            if (caffeination === 0) caffeineBar = ` - ${caffeination}% `;
            if (caffeination >= 10 && 20 >= caffeination) caffeineBar = `| - ${caffeination}% `;
            if (caffeination >= 21 && 30 >= caffeination) caffeineBar = `|| - ${caffeination}% `;
            if (caffeination >= 20 && 30 >= caffeination) caffeineBar = `||| - ${caffeination}% `;
            if (caffeination >= 31 && 40 >= caffeination) caffeineBar = `|||| - ${caffeination}% `;
            if (caffeination >= 41 && 50 >= caffeination) caffeineBar = `||||| - ${caffeination}% `;
            if (caffeination >= 51 && 60 >= caffeination) caffeineBar = `|||||| - ${caffeination}% `;
            if (caffeination >= 61 && 70 >= caffeination) caffeineBar = `||||||| - ${caffeination}% `;
            if (caffeination >= 71 && 80 >= caffeination) caffeineBar = `|||||||| - ${caffeination}% `;
            if (caffeination >= 81 && 90 >= caffeination) caffeineBar = `||||||||| - ${caffeination}% `;
            if (caffeination >= 101) caffeineBar = `|||||||||| - ${caffeination}% `;

            // fuel bar logic
            if (fuel === 0) fuelBar = ` - ${fuel}% `;
            if (fuel >= 10 && 20 >= fuel) fuelBar = `| - ${fuel}% `;
            if (fuel >= 21 && 30 >= fuel) fuelBar = `|| - ${fuel}% `;
            if (fuel >= 20 && 30 >= fuel) fuelBar = `||| - ${fuel}% `;
            if (fuel >= 31 && 40 >= fuel) fuelBar = `|||| - ${fuel}% `;
            if (fuel >= 41 && 50 >= fuel) fuelBar = `||||| - ${fuel}% `;
            if (fuel >= 51 && 60 >= fuel) fuelBar = `|||||| - ${fuel}% `;
            if (fuel >= 61 && 70 >= fuel) fuelBar = `||||||| - ${fuel}% `;
            if (fuel >= 71 && 80 >= fuel) fuelBar = `|||||||| - ${fuel}% `;
            if (fuel >= 81 && 90 >= fuel) fuelBar = `||||||||| - ${fuel}% `;
            if (fuel >= 91 && 100 >= fuel) fuelBar = `|||||||||| - ${fuel}% `;
            if (fuel >= 101) fuelBar = `|||||||||| - ${fuel}% `;


            // fuelStore bar logic
            if (fuelStore === 0) fuelStoreBar = ` - ${fuelStore}% `;
            if (fuelStore >= 10 && 20 >= fuelStore) fuelStoreBar = `| - ${fuelStore}% `;
            if (fuelStore >= 21 && 30 >= fuelStore) fuelStoreBar = `|| - ${fuelStore}% `;
            if (fuelStore >= 20 && 30 >= fuelStore) fuelStoreBar = `||| - ${fuelStore}% `;
            if (fuelStore >= 31 && 40 >= fuelStore) fuelStoreBar = `|||| - ${fuelStore}% `;
            if (fuelStore >= 41 && 50 >= fuelStore) fuelStoreBar = `||||| - ${fuelStore}% `;
            if (fuelStore >= 51 && 60 >= fuelStore) fuelStoreBar = `|||||| - ${fuelStore}% `;
            if (fuelStore >= 61 && 70 >= fuelStore) fuelStoreBar = `||||||| - ${fuelStore}% `;
            if (fuelStore >= 71 && 80 >= fuelStore) fuelStoreBar = `|||||||| - ${fuelStore}% `;
            if (fuelStore >= 81 && 90 >= fuelStore) fuelStoreBar = `||||||||| - ${fuelStore}% `;
            if (fuelStore >= 91 && 100 >= fuelStore) fuelStoreBar = `|||||||||| - ${fuelStore}% `;

            // engine bar logic
            if (engine === 0) engineBar = ` - ${engine}% `;
            if (engine >= 10 && 20 >= engine) engineBar = `| - ${engine}% `;
            if (engine >= 21 && 30 >= engine) engineBar = `|| - ${engine}% `;
            if (engine >= 20 && 30 >= engine) engineBar = `||| - ${engine}% `;
            if (engine >= 31 && 40 >= engine) engineBar = `|||| - ${engine}% `;
            if (engine >= 41 && 50 >= engine) engineBar = `||||| - ${engine}% `;
            if (engine >= 51 && 60 >= engine) engineBar = `|||||| - ${engine}% `;
            if (engine >= 61 && 70 >= engine) engineBar = `||||||| - ${engine}% `;
            if (engine >= 71 && 80 >= engine) engineBar = `|||||||| - ${engine}% `;
            if (engine >= 81 && 90 >= engine) engineBar = `||||||||| - ${engine}% `;
            if (engine >= 91 && 100 >= engine) engineBar = `|||||||||| - ${engine}% `;

            let result = "<strong>pilot status</strong>: " + pilotStatus + "<br><strong>hydration levels</strong>: " + waterBar + "<br>" +
                "<strong>caffeine levels</strong>: " + caffeineBar + "<br>" +
                "<strong>fuel levels</strong>: " + fuelBar + "<br>" + "<strong>fuel stores</strong>:" + fuelStoreBar + "<br>" +
                "<strong>credits</strong>: " + credits + "&#8450" + "<br>" + "<strong>engine health</strong>: " + engineBar + "<br>" + "<strong>system status</strong>: " + shipStatus

            document.getElementById("system").innerHTML = result;

        })
        .catch(error => {
            document.getElementById("system").innerHTML = "Error: " + error.message;
            console.error('Error loading JSON:', error);
        })
}, 1000);

//-----------------------------------
// Update stats display every 1 second (1000 ms)/*


function rand(array) {
    const randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

const weather = ["&#9732 METEOR SHOWER", "&#9737 SOLAR FLARE", "&#9776; SOLAR WINDS"]
let conditions = "&#9737 SOLAR FLARE";
setInterval(() => {
    conditions = rand(weather)
}, 100000);

setInterval(myTimer, 1000);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function myTimer() {
    const d = new Date();
    document.getElementById("stats").innerHTML = "<strong>TIME</strong> :" + d.toLocaleTimeString() + " | <strong>LOCATION</strong>: <i>Spaceport Gallima, Delta Quadrant</i> | <strong>CONDITIONS</strong>:" + conditions

    /* + " | <strong>SCANNING</strong>: | " + rndInt*/
}




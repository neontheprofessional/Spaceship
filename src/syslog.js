
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
//--------------------------------------------------------------
setInterval(function () {
    fetch('./syslog.json')
        .then(response => response.json())
        .then(data => {
            const hydration = (data.WaterLog / 2000) * 100;
            const caffeination = (data.CaffeineLog / 200) * 100;
            const shipCreds = Number(getCookie("Credits"))
            const credits = data.Credits + shipCreds
            var test = Math.floor((Number(getCookie("fuel")) / 100) * 100)
            let waterBar = null;
            let caffeineBar = null;
            let testBar = null;

            // Hydration bar logic
            if (hydration === 0) waterBar = ``;
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

            // Test bar logic
            if (test === 0) testBar = ` - ${test}% `;
            if (test >= 10 && 20 >= test) testBar = `| - ${test}% `;
            if (test >= 21 && 30 >= test) testBar = `|| - ${test}% `;
            if (test >= 20 && 30 >= test) testBar = `||| - ${test}% `;
            if (test >= 31 && 40 >= test) testBar = `|||| - ${test}% `;
            if (test >= 41 && 50 >= test) testBar = `||||| - ${test}% `;
            if (test >= 51 && 60 >= test) testBar = `|||||| - ${test}% `;
            if (test >= 61 && 70 >= test) testBar = `||||||| - ${test}% `;
            if (test >= 71 && 80 >= test) testBar = `|||||||| - ${test}% `;
            if (test >= 81 && 90 >= test) testBar = `||||||||| - ${test}% `;
            if (test >= 91 && 100 >= test) testBar = `|||||||||| - ${test}% `;
            if (test >= 101) testBar = `|||||||||| - ${test}% `;

            if (test === null) { testBar = "empty" }

            let resultTest = "hydration levels: " + waterBar + "<br>" +
                "caffeine levels: " + caffeineBar + "<br>" +
                "fuel levels: " + testBar + "<br>" +
                "credits: " + credits + "&#8450" + "<br>"

            document.getElementById("system").innerHTML = resultTest;

            fetch(`https:Brodcast.aether-tree.com/u/Kay/Fuel/${test}`);
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

const weather = ["&#9732 METEORS", "&#9737 SOLARFLARE", "&#9776; SOLARWINDS"]
let conditions = "&#9737 SOLARFLARE";
setInterval(() => {
    conditions = rand(weather)
}, 100000);

setInterval(myTimer, 1000);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function myTimer() {
    const d = new Date();
    document.getElementById("stats").innerHTML = d.toLocaleTimeString() + " | <strong>LOCATION</strong>: Spaceport Gallima | " + conditions/* + " | <strong>SCANNING</strong>: | " + rndInt*/
}






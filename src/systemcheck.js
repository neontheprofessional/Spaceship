fetch('./syslog.json')
    .then(response => response.json())
    .then(data => {
        const hydration = (data.WaterLog / 2000) * 100;
        const caffeination = (data.CaffeineLog / 200) * 100;
        const bits = data.Bits + " ⓑ";
        const test = 90;

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

        let resultTest = "hydration levels: " + waterBar + "<br>" +
            "caffeine levels: " + caffeineBar + "<br>" +
            "test levels: " + testBar + "<br>" +
            "bits: " + bits;

        document.getElementById("tester").innerHTML = resultTest;
    })
    .catch(error => {
        document.getElementById("tester").innerHTML = "Error: " + error.message;
        console.error('Error loading JSON:', error);
    });
/*
let rndInt = randomIntFromInterval(136248000, 6387292000);

// Update rndInt every 3 seconds (3000 ms)
setInterval(function () {
    rndInt = randomIntFromInterval(136240, 638700);
    // Print the random int update (optional)
    document.getElementById("stats").innerHTML += rndInt;
}, 500);
//-------------------------

// Update rndInt every 3 seconds (3000 ms)
*/

// Update stats display every 1 second (1000 ms)/*
setInterval(myTimer, 500);

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function myTimer() {
    const d = new Date();
    document.getElementById("stats").innerHTML = "<strong> TIME </strong> | " + d.toLocaleTimeString() + " | <strong>LOCATION</strong>: GALIMA QDT "/* + " | <strong>SCANNING</strong>: | " + rndInt*/
}





document.addEventListener('DOMContentLoaded', function () {
    function rand(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    const stationNamesA = ["STNB", "STNC", "GRNWX01600B"];
    const stationNamesB = ["STNA", "STNC", "GRNWX01600B"];
    const stationNamesC = ["STNA", "STNB", "GRNWX01600B"];
    const stationNamesGRNWX01600B = ["STNA", "STNB", "STNC"];

    const items = ["engine", "fuel", "battery", "shields", "HoloSynch", "HoloNav"];

    // Use a template literal with placeholders
    const STNA = {
        "general": ["@${station} ISS:${item}, TD4 LBR", "@${station} dude your MagNav is on"],
    };
    const STNB = {
        "general": ["@${station} NEW:${item}, TD check PCHANNEL"],
    };
    const STNC = {
        "general": ["@${station} ISS:${item}, REQ RPR"],
    };
    const GRNWX01600B = {
        "general": ["@${station} ISS:${item}, REQ RPR"],
    };

    const stations = [
        { name: "STNA", obj: STNA },
        { name: "STNB", obj: STNB },
        { name: "STNC", obj: STNC },
        { name: "GRNWX01600B", obj: GRNWX01600B }
    ];


    const myElement = document.getElementById('radio');

    setInterval(function () {
        const speaker = rand(stations);
        let reply = rand(speaker.obj["general"]);

        // Fill in placeholders based on station
        if (speaker.name === "STNA") {
            reply = reply
                .replace("${station}", rand(stationNamesA))
                .replace("${item}", rand(items));
        } else if (speaker.name === "STNB") {
            reply = reply
                .replace("${station}", rand(stationNamesB))
                .replace("${item}", rand(items));
        } else if (speaker.name === "STNC") {
            reply = reply
                .replace("${station}", rand(stationNamesC))
                .replace("${item}", rand(items));
        } else if (speaker.name === "GRNWX01600B") {
            reply = reply
                .replace("${station}", rand(stationNamesGRNWX01600B))
                .replace("${item}", rand(items));
        }

        myElement.innerHTML += "<br><strong>" + speaker.name + "</strong>: " + reply + "<br>";
    }, 200000);
});
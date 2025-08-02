//setInterval(function () {
document.addEventListener('DOMContentLoaded', async function syncStation() {

    try {
        const response = await fetch('https://brodcast.aether-tree.com/');
        var body = await response.text();
        body = body.replace("Directory", " ")
        const radio = document.getElementById("radio");
        radio.innerHTML = "---[<strong>INCOMING TRANSMISSION</strong>]---<br>" + body + "<br>";

    } catch (err) {
        console.error('Fetch failed:', err);
    }

    setTimeout(syncStation, 10000);
});

syncStation();//}, 1000);


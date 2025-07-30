document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://brodcast.aether-tree.com/a/Hunter/Outbound');
        const body = await response.text();
        const radio = document.getElementById("radio");
        radio.innerHTML += "<br>---[<strong>INCOMING TRANSMISSION</strong>]---<br>&gt;<strong>Research Vessel 40N73R</strong>: <br>" + body;

    } catch (err) {
        console.error('Fetch failed:', err);


    }
});




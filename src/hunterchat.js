
document.addEventListener('DOMContentLoaded', async function () {
    /*    try {
            const response = await fetch('https://brodcast.aether-tree.com/a/Hunter/Outbound');
            const body = await response.text();
            const radio = document.getElementById("radio");
            radio.innerHTML += "<br>---[<strong>INCOMING TRANSMISSION</strong>]---<br>&gt;<strong>Research Vessel 40N73R</strong>: <br>" + body + "<br>";
    
        } catch (err) {
            console.error('Fetch failed:', err);
    
    
        }
        try {
            const response = await fetch('https://brodcast.aether-tree.com/a/Station_01/Outbound');
            const body = await response.text();
            const radio = document.getElementById("radio");
            radio.innerHTML += "<br>---[<strong>INCOMING TRANSMISSION</strong>]---<br>&gt;<strong>Station_01</strong>: <br>" + body + "<br>";
    
        } catch (err) {
            console.error('Fetch failed:', err);
    
    
        }
    */

    try {
        const response = await fetch('https://brodcast.aether-tree.com/a');
        var body = await response.text();
        body = body.replace("Directory", " ")
        const radio = document.getElementById("radio");
        radio.innerHTML += "<br>---[<strong>INCOMING TRANSMISSION</strong>]---<br>" + body + "<br>";

    } catch (err) {
        console.error('Fetch failed:', err);


    }

});




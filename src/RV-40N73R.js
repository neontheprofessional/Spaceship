document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://brodcast.aether-tree.com/');
        const body = await response.text();
        const radio = document.getElementById("shipMessage");
        radio.innerHTML = body;

    } catch (err) {
        console.error('Fetch failed:', err);


    }
});




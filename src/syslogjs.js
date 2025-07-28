fetch('./myship.json')
    .then(response => response.json())
    .then(data => {
        const shipName = data.shipName;

        const myElement = document.getElementById('radio');
        myElement.innerHTML += shipName

    })

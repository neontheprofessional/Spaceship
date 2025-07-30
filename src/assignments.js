

//let task = "test"

//document.getElementById("assignments").innerHTML = task

async function fetchTextData() {
    try {
        const response = await fetch('assignments.txt');
        if (!response.ok) { // Check if the response was successful (e.g., status 200-299)
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const textData = await response.text();
        document.getElementById("assignments").innerHTML = textData;
    } catch (error) {
        console.error('Error fetching text:', error);
    }
}

fetchTextData();
function getWeather() {
    let city = document.getElementById("cityName");
    showWeather(city.value);
}

async function showWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'b126d85474mshe64f1aa4d8742e9p19b32ajsn2a2e19b22508',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };

    // Show loader
    document.getElementById("loader").style.display = "block";
    document.getElementById("showWeather").innerHTML = "";

    try {
        const response = await fetch(url, options);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const result = await response.json();
        displayData(result);
    } catch (error) {
        document.getElementById("showWeather").innerHTML = `<p style="color:red">${error.message}</p>`;
    } finally {
        // Hide loader
        document.getElementById("loader").style.display = "none";
    }
}

function displayData(result) {
    let item = document.getElementById("showWeather");
    item.innerHTML = `
    <p><strong>City:</strong> ${result.name}</p>
    <p><strong>Temperature:</strong> ${result.main.temp} °C</p>
    <p><strong>Humidity:</strong> ${result.main.humidity}%</p>
    `;
}

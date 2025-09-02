// Create loader
let loader = document.createElement("div");
loader.className = "loader";
document.body.appendChild(loader);

async function getWeather() {
    let city = prompt("Enter your city");
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;
    const options = {
        method : "GET",
        headers : {
            // copy the keys from rapid api
            'x-rapidapi-key': 'b126d85474mshe64f1aa4d8742e9p19b32ajsn2a2e19b22508',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    try{
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // remove loader once data is fetched
        document.body.removeChild(loader);
        
        let div = document.createElement("div");
        div.className = "container";

        let temp = document.createElement("p");
        temp.innerText = `Temperature : ${result.main.temp}`;

        let feels_like = document.createElement("p");
        feels_like.innerText = `Feels like : ${result.main.feels_like}`;

        let humidity = document.createElement("p");
        humidity.innerText = `Humidity : ${result.main.humidity}`;

        let speed = document.createElement("p");
        speed.innerText = `Speed : ${result.wind.speed}`;

        let name = document.createElement("p");
        name.innerText = `City : ${result.name}`;

        div.append(temp, feels_like, humidity, speed, name);
        document.body.appendChild(div);

    } catch(error){
        // remove loader on error
        document.body.removeChild(loader);
        console.error(error);
    }
}
getWeather();

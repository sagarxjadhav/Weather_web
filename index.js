
const input = document.querySelector("input");
const btn = document.getElementById("btn");
const icon = document.querySelector(".icon");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");

btn.addEventListener("click", ()=>{
    let city = input.value;
    getWeather(city);
})

// function getWether(city){
//     console.log(city);
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6e228dbf1586dbf40a18bacbd9807671'}`)
//     .then(response=>response.json())
//     .then(data=>{
//         console.log(data);
//     })
// }


async function getWeather(city) {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'6e228dbf1586dbf40a18bacbd9807671'}`);
        const data = await response.json();
        console.log(data);

        const iconCode = data.weather[0].icon;
        icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${iconCode}.png" alt="Wether Icon "/>`;

        const weatherCity = data.name;
        const weatherCountry = data.sys.country;
        weather.innerHTML = `${weatherCity}, ${weatherCountry}`;

        const weatherTemp = data.main.temp;
        const KtoC = weatherTemp - 273.15;
        const tempInCelsious = KtoC.toFixed(2);
        temperature.innerHTML = `${tempInCelsious} °C`;        //code to convert Kelvin to Celsius

        const weatherDesc = data.weather[0].description;
        description.innerHTML = weatherDesc;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}













// const apiKey = '6e228dbf1586dbf40a18bacbd9807671';
// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


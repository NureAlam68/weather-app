const apiKey = "419ee7a5883f9e0eed3ea4e64a2406db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=dhaka";

async function checkWeather() {
    const res = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
}

checkWeather();




// const data={
//     "coord": {
//         "lon": 90.4074,
//         "lat": 23.7104
//     },
//     "weather": [
//         {
//             "id": 201,
//             "main": "Thunderstorm",
//             "description": "thunderstorm with rain",
//             "icon": "11n"
//         }
//     ],
//     "base": "stations",
//     "main": {
//         "temp": 25.99,
//         "feels_like": 25.99,
//         "temp_min": 25.99,
//         "temp_max": 25.99,
//         "pressure": 1010,
//         "humidity": 89,
//         "sea_level": 1010,
//         "grnd_level": 1009
//     },
//     "visibility": 3500,
//     "wind": {
//         "speed": 6.17,
//         "deg": 330
//     },
//     "clouds": {
//         "all": 75
//     },
//     "dt": 1728391183,
//     "sys": {
//         "type": 1,
//         "id": 9145,
//         "country": "BD",
//         "sunrise": 1728345156,
//         "sunset": 1728387534
//     },
//     "timezone": 21600,
//     "id": 1185241,
//     "name": "Dhaka",
//     "cod": 200
// }
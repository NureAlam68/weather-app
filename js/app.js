const apiKey = "419ee7a5883f9e0eed3ea4e64a2406db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchBox = document.getElementById("city-name");
const searchBtn = document.getElementById("search-btn");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (res.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await res.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "assets/clouds.png";
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "assets/clear.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "assets/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "assets/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "assets/mist.png";
    }
    else if (data.weather[0].main == "Thunderstorm") {
        weatherIcon.src = "assets/thunderstorm.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "assets/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
};


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});






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
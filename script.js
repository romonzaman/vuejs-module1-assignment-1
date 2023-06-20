
import axios from "axios";

const apiKey = "bb5a516b7f1a4df794e41308232006"

const weatherInfo = document.getElementById("weather-info");

const fetch_weather_info = (apiKey, location = "dhaka") => {

    // Fetch weather data from WeatherAPI
    axios.get(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}`)
        .then(function(response) {

            console.log(response.data)

            const {name, country} = response.data.location
            const condition = response.data.current.condition.text
            const {temp_c, humidity, wind_kph} = response.data.current

            // Display weather information
            weatherInfo.innerHTML = `
            <h2>${name} , ${country}</h2>
            <p>Description: ${condition}</p>
            <p class="mt-4">Temperature: ${temp_c}°C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Wind: ${wind_kph} km/h</p>
            `;

        })
        .catch(function(error) {
            console.log("Error fetching weather data:", error);
            weatherInfo.innerHTML = "<p>Error fetching weather data. Please try again.</p>";
        });
}

document.getElementById("btn_submit").addEventListener("click", function() {

    const locationInput = document.getElementById("location")
    const location = locationInput.value.trim()
  
    if (location !== "") {
        
        // Clear previous weather information
        weatherInfo.innerHTML = "";

        //collect weather information      
        fetch_weather_info(apiKey, location)
  
        // Clear input field
        locationInput.value = "";

    } else {

        //collect weather information      
        fetch_weather_info(apiKey)
    }
});
  
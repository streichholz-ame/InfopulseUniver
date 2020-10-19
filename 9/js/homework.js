class Forecast {
    constructor(temperature, weather, weatherDate){
        this.temperature    = temperature;
        this.weather        = weather;
        this.weatherDate    = weatherDate;
    }
    
    getTemperature(){
        return `${this.temperature}°`;
    }
    
    getWeatherImage(){
        return `pics/${this.weather}.png`;
    }

    getWeatherDate(){
        return this.weatherDate.toLocaleString().substr(0, 10);
    }
}

const   weekForecast = {
    sunday      : new Forecast(20, "cloudy", new Date(2020, 4, 10)),
    monday      : new Forecast(22, "sunny", new Date(2020, 4, 11)),
    tuesday     : new Forecast(16, "sunny", new Date(2020, 4, 12)),
    wednesday   : new Forecast(18, "cloudy", new Date(2020, 4, 13)),
    thursday    : new Forecast(23, "rainy", new Date(2020, 4, 14)),
    friday      : new Forecast(21, "cloudy", new Date(2020, 4, 15)),
    saturday    : new Forecast(19, "cloudy", new Date(2020, 4, 16))
    },
    weatherForecast = document.querySelector("#weatherForecast"),
    btn             = document.querySelector("#btn"),
    searchBar       = document.querySelector("#searchBar");

    function createForecastHtml(forecast, dayOfWeek){

        var weatherDiv          = document.createElement("div"),
            weatherData         = document.createElement("div"),
            weatherImg          = document.createElement("img"),
            weatherTemperature  = document.createElement("p"),
            weatherDate         = document.createElement("p"),
            dayOfWeekElement    = document.createElement("p");

        weatherDiv.className            = 'weatherDiv';
        weatherImg.className            = 'weatherImg';
        weatherTemperature.className    = 'weatherTemperature';
        weatherDate.className           = 'weatherDate';
        weatherData.className           = 'weatherData';
        dayOfWeekElement.className      = 'dayOfWeek';

        weatherDiv.appendChild(dayOfWeekElement);
        weatherDiv.appendChild(weatherImg);
        weatherDiv.appendChild(weatherData);
        weatherData.appendChild(weatherTemperature);
        weatherData.appendChild(weatherDate);
        
        weatherImg.src                  = forecast.getWeatherImage();
        weatherTemperature.innerHTML    = forecast.getTemperature();
        weatherDate.innerHTML           = forecast.getWeatherDate();
        dayOfWeekElement.innerHTML      = dayOfWeek;
        
        weatherForecast.appendChild(weatherDiv);
}

function searchDay(searchString){
    for (day in weekForecast){
        if (day.toUpperCase().includes(searchString.toUpperCase())) {
            createForecastHtml(weekForecast[day], day);
        }
    }
}

for (day in weekForecast) {
    createForecastHtml(weekForecast[day], day);
}

btn.onclick = function(event){
    let searchString            = searchBar.value;
    weatherForecast.innerHTML   = "";
    searchDay(searchString);
};
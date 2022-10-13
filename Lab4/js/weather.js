fetch('https://api.openweathermap.org/data/2.5/weather?id=703448&appid=11a41eca7ff9221adbfa6b5afbd96fe8')
    .then(res => res.json())
    .then(function(wethForecast){
        document.querySelector('.city').textContent = wethForecast.name;
        document.querySelector('.degree').innerHTML = "Temperature: " + Math.round(wethForecast.main.temp - 273) + '°C';
        document.querySelector('.feel').innerHTML = "Feels like: " + Math.round(wethForecast.main.feels_like - 273) + '°C';
        document.querySelector('.disc').textContent = wethForecast.weather[0]['description'];
        document.querySelector('.wind').textContent = "Wind speed: " + wethForecast.wind['speed'] + " m/s";
        document.querySelector('.img li').innerHTML = `<img src="https://openweathermap.org/img/wn/${wethForecast.weather[0] ['icon']}@2x.png">`;
    })

    .catch(function(){});
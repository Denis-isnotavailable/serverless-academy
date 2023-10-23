const axios = require('axios');

const getWeatherForecast = async (lat, lon, API_KEY, interval = 3) => {
    try {
        const { data } = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`);
        const increment = interval === 3 ? 1 : 2;
        let res = '';

        for (let i = 0; i < 10; i += increment) {
            const { dt_txt, main, weather } = data.list[i];
            res += `
                Date: ${dt_txt}
                Temperature: ${Math.round(main.temp - 273.15)}°C
                Humidity: ${main.humidity}%
                Weather: ${weather[0].main} / ${weather[0].description}                
            `                       
        }

        return res;

    } catch (error) {
        console.log(error);
    }
}

module.exports = getWeatherForecast;
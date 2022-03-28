import axios from "axios";
import { API_KEY } from "../const";

export default class OpenWeather {
    static async getCurrentWeatherByCoordinates(lat, lon) {
        const response = await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            )
            .catch((e) => alert(e.message));
        // console.log(response.data);
        return response;
    }

    static async getTimeWeatherByCoordinates(lat, lon) {
        const response = await axios
            .get(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            )
            .catch((e) => alert(e.message));
        // console.log(response.data);
        return response;
    }

    static async getCurrentWeatherByCity(city) {
        const response = await axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
            )
            .catch((e) => alert(e.message));
        // console.log(response.data);
        return response;
    }
}

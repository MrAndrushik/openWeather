import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import OpenWeather from "../API/OpenWeather";
import { MAIN_ROUTE } from "../const";
import { addCurrentWeather, setIsLoading } from "../redux/toolkitSlice";

export const weatherHandler = async (city, dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await OpenWeather.getCurrentWeatherByCity(city);
        dispatch(addCurrentWeather(response.data));
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setIsLoading(false));
    }
};

export const timeWeatherHandler = async (lat, lon, dispatch) => {
    try {
        dispatch(setIsLoading(true));
        const response = await OpenWeather.getTimeWeatherByCoordinates(
            lat,
            lon
        );
        return response;
    } catch (error) {
        console.log(error);
    } finally {
        dispatch(setIsLoading(false));
    }
};

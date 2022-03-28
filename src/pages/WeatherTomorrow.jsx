import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDate } from "../components/getCurrentDate";
import Loader from "../components/Loader";
import { timeWeatherHandler } from "../components/weatherHadnler";

const WeatherTomorrow = () => {
    const currentWeather = useSelector((state) => state.toolkit.currentWeather);
    const dispatch = useDispatch();
    const [response, setResponse] = React.useState([]);
    React.useEffect(() => {
        async function fetchData() {
            const res = await timeWeatherHandler(
                currentWeather.coord.lat,
                currentWeather.coord.lon,
                dispatch
            );
            setResponse(res.data.daily);
        }
        fetchData();
    }, []);
    if (Object.keys(response).length === 0) return <Loader />;
    return (
        <div className="container favorite__container">
            <div className="favorite__content">
                <p className="favorite__date">
                    {getCurrentDate(response[1].dt)}
                </p>
                <h1 className="favorite__name">{`${currentWeather.name}, ${currentWeather.sys.country}`}</h1>
                <p className="favorite__item favorite__coordinates">{`coordinates: ${currentWeather.coord.lon}, ${currentWeather.coord.lat}`}</p>
                <p className="favorite__item favorite__clouds">{`clouds: ${response[1].clouds}%`}</p>
                <p className="favorite__item favorite__temp">{`temp day: ${response[1].temp.day}°`}</p>
                <p className="favorite__item favorite__temp">{`temp MAX: ${response[1].temp.max}°`}</p>
                <p className="favorite__item favorite__temp">{`temp MIN: ${response[1].temp.min}°`}</p>
                <p className="favorite__item favorite__description">{`description: ${response[1].weather[0].description}`}</p>
                <p className="favorite__item favorite__wind">{`wind: ${response[1].wind_speed} m/s`}</p>
            </div>
        </div>
    );
};

export default WeatherTomorrow;

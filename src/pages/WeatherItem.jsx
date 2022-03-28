import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDate } from "../components/getCurrentDate";
import Loader from "../components/Loader";
import SimpleMap from "../components/SimpleMap";
import { weatherHandler } from "../components/weatherHadnler";

const WeatherItem = () => {
    const dispatch = useDispatch();
    const currentName = useSelector(
        (state) => state.toolkit.currentWeather.name
    );
    const currentWeather = useSelector((state) => state.toolkit.currentWeather);
    const isLoading = useSelector((state) => state.toolkit.isLoading);
    React.useEffect(() => {
        weatherHandler(currentName, dispatch);
    }, []);

    if (isLoading) return <Loader />;
    return (
        <div className="favorite__container container">
            <div className="favorite__content">
                <p className="favorite__date">
                    {getCurrentDate(currentWeather.dt)}
                </p>
                <h1 className="favorite__name">{`${currentWeather.name}, ${currentWeather.sys.country}`}</h1>
                <p className="favorite__item favorite__coordinates">{`coordinates: ${currentWeather.coord.lon}, ${currentWeather.coord.lat}`}</p>
                <p className="favorite__item favorite__clouds">{`clouds: ${currentWeather.clouds.all}%`}</p>
                <p className="favorite__item favorite__temp">{`temp: ${currentWeather.main.temp}°`}</p>
                <p className="favorite__item favorite__temp">{`temp MAX: ${currentWeather.main.temp_max}°`}</p>
                <p className="favorite__item favorite__temp">{`temp MIN: ${currentWeather.main.temp_min}°`}</p>
                <p className="favorite__item favorite__description">{`description: ${currentWeather.weather[0].description}`}</p>
                <p className="favorite__item favorite__wind">{`wind: ${currentWeather.wind.speed} m/s`}</p>
                <p className="favorite__item favorite__sea">{`sea level: ${currentWeather.main.sea_level} m`}</p>
            </div>
            <div className="favorite__map">
                <SimpleMap
                    center={{
                        lat: currentWeather.coord.lat,
                        lng: currentWeather.coord.lon,
                    }}
                />
            </div>
        </div>
    );
};

export default WeatherItem;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import OpenWeather from "../API/OpenWeather";
import Loader from "../components/Loader";
import { useFetching } from "../hooks/useFetching";
import {
    addCity,
    addCurrentWeather,
    setIsLoading,
} from "../redux/toolkitSlice";

const Main = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentWeather = useSelector((state) => state.toolkit.currentWeather);
    const cityList = useSelector((state) => state.toolkit.cityList);

    const [fetchWeather, isWeatherLoading, weatherError] = useFetching(
        async (lat, lon) => {
            const response = await OpenWeather.getCurrentWeatherByCoordinates(
                lat,
                lon
            );
            dispatch(addCurrentWeather(response.data));
        }
    );

    const favoritesHandler = (item) => {
        // console.log(item);
        dispatch(addCurrentWeather(item));
        navigate(`/:${item.name}`);
    };

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition((item) => {
            // console.log("Object from browser: ", item);
            fetchWeather(item.coords.latitude, item.coords.longitude);
        });
    }, []);

    if (isWeatherLoading) {
        return <Loader />;
    }

    if (weatherError) {
        return <div>{weatherError}</div>;
    }
    return (
        <main className="main">
            <div className="main__container container">
                <button
                    className="main__add"
                    onClick={() => dispatch(addCity(currentWeather))}
                >
                    +
                </button>
                <div className="main__content">
                    <p className="main__temp">
                        {Math.round(currentWeather.main.temp)}°
                    </p>
                    <p className="main__city">{`${currentWeather.name}, ${currentWeather.sys.country}`}</p>
                    <p className="main__descr">
                        {`${currentWeather.weather[0].description}, wind - ${currentWeather.wind.speed} meter per second`}
                    </p>
                </div>
                <div className="main__block">
                    <h1 className="main__title">Saved sities</h1>
                    <div className="main__favorites">
                        {cityList.map((item) => (
                            <div
                                key={item.name}
                                className="main__item"
                                onClick={() => favoritesHandler(item)}
                            >
                                <p className="main__temp">
                                    {Math.round(item.main.temp)}°
                                </p>
                                <p className="main__city main__city_nomg">{`${item.name}, ${item.sys.country}`}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentDate } from "../components/getCurrentDate";
import Loader from "../components/Loader";
import { timeWeatherHandler } from "../components/weatherHadnler";

const WeatherWeek = () => {
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
        <div className="container main__container">
            <h1
                style={{ textAlign: "center", marginBottom: "40px" }}
            >{`${currentWeather.name}, ${currentWeather.sys.country}`}</h1>
            <div className="main__favorites">
                {response.map((item) => (
                    <div key={item.dt} className="main__item">
                        <p className="main__date">{getCurrentDate(item.dt)}</p>
                        <p className="main__temp">
                            {Math.round(item.temp.day)}°
                        </p>
                        <p className="favorite__item favorite__description">{`${item.weather[0].description}`}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherWeek;

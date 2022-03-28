import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Autocomplete from "./Autocomplete";
import Loader from "./Loader";
import { weatherHandler } from "./weatherHadnler";

const Header = () => {
    const dispatch = useDispatch();
    const inputRef = React.useRef();
    const [cities, setCities] = React.useState([]);
    const currentWeather = useSelector((state) => state.toolkit.currentWeather);

    const getCities = async () => {
        const response = await axios(
            "https://raw.githubusercontent.com/aZolo77/citiesBase/master/cities.json"
        ).then((res) => res.data.city.map((item) => item.name));
        setCities(response);
    };

    React.useEffect(() => {
        getCities();
    }, []);

    if (cities.length === 0) return <Loader />;

    return (
        <header className="header">
            <div className="container header__container">
                <ul className="header__links">
                    <li className="header__item">
                        <Link to="/" className="header__link">
                            Main
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to={`/:${currentWeather.name}`}
                            className="header__link"
                        >
                            Today
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to={`/tomorrow:${currentWeather.name}`}
                            className="header__link"
                        >
                            Tomorrow
                        </Link>
                    </li>
                    <li className="header__item">
                        <Link
                            to={`/week:${currentWeather.name}`}
                            className="header__link"
                        >
                            Week
                        </Link>
                    </li>
                </ul>
                <div className="header__search">
                    {/* <input
                        ref={inputRef}
                        type="text"
                        className="header__input"
                        placeholder="Введите город..."
                    /> */}
                    <Autocomplete
                        className="header__input"
                        reference={inputRef}
                        suggestions={cities}
                    />
                    <button
                        className="header__btn"
                        onClick={() =>
                            weatherHandler(inputRef.current.value, dispatch)
                        }
                    >
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
                                stroke="#727280"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M19 19L14.65 14.65"
                                stroke="#727280"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;

import {
    MAIN_ROUTE,
    WEATHER_ITEM_ROUTE,
    WEATHER_TOMORROW,
    WEATHER_WEEK,
} from "./const";
import Main from "./pages/Main";
import WeatherItem from "./pages/WeatherItem";
import WeatherTomorrow from "./pages/WeatherTomorrow";
import WeatherWeek from "./pages/WeatherWeek";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main,
    },
    {
        path: WEATHER_ITEM_ROUTE,
        Component: WeatherItem,
    },
    {
        path: WEATHER_TOMORROW,
        Component: WeatherTomorrow,
    },
    {
        path: WEATHER_WEEK,
        Component: WeatherWeek,
    },
];

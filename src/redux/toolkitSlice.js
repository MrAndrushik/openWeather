import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        currentWeather: {},
        cityList: [],
        isLoading: true,
    },
    reducers: {
        addCurrentWeather(state, action) {
            state.currentWeather = action.payload;
        },
        addCity(state, action) {
            if (
                state.cityList.filter(
                    (item) => item.name === action.payload.name
                ).length === 0
            ) {
                state.cityList.push(action.payload);
            }
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload;
        },
    },
});

export default toolkitSlice.reducer;
export const { addCurrentWeather, addCity, setIsLoading } =
    toolkitSlice.actions;

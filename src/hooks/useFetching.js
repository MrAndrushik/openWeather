import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../redux/toolkitSlice";

export const useFetching = (callback) => {
    const isLoading = useSelector((state) => state.toolkit.isLoading);
    const dispatch = useDispatch();
    const [error, setError] = React.useState("");

    const fetching = async (...args) => {
        try {
            dispatch(setIsLoading(true));
            await callback(...args);
        } catch (e) {
            setError(e.message);
        } finally {
            dispatch(setIsLoading(false));
        }
    };

    return [fetching, isLoading, error];
};

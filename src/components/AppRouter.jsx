import React from "react";
import { Route, Routes } from "react-router";
import { publicRoutes } from "../routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map((item) => (
                <Route
                    key={item.path}
                    path={item.path}
                    element={<item.Component />}
                />
            ))}
        </Routes>
    );
};

export default AppRouter;

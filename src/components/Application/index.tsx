import DefaultLayout from "../../layouts/DefaultLayout";
import useAppContext from "../../hooks/useAppContext";
import AppContext from "../../context/AppContext";
import routes from "../../router";
import {
    BrowserRouter,
    Route,
    type RouteObject,
    Routes,
} from "react-router-dom";

const Application = () => {
    return (
        <AppContext.Provider value={useAppContext()}>
            <BrowserRouter>
                <DefaultLayout>
                    <Routes>
                        {routes.map((route: RouteObject) => (
                            <Route
                                key={route.id}
                                path={route.path}
                                element={route.element}
                            />
                        ))}
                    </Routes>
                </DefaultLayout>
            </BrowserRouter>
        </AppContext.Provider>
    );
};

export default Application;

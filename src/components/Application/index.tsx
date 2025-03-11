import Header from "../Header";
import routes from "../../router";
// import MainContent from "../MainContent";
import AppContext from "../../context/AppContext";
import useAppContext from "../../hooks/useAppContext";
import DefaultLayout from "../../layouts/DefaultLayout";
import {
    BrowserRouter,
    Route,
    type RouteObject,
    Routes,
} from "react-router-dom";

// const Application = () => {
//     return (
//         <AppProvider>
//             <Header />
//             <MainContent />
//         </AppProvider>
//     );
// };

// export default Application;

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

import NotFoundPage from "../pages/NotFoundPage";
import PreviewPage from "../pages/PreviewPage";
import ListPage from "../pages/ListPage";
import { Navigate, type RouteObject } from "react-router-dom";

export const enum Routes {
    PREVIEW = "/preview",
    LIST = "/list",
    HOME = "/",
    NOT_FOUND = "*",
}

const routes: RouteObject[] = [
    {
        id: "home",
        path: Routes.HOME,
        element: <Navigate to={Routes.LIST} />,
    },
    {
        id: "list",
        path: Routes.LIST,
        element: <ListPage />,
    },
    {
        id: "preview",
        path: Routes.PREVIEW,
        element: <PreviewPage />,
    },
    {
        id: "notFound",
        path: Routes.NOT_FOUND,
        element: <NotFoundPage />,
    },
];

export default routes;

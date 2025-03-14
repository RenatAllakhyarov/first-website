import Application from "components/Application";
import ReactDOM from "react-dom/client";
import React from "react";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>
);

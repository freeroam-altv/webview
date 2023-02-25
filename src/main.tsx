import React from "react";
import ReactDOM from "react-dom/client";
import { fork } from "effector";
import { Provider } from "effector-react/scope";

import FreeroamApp from "@/_app";

import "@/styles/global.css";

const scope = fork();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider value={scope}>
            <FreeroamApp />
        </Provider>
    </React.StrictMode>
);

import { eventer } from "../common/eventer";
import "./index.scss";
import React from "./React";
let App = () => {
    return (
        <>
            <div>allen</div>
        </>
    );
};
document.addEventListener("DOMContentLoaded", async () => {
    document.body.ondragstart = () => false;
    document.body.ondragend = () => false;
    document.body.ondrop = () => false;
    document.body.appendChild(<App />);
    eventer.emit("dataReady");
    let { ipcRenderer } = require("electron");
    ipcRenderer.invoke("changeWindowState", "show");
});
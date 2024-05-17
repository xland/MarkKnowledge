import React from "./React";
import "./ContentBox.scss";
import { eventer } from "../common/eventer";

eventer.on("domReady", () => {
    const cherryInstance = new Cherry({
        id: 'editorBox',
        value: '# welcome to cherry editor!',
    });
})
export default function (props) {
    return (<div class="ContentBox">
        <div class="leftBox"></div>
        <div class="editorBox" id="editorBox"></div>
    </div>);
};
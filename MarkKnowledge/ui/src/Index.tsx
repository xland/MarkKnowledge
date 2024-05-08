import React from "./React";
import "./Index.scss";
import TitleBar from "./TitleBar";
import Sizer from "./Sizer";

let App = () => {
    return (<>
        <TitleBar></TitleBar>
        <div class="ContentBox">123</div>
        <Sizer></Sizer>
    </>);
};
document.addEventListener("DOMContentLoaded", () => {
    document.body.appendChild(<App></App>);
});
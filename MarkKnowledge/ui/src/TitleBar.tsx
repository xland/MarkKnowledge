import React from "./React";
import "./TitleBar.scss";
export default function (props) {
    return (
        <div class="TitleBar">
            <div class="TitleLabel">allen</div>
            <div class="WindowToolBox">
                <div class="WindowToolBtn"></div>
                <div class="WindowToolBtn"></div>
                <div class="WindowToolBtn">*</div>
            </div>
        </div>
    );
};
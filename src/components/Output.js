import React from "react";
import OutputRow from "./OutputRow";

const Output = props => {
    return (
        <div>
            <OutputRow value={props.answer} textSize={{fontSize: '20px'}} ></OutputRow>
            <OutputRow value={props.user} textSize={{fontSize: '20px'}} ></OutputRow>
        </div>
    )
};

export default Output;
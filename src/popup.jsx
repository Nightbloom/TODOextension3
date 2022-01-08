import react from "react";
import { render } from "react-dom";

function Popup(){
    return (
        <>
        <h1>hello</h1>
        <h2>thisis me</h2>
        <ul>
            <li><a href="">thisi is me</a></li>
            <li><a href="">thisi is me</a></li>
            <li><a href="">thisi is me</a></li>
        </ul>
        </>
        
    );
}

render(<Popup/>,document.getElementById("react-target"));


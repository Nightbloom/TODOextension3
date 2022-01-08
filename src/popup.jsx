import react from "react";
import { render } from "react-dom";

function Popup(){
    const items = [{"item": "This is it", "status": 0},
    {"item": "This is it", "status": 0}]

    const itemStr = JSON.stringify(items)
    console.log(items);
    console.log(itemStr);

    return (
        <>
        <h1>hello</h1>
        <h2>thisis me</h2>
        <button className="create-todo">New Item</button>
        <div className="new-item">
            <input type="text" />
            <button>Save</button>
        </div>
        <ul className="todo-items">
            <li className="done item" onClick={head}>This is me <div><button>A</button><button>D</button></div></li>
            <li >This is me<div><button>A</button><button>D</button></div></li>
            <li >This is me<div><button>A</button><button>D</button></div></li>
        </ul>
        </>
        
    );
}

function fetchItem(){
    let items = localStorage.getItem('todo-items')
}

function saveItem(){

}

function head(){
    console.log("yes it is working");
}

render(<Popup/>,document.getElementById("react-target"));


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
            <li className="item" onClick={head}><div className="done"> This is me</div> <div><button>A</button><button>D</button></div></li>
            <li ><div> This is me</div><div><button>A</button><button>D</button></div></li>
            <li ><div> This is me</div><div><button>A</button><button>D</button></div></li>
        </ul>
        </>
        
    );
}

function fetchItems(){

    const itemsList = document.querySelector('ul.todo-items')
    itemsList.innerHTML = '';
    let newItemHTML = '';
    try {
        let items = localStorage.getItem('todo-items')
        let itemArr = JSON.parse(items);
        for (let index = 0; index < itemArr.length; index++) {
            let status = '';
            if(itemArr[index].status === 1){
                status = 'className="done"'
            }
            newItemHTML += `<li className="item" data-itemindex='${i}' 
            onClick={head}><div ${status}>${itemArr[i].item}</div> 
            <div>
            <button>A</button>
            <button>D</button><
            /div>
            </li>`
            
        }
    } catch (error) {
        
    }
}

function saveItem(obj){
    let string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string)
}

function head(){
    console.log("yes it is working");
}

render(<Popup/>,document.getElementById("react-target"));


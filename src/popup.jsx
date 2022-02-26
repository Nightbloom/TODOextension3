import react from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom';



function Popup(){
    const items = [{"item": "This is it", "status": 0},
    {"item": "This is it", "status": 1}]
    
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
            {/* <li className="item" onClick={head}><div className="done"> This is me</div> <div><button>A</button><button>D</button></div></li>
            <li ><div> This is me</div><div><button>A</button><button>D</button></div></li>
            <li ><div> This is me</div><div><button>A</button><button>D</button></div></li> */}
        </ul>
        </>
        
        );
    }
    
    render(<Popup/>,document.getElementById("react-target"));
    
    function fetchItems(){
        
        // render(<div dangerouslySetInnerHTML={{__html: ''}}></div>,document.querySelector('ul.todo-items'));
        
        let newItemHTML = '';
        try {
            let items = localStorage.getItem('todo-items')
            console.log(items);
            let itemArr = JSON.parse(items);
            console.log(itemArr.length);
            for (let index = 0; index < itemArr.length; index++) {
                console.log(index);
                let status = '';
                if(itemArr[index].status === 1){
                    status = 'className="done"'
                }
                
                // console.log(newItemHTML);
                // console.log(index);
                // newItemHTML += `<li className="item" data-itemindex='${i}' 
                // onClick={head}><div ${status}>${itemArr[i].item}</div> 
                // <div>
                // <button>A</button>
                // <button>D</button><
                // /div>
                // </li>`;
                
                render(<div dangerouslySetInnerHTML={{__html: `<li className="item" data-itemindex='${i}' 
                onClick={head}><div ${status}>${itemArr[i].item}</div> 
                <div>
                <button>A</button>
                <button>D</button><
                /div>
                </li>`}}/>,document.querySelector('ul.todo-items'));
                
                console.log(newItemHTML);
            }
        } catch (error) {
            
    }

}


fetchItems();

function saveItem(obj){
    let string = JSON.stringify(obj);
    localStorage.setItem('todo-items', string)
}

function head(){

}


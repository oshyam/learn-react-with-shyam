import React from 'react';
import ReactDOM from 'react-dom';
import "./app.css";

//function
function Userwelcome(){
    //JSX to style like in h1
    return (
        //alway write code within div
        <div>
        <h1 style={{textAlign:'center',color:'white'}}>Editpad.com</h1>
        <span className="txt"><textarea></textarea></span>
        
        <button className="button">Save</button>
        
        </div>
      
    );
}


ReactDOM.render(<Userwelcome/>,document.getElementById("root"));
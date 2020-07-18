import React from "react";
import {Home} from "./Home";
import {Percurso} from "./Percurso";

const Button = props => (
    <button onClick={() => props.onClick()}>
        {props.text}
    </button>
)
function Soma (a,b){
    return a*b;
}


let twoParameter = (a, b) => {
    return(a + b);
};

export class Body extends React.Component{
    render() {
        return(
            <div>
                <h1>Body</h1>
                <Home/>
                <Percurso/>
            </div>
        )
    }
}
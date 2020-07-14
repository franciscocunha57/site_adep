import React from 'react';
import foto from "./fundo.jpg"


const Button = props => (
    <button onClick={() => props.onClick()}>
        {props.text}
    </button>
)
export class Home extends React.Component{
    onClick() {
        console.log('App clicked')
    }
    render() {
        return (
                <div class="container">
                    <div className="a">
                        <h3>ADEP</h3>
                    </div>
                    <div className="a">
                        <h1>CASTELO DE PAIVA</h1>
                    </div>
                    <div className="a">
                        <h1><b>Localizado em: </b> Parque das Tílias</h1>
                    </div>
                    <div className="a">
                        <button className="button" onClick={() => this.onClick()}>Saiba Mais</button>
                    </div>
                </div>


        );
    }
}

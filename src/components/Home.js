import React from 'react';


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
                        <h1> Morada: Parque das Tílias</h1>
                    </div>
                    <div className="a">
                        <a href="Informacoes.js">
                            <button className="button" onClick={() => this.onClick()}>Saiba Mais</button>
                        </a>
                    </div>
                </div>


        );
    }
}

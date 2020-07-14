import React from 'react';
import foto from "./fundo.jpg"



export class Home extends React.Component{

    render() {
        return (
            <section class="section-a">
                <div class="container">
                    <div>
                        Home
                        <img src={foto} width="500" height="1100" alt="Mountain"/>
                        Home
                    </div>

                </div>
            </section>
        );
    }
}

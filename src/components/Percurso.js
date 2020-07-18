import React from 'react';
import foto1 from "./img_transicoes/Screenshot from 2020-07-15 00-01-58.png"
import movie from "./NovaVidaPejaoVelho_Final2.mp4"


export class Percurso extends React.Component{

    render() {
        return (
            <section className="section-a">
                <div className="b">
                    <img id="image" src={foto1}/>
                </div>
                <div className="container">
                    <div class="b">
                        <video width="700" height="400" controls>
                            <source src={movie} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </section>
        );
    }
}

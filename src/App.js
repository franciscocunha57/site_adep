import React from 'react';

import "./App.css"
import {Header} from "./components/Header";
import {Body} from "./components/Body";
import {Home} from "./components/Home";
import {Percurso} from "./components/Percurso";
import {Footer} from "./components/Footer";
import {Informacoes} from "./components/Informacoes";




export class App extends React.Component{
  render() {
    return(
        <div>
          <Header/>
          <Home/>
          <Informacoes/>
          <Percurso/>
          <Footer/>
        </div>

    )
  }
}
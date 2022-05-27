import React from "react";
import './About.css'
import osiris from '../../images/osiris.jpg'
import grupo from '../../images/ita jr.jpg'

 const About = props => (
    <div className="About">
        <h1>Sobre Nós</h1>
        <div className="content">
            <h3>A nossa EJ foi criada por Ozíris Silva, se quer ter sites profissionais arrasta pra cima e vem com o bolachão!!!</h3>
            <img src={osiris} alt="" />
        </div>
        <div className="content2">
            <h3>A nossa equipe é composta pelas mentes mais brilhantes do universo, principalmente o time liderado pela Brubs ;)</h3>
            <img src={grupo} alt="" />
        </div>
    </div>
)

export default About
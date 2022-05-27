import React, {useState} from "react";
import './Home.css'
import Logo from '../../images/Logo.png'
import { Link } from "react-router-dom";
import sites from '../../images/sites.jpg'
import equipe from '../../images/ita_jr.jpg'
import { text1,text2 } from "../../Texts/texts";


const Home = (props) => {
    
    const [text,setText] = useState('Aqui na Ita JR nós nos comprometemos com o nosso trabalho, então clique em aluga imagem e conheça mais sobre alguns de nossos projetos')

    return (
        <div className='home_conteiner'>
            <div className="conteiner1">
                <h1>
                    Bem-Vindo à <span>ITA JR</span>
                </h1>
                <p>Conheça nossa Empresa Júnior e venha vestir nossa camisa!</p>
                <img src={Logo} alt="Ita jr"/>
                <Link className="link" to={'/about'}>Saiba Mais</Link>
            </div>
            <div className="conteiner2">
                <div className="card">
                    <div className="img1">
                    <img onClick={() => setText(text1)} src={sites} alt="sites" />
                    </div>
                    <div className="img2">
                    <img onClick={() => setText(text2)} src={equipe} alt="equipe" />
                    </div>
                    <p>{text}</p>
                </div>
            </div>
        </div>
    )
}

export default Home
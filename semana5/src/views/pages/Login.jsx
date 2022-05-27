import React from "react";
import './Login.css'


import Buttons from "../../components/Buttons";


 const Login = props => (
    <div className="container">
            <div className="form-wrap">
                <h1>Login</h1>
                <form>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Digite seu email" />
                    </div>
                    <div class="form-group">
                    <label for="password">Senha</label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" />
                    </div><br />
                    <Buttons type={"submit"} title={'Entre'}></Buttons>
                </form>
            </div>
            <footer>
              <p>Não possui conta? <a href="#">Cadastre-se</a></p>
            </footer>
    </div>   
);

export default Login
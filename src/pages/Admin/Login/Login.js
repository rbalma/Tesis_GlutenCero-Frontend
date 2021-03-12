import React, {useState} from "react";
import Logo from '../../../assets/img/logoGlutenCero.png';
import { Redirect } from "react-router-dom";
import {signInApi} from '../../../api/user';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../../../utils/constants';
import {getAccessTokenApi} from "../../../api/auth";
import { FaGoogle, FaFacebook } from "react-icons/fa";

import '../RegisterForm/RegisterForm.css';
import { notification } from "antd";

export default function Login() {

  const [inputs, setInputs] = useState({
    email: "",
    password: ""
  });

  const changeForm = e => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  }


  const login = async e => {
    e.preventDefault();
    const result = await signInApi(inputs);

    if(result.message) {
      notification["error"]({
        message: result.message
      });
    } else {
      const { accessToken, refreshToken } = result;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      notification["success"]({
        message: "Login correcto."
      });

      setTimeout( () => {
        window.location.href = "/";
    }, 1500)
    
    }

  }


  if (getAccessTokenApi()) {
    return <Redirect to="/" />;
  }

  return (
    
    
<div className="bg-gradient-primary">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
           <div className="row">
            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
            <div className="col-lg-6">
              <div className="p-5">
                <div className="text-center">
                  <a href="/"><img src={Logo} sizes="10" alt="logo" className="img-fluid pequeña" title="Inicio" /></a>
                  <h1 className="h4 text-gray-900 mb-4 text-left">Ingresa Tu Cuenta</h1>
                </div>


                <form className="user" onChange={changeForm} onSubmit={login}>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-user" aria-describedby="emailHelp"
                    name="email" placeholder="Correo electrónico" />
                  </div>
                  <div className="form-group">
                    <input type="password" className="form-control form-control-user" 
                    name="password"
                    placeholder="Contraseña" />
                  </div>
                  <button className="btn btn-primary btn-user btn-block">
                    Ingresar
                  </button>


                  <hr />
                  <a href="index.html" className="btn btn-google btn-user btn-block">
                    <FaGoogle size="18px" className="mr-2" /> Ingresar con Google
                  </a>
                  <a href="index.html" className="btn btn-facebook btn-user btn-block">
                    <FaFacebook size="20px" className="mr-2" />  Ingresar con Facebook
                  </a>
                </form>
                <hr />
                <div className="text-center">
                  <a className="small" href="forgot-password.html">¿Olvidaste la contraseña?</a>
                </div>
                <div className="text-center">
                  <p className="small" href="register.html">¿Eres nuevo en Gluten Cero? <a href="/singup"><span>Únete ahora</span></a></p>
                </div>
              </div>
            </div>
           </div>
          </div>
        </div>
       </div>
      </div>
     </div>
    </div>

  );
}


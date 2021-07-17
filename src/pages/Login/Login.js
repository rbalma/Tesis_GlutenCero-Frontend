import React, {useState} from "react";
import Logo from '../../assets/img/logoGlutenCero.png';
import { Redirect } from "react-router-dom";
import {signInApi} from '../../api/user';
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../../utils/constants';
import {getAccessTokenApi} from "../../api/auth";
import { FaGoogle, FaFacebook, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import {Link} from 'react-router-dom';

import '../RegisterForm/RegisterForm.css';
import { notification } from "antd";

export default function Login() {

  const [inputs, setInputs] = useState({
    email: "balmarodrigo@hotmail.com",
    password: "T@lleres2020"
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

  // Contraseña Visible
  const [visible, setVisible] = useState(false);
  const Icon = visible ? FaRegEye : FaRegEyeSlash;
  const InputType = visible ? "text" : "password";


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
                  <Link to={"/"}><img src={Logo} sizes="10" alt="logo" className="img-fluid pequeña" title="Inicio" /></Link>
                  <h1 className="h4 text-gray-900 mb-4 text-left">Ingresa Tu Cuenta</h1>
                </div>


                <form className="user" onChange={changeForm} onSubmit={login}>
                  <div className="form-group">
                    <input type="email" className="form-control form-control-user" aria-describedby="emailHelp" value={inputs.email}
                    name="email" placeholder="Correo electrónico" />
                  </div>
                  <div className="form-group form-row">
                  <div className="col">
                    <input type={InputType} className="form-control form-control-user" 
                    name="password" value={inputs.password}
                    placeholder="Contraseña" /> 
                     <i className="password-icon" onClick={() => setVisible(!visible)} ><Icon size="20px" /></i>
                    </div>
                   
                  </div>
                  <button className="btn btn-primary btn-user btn-block">
                    Ingresar
                  </button>


                  <hr />
                  <Link to={"/"} className="btn btn-google btn-user btn-block">
                    <FaGoogle size="18px" className="mr-2" /> Ingresar con Google
                  </Link>
                  <Link to={"/"} className="btn btn-facebook btn-user btn-block">
                    <FaFacebook size="20px" className="mr-2" />  Ingresar con Facebook
                  </Link>
                </form>
                <hr />
                <div className="text-center">
                  <Link to={"/"} className="small" >¿Olvidaste la contraseña?</Link>
                </div>
                <div className="text-center">
                  <p className="small" href="register.html">¿Eres nuevo en Gluten Cero? <Link to={"/singup"}><span>Únete ahora</span></Link></p>
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


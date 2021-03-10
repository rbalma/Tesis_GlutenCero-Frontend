import React, {useState} from 'react';
import './RegisterForm.css';
import Logo from '../../../assets/img/logoGlutenCero.png';
import {emailValidation, minLengthValidation, passwordValidation} from '../../../utils/formValidation'
import {notification} from 'antd';
import {signUpApi} from '../../../api/user';
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function RegisterForm () {

  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const [formValid, setFormValid] = useState({
    name: false,
    lastname: false,
    email: false,
    password: false,
    repeatPassword: false
  });

  const changeForm = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
  };

  const inputValidation = e => {
    const {type, name} = e.target;

    if(type === "email") {
      setFormValid({
        ...formValid,
        [name]: emailValidation(e.target)
      });
    }

    if (type === "text") {
      setFormValid({
        ...formValid,
        [name]: minLengthValidation(e.target, 2)
      });
    }

    if(type === "password") {
        setFormValid({
          ...formValid,
          [name]: passwordValidation(e.target)
        });
    }

  };

  const register = async e => {
    e.preventDefault();

    const nameVal = inputs.name;
    const lastnameVal = inputs.lastname;
    const emailVal = inputs.email;
    const passwordVal = inputs.password;
    const repeatPasswordVal = inputs.repeatPassword;

    if (!nameVal || !lastnameVal || !emailVal || !passwordVal || !repeatPasswordVal) {
      notification["error"]({
        message: "Todos los campos son obligatorios"
      });
    } else {
      if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales."
        });
      } else {
        const result = await signUpApi(inputs);
        if (!result.ok) {
          notification["error"]({
            message: result.message
          });
        } else {
          notification["success"]({
            message: result.message
          });
          resetForm();
        }
      }
    }
  };

  const resetForm = () => {
    const inputs = document.getElementsByTagName("input");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove("success");
      inputs[i].classList.remove("error");
    }

    setInputs({
      name: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: ""
    });

    setFormValid({
      name: false,
      lastname: false,
      email: false,
      password: false,
      repeatPassword: false
    });

  }

    return (

    <div className="bg-gradient-primary">   
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <a href="/"><img src={Logo} sizes="10" alt="logo" className="img-fluid pequeña" title="Inicio" /></a>
                    <h1 className="h4 text-gray-900 mb-4">Crea una cuenta</h1>
                  </div>


                  <form className="user" onSubmit={register} onChange={changeForm}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" name="name" placeholder="Nombre"
                        onChange={inputValidation}
                        defaultValue={inputs.name}
                         />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" name="lastname" className="form-control form-control-user" placeholder="Apellido" 
                        onChange={inputValidation}
                        defaultValue={inputs.lastname}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input 
                      type="email" name="email"   className="form-control form-control-user" placeholder="Correo electrónico"
                      onChange={inputValidation}
                      defaultValue={inputs.email}
                       />
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" className="form-control form-control-user" placeholder="Contraseña"
                        onChange={inputValidation} defaultValue={inputs.password}
                         />
                         <small className="info"> Debe contener número, letra mayúscula y minúscula. Entre 8 a 15 caracteres</small>
                      
                      <div className="form-group mt-3">
                        <input type="password" name="repeatPassword" className="form-control form-control-user" placeholder="Repetir contraseña"
                        onChange={inputValidation}
                        defaultValue={inputs.repeatPassword}
                         />
                      </div>
                    </div>
                    <button className="btn btn-primary btn-user btn-block">
                      Registrarse
                    </button>
                    <hr />
                    <a href="index.html" className="btn btn-google btn-user btn-block">
                      Registrarse con Google <FaGoogle />
                    </a>
                    <a href="index.html" className="btn btn-facebook btn-user btn-block">
                      Registrarse con Facebook <FaFacebook />
                    </a>
                  </form>
                  <hr />
                  <div className="text-center">
                    <a className="small" href="forgot-password.html">Olvidaste la contraseña</a>
                  </div>
                  <div className="text-center">
                  <p className="small">¿Ya tienes una cuenta? <a href="/admin/login"><span> Ingresa ahora</span></a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
    )
}


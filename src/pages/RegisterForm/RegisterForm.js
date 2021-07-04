import React, {useState} from 'react';
import './RegisterForm.css';
import Logo from '../../assets/img/logoGlutenCero.png';
import {notification} from 'antd';
import {signUpApi} from '../../api/user';
import {Link} from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";


export default function RegisterForm ({history}) {

  // eslint-disable-next-line no-useless-escape
  const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  const passValid = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/; // como mínimo debe contener un carácter especial (!@#$&), un número, una letra mayúscula, una minúscula y entre 8 a 15 caracteres.

  const [inputs, setInputs] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    repeatPassword: ""
  });

  const changeForm = (e) => {
    e.preventDefault();
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    });
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
      const validationEmail = emailValid.test(emailVal);
      if (!validationEmail){
        notification["error"]({
          message: "El correo no es válido"
        });
      } else {
        if (passwordVal !== repeatPasswordVal) {
        notification["error"]({
          message: "Las contraseñas tienen que ser iguales."
        });
      } else {
        const validationPass = passValid.test(repeatPasswordVal);
        if (!validationPass){
          notification["error"]({
            message: "La contraseña debe tener mayúscula, minúscula y número."
          });
        }else{
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
            //Redireccionar
            history.push('/login');
        }
        }
        
      }
      }

      
    }
  };

  const resetForm = () => {

    setInputs({
      name: "",
      lastname: "",
      email: "",
      password: "",
      repeatPassword: ""
    });

  }


  // Contraseña Visible
  const [visible, setVisible] = useState(false);
  const Icon = visible ? FaRegEye : FaRegEyeSlash;
  const InputType = visible ? "text" : "password";


    return (
      <>
    <div className="bg-gradient-primary">   
      <div className="container">
        <div className="card o-hidden border-0 shadow-lg">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
              <div className="col-lg-7">
                <div className="p-5">
                  <div className="text-center">
                    <Link to={"/"}><img src={Logo} sizes="10" alt="logo" className="img-fluid pequeña" title="Inicio" /></Link>
                    <h1 className="h4 text-gray-900 mb-4 text-lg-left">Crea Una Cuenta</h1>
                  </div>
                  <form className="user" onSubmit={register} onChange={changeForm}>
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" name="name" placeholder="Nombre"
                        defaultValue={inputs.name}
                         />
                      </div>
                      <div className="col-sm-6">
                        <input type="text" name="lastname" className="form-control form-control-user" placeholder="Apellido" 
                        defaultValue={inputs.lastname}
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input 
                      type="email" name="email"   className="form-control form-control-user" placeholder="Correo electrónico"
                      defaultValue={inputs.email}
                       />
                    </div>
                    <div className="form-group">
                        <input type={InputType} name="password" className="form-control form-control-user" placeholder="Contraseña"
                        defaultValue={inputs.password}
                         />
                         <small className="info">Debe tener número, mayúscula y minúscula. De 8 a 15 caracteres</small>

                      
                      <div className="form-group mt-3">
                        <input type={InputType} name="repeatPassword" className="form-control form-control-user" placeholder="Repetir contraseña"
                        defaultValue={inputs.repeatPassword}
                         />
                         <i className="password-icon3" onClick={() => setVisible(!visible)} ><Icon size="20px" /></i>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-user btn-block">
                      Registrarse
                    </button>
                  </form>
                  <hr />
                  <div className="text-center">
                    <Link to={"/"} className="small" >Olvidaste la contraseña</Link>
                  </div>
                  <div className="text-center">
                  <p className="small">¿Ya tienes una cuenta? <Link to={"/login"}><span> Ingresa ahora</span></Link></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      </>
    )
}


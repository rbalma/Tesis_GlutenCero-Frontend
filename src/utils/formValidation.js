
// Minimo de caracteres
export function minLengthValidation(inputData, minLength) {
    const { value } = inputData;
  
    removeClassErrorSuccess(inputData);
  
    if (value.length >= minLength) {
      inputData.classList.add("success");
      return true;
    } else {
      inputData.classList.add("error");
      return false;
    }
  }
  
  // Valida el formato del email
  export function emailValidation(inputData) {
    // eslint-disable-next-line no-useless-escape
    const emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const { value } = inputData;
  
    removeClassErrorSuccess(inputData);
  
    const resultValidation = emailValid.test(value);
    if (resultValidation) {
      inputData.classList.add("success");
      return true;
    } else {
      inputData.classList.add("error");
      return false;
    }
  }
  

  // Validar formato del password
  export function passwordValidation(inputData) {
    // eslint-disable-next-line no-useless-escape
    const passValid = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,15}$/; // como mínimo debe contener un carácter especial (!@#$&), un número, una letra mayúscula, una minúscula y entre 8 a 15 caracteres.
    const { value } = inputData;
  
    removeClassErrorSuccess(inputData);
  
    const resultValidation = passValid.test(value);
    if (resultValidation) {
      inputData.classList.add("success");
      return true;
    } else {
      inputData.classList.add("error");
      return false;
    }
  }

  function removeClassErrorSuccess(inputData) {
    inputData.classList.remove("success");
    inputData.classList.remove("error");
  }
  
listaPersona=[];

function cargarDatos(){
  const formulario = document.getElementById("formulario");

  const nombreCompleto = formulario["nombreCompleto"];
  const fechaDeNacimiento = formulario["fechaDeNacimiento"];
  const email = formulario["email"];
  const contraseña= formulario["contraseña"];
  const confirmarContraseña= formulario["confirmarContraseña"];
  const genero = formulario["genero"];
  const residencia = formulario["residencia"];

 

  if (!validarFormulario(formulario)) {
    alert("Por favor, llene todos los campos");
    return;
  }
  const edad = calcularEdad(fechaDeNacimiento.value);
  if (edad < 18) {
    alert("Eres menor de edad, o corrija la fecha");
    return;
  }
const emailValido= validarEmail(email.value);
if(!emailValido){
  return; 
}

const contraseñaEsValida = validarCaracteres(contraseña.value);
if (!contraseñaEsValida) {
  return; // Si la contraseña no es válida, paramos el programa
}


const coincidenContraseña = confirmacionDeContraseña(contraseña.value, confirmarContraseña.value);
if (!coincidenContraseña) {
  return; // Si no coinciden, se para el programa
}

  const objPersona = new Persona(nombreCompleto.value , fechaDeNacimiento.value , email.value, contraseña.value,  genero.value, residencia.value);

  listaPersona.push(objPersona);

  localStorage.setItem("lista", JSON.stringify(listaPersona));

  formulario.reset();


  alert("Te has registrado con éxito");

limpiarInputs();
}


function mostrarDatos() {

  tablaMostrar.style.display = "table";
  const datos = JSON.parse(localStorage.getItem("lista"));
  let dato = "";
  aa=datos.nombreCompleto;

  for (let i = 0; i < datos.length; i++) {
    dato += `<tr><td>${datos[i]._nombreCompleto}</td><td>${datos[i]._email}</td></tr>`;
  }

  // Muestra los datos en la tabla
  const tablaMostrarPersona = document.getElementById("tablaMostrarPersona");
  tablaMostrarPersona.innerHTML = dato;

}
function calcularEdad(fechaDeNacimiento) {
  const hoy = new Date();
  const cumpleaños = new Date(fechaDeNacimiento);
  let edad = hoy.getFullYear() - cumpleaños.getFullYear();
  const mes = hoy.getMonth() - cumpleaños.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleaños.getDate())) {
    edad--;
  }
  return edad;
}
// Dentro de la función se crean dos objetos de tipo Date: uno que representa la fecha actual (variable hoy) y otro que representa la fecha de nacimiento (variable cumpleaños). se calcula la edad restando el año de nacimiento del año actual ( hoy.getFullYear() - cumpleanos.getFullYear()). Luego se verifica si el mes actual es menor que el mes de nacimiento o si ambos meses son iguales pero el día actual es menor al día de nacimiento, lo que significa que la persona aún no ha cumplido años este año. En ese caso, se resta 1 a la edad calculada.

function validarFormulario(formulario) {
  for (let i = 0; i < formulario.elements.length; i++) {
    const campo = formulario.elements[i];
    if (campo.required && campo.value.trim() === "") {
      return false;
    }
  }
  return true;
}

// esta funcion registra cada elemento con propiedad elements, valida si el campo es obligatorio con la propiedad required, y luego se fija si el valor del campo está vacío . Si algún campo obligatorio está vacío, la función devuelve false. De lo contrario, devuelve true


function validarEmail(email){
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regexEmail.test(email)){
    alert("Ingrese una direccion de correo valida");
    return false;
  }
  return true;
}

function validarCaracteres(contraseña) {
  const regexContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


  if (!regexContraseña.test(contraseña)) {
    alert("La contraseña debe contener al menos 8 caracteres, una minuscula, una mayuscula");
    return false;
  } else {
    
    return true;
  }
}
//regax contraseña indica los caracteres que debe contener la contraseña
//test es si cumple la condicion es true y si no retonamos false 
// "!" nos hace negar la expresion


function confirmacionDeContraseña(contraseña, confirmarContraseña) {
  if (contraseña === confirmarContraseña) {
    return true;
  } else {
    alert("La contraseña no coincide");
    return false;
  }
}


//Devolver un valor trueo falseen las funciones validarCaracteres()y confirmacionDeContraseña()en lugar de mostrar una alerta. Esto permite que la función cargarDatos()pueda detener la ejecución si la contraseña o la confirmación de la contraseña no son válidas.


function limpiarInputs(){
  formulario["nombreCompleto"].value = "";
formulario["fechaDeNacimiento"].value = "";
formulario["email"].value = "";
formulario["contraseña"].value = "";
formulario["confirmarContraseña"].value = "";
formulario["genero"].value = "";
formulario["residencia"].value = "";

}

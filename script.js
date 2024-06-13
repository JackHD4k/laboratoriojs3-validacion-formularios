function validarDni() {
  const inputDni = document.getElementById("dni");
  const error = document.getElementById("errordni");
  if (inputDni.value.length === 8) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function validarTel() {
  const inputTel = document.getElementById("phone");
  const error = document.getElementById("errortel");
  if (inputTel.value.length === 9) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function validarPass() {
  const input = document.getElementById("password");
  const confirm = document.getElementById("confirmPassword");
  const error = document.getElementById("errorpass");
  if (input.value === confirm.value) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

function registrar() {
  alert("Registro exitoso!");
}
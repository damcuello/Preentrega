/* Validación de usuario y contraseña con número máximo de intentos para empleados*/

const empleadoVerif = "Admin";
const contraseniaVerif = "pass";
const intentosMax = 3;
let intentos = 0;

for (intentos = 0; intentos < 3; intentos++) {
    let nombreEmpleado = prompt("Intento " + (intentos + 1) + ": Ingresá tu ID de Empleado:");

    // Verificamos si la credencial es valida

    if (nombreEmpleado == empleadoVerif) {

        //Si la credencial es válida, solicitar contraseña
        let contraseniaEmpleado = prompt("Ingrese su contraseña:");

        //Verificamos si la contraseña corresponde al usuario{
        if (contraseniaEmpleado == contraseniaVerif) {
            alert("Ingreso de credenciales exitoso. Bienvenido");
            break;
        } else {
            alert("La contraseña ingresada no es correcta. Intentalo nuevamente.");
        }
    } else {
        alert("El usuario ingresado no pertenece a la lista de empleados. Intentalo nuevamente.");
    }
}

if (intentos === intentosMax) {
    alert("Se detectaron demasiados intentos incorrectos. Se bloqueará tu cuenta por seguridad")
}

// Requisito 6: Función JavaScript para interactuar con la página
function mostrarMensaje() {
    alert("¡Bienvenido a MotorStore! Revisa nuestros catálogos de autos y motos.");
}

// Desafío opcional: Cambiar entre modo claro y modo oscuro
function alternarModo() {
    document.body.classList.toggle("modo-oscuro");
}

function agendarMensaje(){
    alert("Gracias por agendar");
}


function LamboDisponible(){
    alert("Stock disponible: 2 Lamborghini Urus en tu region");
}

function MercedesDisponible(){
    alert("Stock disponible: 5 Mercedes-AMG GT en tu region");
}

function BMWDisponible(){
    alert("Stock disponible: 10 BMW M4 Competition en tu region");
}

function KawasakiDisponible(){
    alert("Stock disponible: 9 Kawasaki Ninja 400 en tu region");
}

function KTMDisponible(){
    alert("Stock disponible: 12 KTM Duke 390 en tu region");
}

function YamahaDisponible(){
    alert("Stock disponible: 7 Yamaha YZF-R15 en tu region");
}

function EnviarMensaje(){
    alert("Se ha enviado con exito...");
}

// Validaciones de Registro y Login requeridas por la pauta
function validarCorreo(correo) {
    const dominiosValidos = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    return dominiosValidos.some(dominio => correo.toLowerCase().endsWith(dominio));
}

function validarRut(rut) {
    // Debe tener entre 7 y 9 caracteres, sin puntos ni guion
    const regexRut = /^[0-9]{6,8}[0-9kK]{1}$/;
    return regexRut.test(rut);
}

function validarPassword(password) {
    // Entre 4 y 10 caracteres
    return password.length >= 4 && password.length <= 10;
}

function validarRegistro(event) {
    event.preventDefault();
    const rut = document.getElementById('regRut').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value.trim();
    const errorMsg = document.getElementById('mensajeError');

    errorMsg.style.display = "none";

    if (!validarRut(rut)) {
        errorMsg.innerText = "Error: El RUT debe ser sin puntos ni guion (ejemplo: 19011022K) y tener entre 7 y 9 caracteres.";
        errorMsg.style.display = "block";
        return;
    }

    if (!validarCorreo(email)) {
        errorMsg.innerText = "Error: El correo debe pertenecer a @duoc.cl, @profesor.duoc.cl o @gmail.com.";
        errorMsg.style.display = "block";
        return;
    }

    if (!validarPassword(password)) {
        errorMsg.innerText = "Error: La contraseña debe tener entre 4 y 10 caracteres.";
        errorMsg.style.display = "block";
        return;
    }

    alert("¡Registro exitoso! Bienvenido a MotorStore.");
    window.location.href = "login.html";
}

function validarLogin(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorMsg = document.getElementById('mensajeErrorLogin');

    errorMsg.style.display = "none";

    if (!validarCorreo(email)) {
        errorMsg.innerText = "Error: Correo no válido (debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com).";
        errorMsg.style.display = "block";
        return;
    }

    if (!validarPassword(password)) {
        errorMsg.innerText = "Error: La contraseña debe tener entre 4 y 10 caracteres.";
        errorMsg.style.display = "block";
        return;
    }

    alert("¡Inicio de sesión correcto!");
    window.location.href = "index.html";
}
// Carrito de compras usando Arrays y LocalStorage
let carrito = JSON.parse(localStorage.getItem("carritoStore")) || [];

function agregarAlCarrito(nombre, precio) {
    let producto = { nombre: nombre, precio: precio };
    carrito.push(producto);
    localStorage.setItem("carritoStore", JSON.stringify(carrito));
    alert(`¡${nombre} ha sido agregado al carrito! Total de items: ${carrito.length}`);
}

function guardarProducto(event) {
    event.preventDefault();
    const nombre = document.getElementById("prodNombre").value;
    const precio = document.getElementById("prodPrecio").value;
    const categoria = document.getElementById("prodCategoria").value;

    alert(`Producto guardado exitosamente:\n- Nombre: ${nombre}\n- Precio: $${precio}\n- Categoría: ${categoria}`);
    document.getElementById("formProducto").reset();
}
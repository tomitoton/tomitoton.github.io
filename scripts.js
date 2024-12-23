
function handleLogin(event) {
    event.preventDefault(); 

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "" || password === "") {
        alert("Por favor, debe rellenar ambos campos.");
        return;
    }

    if (username === "usuario" && password === "1234") {
        alert("El inicio de sesión fue exitoso, se le está dirigiendo a la página principal...");
        window.location.href = "home.html"; 
    } else {
        alert("Los datos ingresados son incorrectos, intélo nuevamente.");
    }
}

document.getElementById('paymentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const cardType = document.querySelector('input[name="cardType"]:checked');
    if (!cardType) {
        alert('Seleccione si la tarjeta es débito o crédito.');
        return;
    }

    const cardNumber = document.getElementById('cardNumber').value.trim();
    const cardHolder = document.getElementById('cardHolder').value.trim();
    const expiryDate = document.getElementById('expiryDate').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!cardNumber || !cardHolder || !expiryDate || !cvv) {
        alert('Complete todos los campos del formulario.');
        return;
    }

    alert(`Pago realizado con ${cardType.value}. Gracias por su compra.`);
});

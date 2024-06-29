// JavaScript

// Función para calcular el monto total y mostrar el mensaje
function calc() {
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.textContent.trim().split(' - ')[0]; 
    const productNumber = parseInt(document.getElementById("number").value);

    if (!isNaN(productNumber) && productNumber >= 0) {
        const productPrice = parseFloat(selectedOption.value);
        const subtotal = productPrice * productNumber;
        const shippingFee = calculateShippingFee(subtotal);
        const total = subtotal + shippingFee;
        window.alert(`Producto: ${productName}\nCantidad: ${productNumber}\nSubtotal: ${subtotal} yenes\nTarifa de envío: ${shippingFee} yenes\nMonto total: ${total} yenes`);
    } else {
        window.alert("Por favor selecciona un producto y una cantidad válida.");
    }
}

// Función para calcular la tarifa de envío basada en el subtotal
function calculateShippingFee(totalAmount) {
    if (totalAmount < 2000) {
        return 500; 
    } else if (totalAmount < 3000) {
        return 250; 
    } else {
        return 0; 
    }
}

// Event listener para el botón "Calcular Monto Total"
document.getElementById("calcularTotal").addEventListener("click", calc);

// Función para agregar el producto seleccionado al carrito
function addSelectedProduct() {
    const productSelect = document.getElementById("product");
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const productName = selectedOption.textContent.trim().split(' - ')[0]; 
    const productPrice = parseFloat(selectedOption.value);
    const productNumber = parseInt(document.getElementById("number").value);

    if (!isNaN(productPrice) && !isNaN(productNumber) && productPrice >= 0 && productNumber >= 0) {
        const subtotal = productPrice * productNumber;
        window.alert(`Agregar al carrito:\nProducto: ${productName}\nCosto por unidad: ${productPrice} yenes\nCantidad: ${productNumber}\nSubtotal: ${subtotal} yenes`);
    } else {
        window.alert("Por favor selecciona una cantidad válida.");
    }
}

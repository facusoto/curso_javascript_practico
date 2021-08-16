function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioDescuento = 100 - descuento
    const precioConDescuento = (precio * porcentajePrecioDescuento) / 100
    
    return precioConDescuento;
}

function onClickGetPrice() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputDiscount = document.getElementById("inputDiscount");
    const discountValue = inputDiscount.value;

    const precioConDescuento = calcularPrecioConDescuento(priceValue,discountValue)

    const resultadoArea = document.getElementById("resultado")
    resultadoArea.innerText = "El precio con descuento es: $" + precioConDescuento
}

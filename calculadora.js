function limpiar () {
    document.getElementById("formulario").reset;
}

const sumar = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 + num2);
    document.getElementById("resultado").innerHTML= resultado;
}
const restar = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 - num2);
    document.getElementById("resultado").innerHTML= resultado;
}
const multiplicar = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 * num2);
    document.getElementById("resultado").innerHTML= resultado;
}
const dividir = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 / num2);
    document.getElementById("resultado").innerHTML= resultado;
}
const porcentaje = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 * num2 / 100);
    document.getElementById("resultado").innerHTML= resultado;
}
const cuadrado = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (num1 ** num2);
    document.getElementById("resultado").innerHTML= resultado;
}
const raizCuadrada = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (Math.sqrt(num1));
    document.getElementById("resultado").innerHTML= resultado;
}
const raizCubica = () => {
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const resultado = (Math.cbrt(num1));
    document.getElementById("resultado").innerHTML= resultado;
}
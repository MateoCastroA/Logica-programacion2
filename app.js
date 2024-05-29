function kelvin (temp){
    let kelvin = temp + 273.15
    return kelvin
}
    
function fahrenheit (temp){
    let fahrenheit = (temp*9/5)+ 32
    return fahrenheit 
}

function convertTemperature() {
    let temp = parseFloat(document.getElementById("entrada").value);

    if (isNaN(temp)) {
        alert("No es una entrada válida. Por favor ingrese un número.");
        return;
    }

    let kelvinResult = kelvin(temp);
    let fahrenheitResult = fahrenheit(temp);

    document.getElementById("result-k").innerHTML = kelvinResult.toFixed(2);
    document.getElementById("result-f").innerHTML = fahrenheitResult.toFixed(2);

}
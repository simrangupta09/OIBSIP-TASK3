function convertTemperature(){
const inputTemp= parseFloat(document.getElementById("inputTemp").value);
const inputUnit=document.getElementById("inputUnit").value;
const outputUnit=document.getElementById("outputUnit").value;
let result;

if(inputUnit=="celsius" && outputUnit=="fahrenheit"){
    result=(inputTemp*9/5)+32;
}
else if(inputUnit=="celsius" && outputUnit=="kelvin"){
    result=inputTemp+273.15;
}
else if(inputUnit=="fahrenheit" && outputUnit=="celsius"){
    result=(inputTemp-32)*5/9;
}
else if(inputUnit=="fahrenheit" && outputUnit=="kelvin"){
    result=((inputTemp-32)*5/9)+273.15;
}
else if(inputUnit=="kelvin" && outputUnit=="celsius"){
    result=inputTemp-273.15;
}
else if(inputUnit=="kelvin" && outputUnit=="fahrenheit"){
    result=((inputTemp-273.15)*9/5)+32;
}
else{
    result=inputTemp //if units are the same , no conversion needed
}
document.getElementById("result").textContent=`result: ${result.toFixed(2)} ${outputUnit}`;
}
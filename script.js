function calcularResistenciaEq(){
     //Obtener valores de los inputs
     var voltajeT = document.getElementById("voltajeT").value;
     var R1 = document.getElementById("R1").value;
     var R2 = document.getElementById("R2").value;
 
     //Verificar que los valores sean válidos
     if(voltajeT === "" || R1 === "" || R2 === ""){
         alert("Por favor ingresa el voltaje y los valores de las resistencias.");
         return;
     }
     if (R1 <= 0 || R2 <= 0){
         alert("Las resistencias deben ser mayores a 0 Ω");
         return;
     }
 
     voltajeT = parseFloat(voltajeT);  //Sobrescribo los valores que tomo del html y los cambio de fomato (convierte el texto a números con parseFloat)
     R1 = parseFloat(R1);
     R2 = parseFloat(R2);
 
     //Sumar las resistencias
     var RT = R1+R2;

     //Mostrar el resultado
    document.getElementById("RT").innerText = RT;
}

function calcularCorriente(){
    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);  //Sobrescribo los valores que tomo del html y los cambio de fomato (convierte el texto a números con parseFloat)
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Mostrar el resultado
    document.getElementById("corriente").innerText = corriente.toFixed(6);
}

function calcularVoltaje1(){
    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Calcular voltaje 1
    var voltaje1 = corriente*R1;

    //Mostrar el resultado
    document.getElementById("voltaje1").innerText = voltaje1.toFixed(2);
}

function calcularVoltaje2(){
    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Calcular voltaje 2
    var voltaje2 = corriente*R2;

    //Mostrar el resultado
    document.getElementById("voltaje2").innerText = voltaje2.toFixed(2);
}

function calcularPotencia1(){

    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Calcular voltaje 1
    var voltaje1 = corriente*R1;

    //Calcular potencia 1
    var potencia1 = voltaje1*corriente;

    //Mostrar el resultado
    document.getElementById("potencia1").innerText = potencia1.toFixed(6);
}

function calcularPotencia2(){

    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Calcular voltaje 2
    var voltaje2 = corriente*R2;

    //Calcular potencia 2
    var potencia2 = voltaje2*corriente;

    //Mostrar el resultado
    document.getElementById("potencia2").innerText = potencia2.toFixed(6);
}

function calcularPotenciaEq(){

    //Obtener valores de los inputs
    var voltajeT = document.getElementById("voltajeT").value;
    var R1 = document.getElementById("R1").value;
    var R2 = document.getElementById("R2").value;

    //Verificar que los valores sean válidos
    if(voltajeT === "" || R1 === "" || R2 === ""){
        alert("Por favor ingresa el voltaje y los valores de las resistencias.");
        return;
    }
    if (R1 <= 0 || R2 <= 0){
        alert("Las resistencias deben ser mayores a 0 Ω");
        return;
    }

    voltajeT = parseFloat(voltajeT);
    R1 = parseFloat(R1);
    R2 = parseFloat(R2);

    //Sumar las resistencias
    var RT = R1+R2;

    //Calcular corriente
    var corriente = voltajeT/RT;

    //Calcular potencia en la resistencia equivalente
    var potenciaEq = voltajeT*corriente;

    //Mostrar el resultado
    document.getElementById("potenciaEq").innerText = potenciaEq.toFixed(6);
}


   
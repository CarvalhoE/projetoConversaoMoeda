let input = document.getElementById('input');
let result = document.getElementById('result');
let inputType = document.getElementById('inputType');
let resultType = document.getElementById('resultType');
let inputTypeValue,resultTypeValue;

input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);

// Valor inicial
inputTypeValue = inputType.value;
resultTypeValue= resultType.value;


function myResult(){

    inputTypeValue = inputType.value;
    resultTypeValue= resultType.value;
    //BRL PARA OUTROS CAMBIOS
    if(inputTypeValue === "BRL" && resultTypeValue==="USD"){
        //Formula do Real para Dolar Americano
        result.value ='$' + Number(input.value) * 5.51;
        
    }
    else if(inputTypeValue === "BRL" && resultTypeValue==="EUR"){
        //Formula do Real para Euro 
        result.value ='€' + Number(input.value) * 6.58;
    }
    else if(inputTypeValue === "BRL" && resultTypeValue==="CAD"){
        //Formula do Real para Dólar Canadense 
        result.value ='C$' + Number(input.value) * 4.40;
    }
    else if(inputTypeValue === "BRL" && resultTypeValue==="BRL"){
        //Formula do Real para Real
        result.value ='R$' + Number(input.value);
    }

    //USD PARA OUTROS CAMBIOS
    if(inputTypeValue === "USD" && resultTypeValue==="BRL"){
        //Formula do Dolar para Real
        result.value ='R$'+ Number(input.value) * 5.51;
    }
    else if(inputTypeValue === "USD" && resultTypeValue==="EUR"){
        //Formula do Dolar para Euro
        result.value ='€'+ Number(input.value) * 0.84;
    }
    else if(inputTypeValue === "USD" && resultTypeValue==="CAD"){
        //Formula do Dolar para Dólar Canadense
        result.value ='C$'+ Number(input.value) * 1.25;
    }
    else if(inputTypeValue === "USD" && resultTypeValue==="USD"){
        //Formula do Dolar para Dolar
        result.value ='$'+ Number(input.value);
    }
    
    //EUR PARA OUTROS CAMBIOS
    if(inputTypeValue === "EUR" && resultTypeValue==="BRL"){
        //Formula do Euro para Real
        result.value ='R$'+ Number(input.value) * 6.58;;
    }
    else if(inputTypeValue === "EUR" && resultTypeValue==="EUR"){
        //Formula do Euro para Euro
        result.value ='€'+ Number(input.value);
    }
    else if(inputTypeValue === "EUR" && resultTypeValue==="CAD"){
        //Formula do Euro para Dólar Canadense
        result.value ='C$'+ Number(input.value) * 1.49;
    }
    else if(inputTypeValue === "EUR" && resultTypeValue==="USD"){
        //Formula do Euro para Dolar
        result.value ='$'+ Number(input.value) * 1.19;
    }
    //Cad PARA OUTROS CAMBIOS
    if(inputTypeValue === "CAD" && resultTypeValue==="BRL"){
        //Formula do Cad para Real
        result.value ='R$'+ Number(input.value) * 4.40;
    }
    else if(inputTypeValue === "CAD" && resultTypeValue==="EUR"){
        //Formula do Cad para Euro
        result.value ='€'+ Number(input.value) * 0.67;
    }
    else if(inputTypeValue === "CAD" && resultTypeValue==="CAD"){
        //Formula do Cad para Dólar Canadense
        result.value ='C$'+ Number(input.value);
    }
    else if(inputTypeValue === "CAD" && resultTypeValue==="USD"){
        //Formula do Cad para Dolar
        result.value ='$'+ Number(input.value) * 0.80;
    }
}
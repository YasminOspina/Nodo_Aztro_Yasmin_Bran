let num1,num2,multiplicacion,suma

function determinarresultado(){
    num1 = parseFloat(document.getElementById("base").value);
    num2 = parseFloat(document.getElementById("altura").value);
    multiplicacion = num1*num2;

    document.getElementById("area").value= multiplicacion;

    num1= parseFloat(document.getElementById('base').value);
    num2= parseFloat(document.getElementById('altura').value);
    suma= (num1+num2)*2

    document.getElementById('perimetro').value=suma;
}


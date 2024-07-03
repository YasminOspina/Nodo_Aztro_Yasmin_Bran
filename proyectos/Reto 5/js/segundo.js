let num1,num2

function resultado(){
    num1 = parseFloat(document.getElementById("diametro").value);
    operacion= Math.PI*num1;

    document.getElementById("perimetro").value=operacion;

    num2=parseFloat(document.getElementById("radio").value);
    area= parseFloat(Math.PI * Math.pow(num2,2));

    document.getElementById("area").value=area;
}
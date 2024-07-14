/*Un maestro de obra quiere emplear una forma rápida de poder 
calcular el numero de ladrillo que necesita para una pared 
¿Puedes ayudarlo? (Incluir interfaz)*/


function calculoLadrillos(){
    let largoPared = parseFloat(document.getElementById('num1').value);
    let altoPared = parseFloat(document.getElementById('num2').value);
    let largoLadrillo= parseFloat(document.getElementById('num3').value);
    let altoLadrillo = parseFloat(document.getElementById('num4').value);
    let resultado= (((largoPared*altoPared)/(largoLadrillo*altoLadrillo)).toFixed(2));
    
    document.getElementById('resultado1').value = resultado;
}



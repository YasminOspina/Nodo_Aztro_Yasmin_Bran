/*Un nadador necesita conocer el promedio final de tiempo que gasta 
en recorrer una piscina de 100 metros, sabiendo que en el día el realiza 
cinco pruebas medidas en segundos*/

function promFinal(){
    let t1= parseFloat(document.getElementById("time1").value);
    let t2= parseFloat(document.getElementById('time2').value);
    let t3= parseFloat(document.getElementById('time3').value);
    let t4= parseFloat(document.getElementById('time4').value);
    let t5= parseFloat(document.getElementById('time5').value);
    let numPruebas= parseFloat(document.getElementById('totalPruebas').value);

    let result = (t1 + t2 + t3 + t4 + t5) / numPruebas;


    document.getElementById('resultado1').value = result;
}


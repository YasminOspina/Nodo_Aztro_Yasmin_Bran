/*Un Medico desea utilizar un sitio web que le muestre 
a un persona su estado de salud, dependiendo del índice 
de masa corporal a partir de su peso y altura, al mismo tiempo 
mostrar en que rango de encuentra, delgado, normal, obeso, etc. 
(ver la tabla). ANEXO: utiliza condicionales para determinar 
el rango en el cual se encuentra la persona una vez calcules 
su Índice de Masa Corporal (IMC), recuerda de debes inicialmente 
calcular el IMC y a través de su valor determinar con condicionales 
en que rango se encuentra el paciente.  Adjunto encontraras la formula
para hacer el calculo y las dos tablas de rangos vistas en clase, puedes 
usar cualquiera de las dos.*/

let peso = 120
let altura = 1.70

function indiceMasa(peso,altura){
    let rangoImc = (parseFloat(peso/(altura*altura)).toFixed(2))
    
    if (rangoImc < 16) {
        console.log('Usted tiene delgadez severa'); 
    } else if (rangoImc < 17){
        console.log('Usted tiene una delgadez moderada');
    } else if(rangoImc >= 17 && rangoImc <=18.49){
        console.log('Usted tiene desgadez aceptable');
    } else if(rangoImc >=18.5 && rangoImc <=24.99){
        console.log('Usted tiene un peso normal');
    } else if(rangoImc >=25 && rangoImc <= 29.99){
        console.log('Usted tiene sobrepeso');
    } else if(rangoImc >= 30 && rangoImc <= 34.99){
        console.log('Usted tiene Obesidad tipo 1 (Moderada)');
    } else if(rangoImc >=35 && rangoImc <= 39.99){
        console.log('Usted tiene Obesidad tipo 2 (Severa)');
    } else{
        console.log('Usted tiene Obesidad tipo 3 (Mórbida)');
    }
    return rangoImc
}

console.log(indiceMasa(peso,altura));




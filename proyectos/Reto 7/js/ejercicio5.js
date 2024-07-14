/*Un gerente de una tienda debe liquidar a sus empleados según el numero de días
trabajados en el mes y horas extras. Además debe descontar la salud (4%) y la pensión (4%),
así como un deducible del 3% referente a alimentación. Valor por día trabajado: $43000, 
Valor Hora Extra Diurna $6915, Nocturna $9681 y festivos $11064.*/


let diasTrabajados= 20
let horasExDi= 10
let horasExNoc= 5
let horasExFes=2


function liquidacion(){
    let valorDia = 43.000
    let saludPension = 0.08
    let deduAlimento = 0.03
    let valorExDiurna = 6.915
    let valorExNoc= 9.681
    let valorExFes = 11.064
    let sueldoBruto = valorDia*diasTrabajados
    let totExtrDiur= horasExDi*valorExDiurna
    let totExtrNoc = horasExNoc*valorExNoc
    let totExtrFes = horasExFes*valorExFes
    let subtotal = sueldoBruto+totExtrDiur+totExtrNoc+totExtrFes
    let deduSaludPension = subtotal*saludPension
    let deducionAlimento = subtotal*deduAlimento
    let totalPagar = subtotal-deduSaludPension-deducionAlimento
    let mensaje1 = `El sueldo bruto es de ${sueldoBruto} total horas extradiurnas ${totExtrDiur}  
    total de horas extranocturas ${totExtrNoc} y el total de horas extrafestivos ${totExtrFes}, sumado lo anterior
    nos da un subtotal de ${subtotal}El total de deducciones de salud y pension es del 8% con un valor sobre el subtotal 
    de ${deduSaludPension} también se le resta el 3% de la cuota de alimentación de ${deducionAlimento} dando un total
    a pagar de ${totalPagar}`;

    return mensaje1;
}
console.log(liquidacion());
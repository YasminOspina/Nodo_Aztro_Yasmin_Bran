/*Un agrónomo desea una forma rápida de encontrar cuantos litros 
de pesticida debe aplicar a un conjunto de terrenos de forma trapezoidal,
si por cada metro cuadrado debe aplicar 1.5 litros de pesticida. Además 
le piden que determine cuantos metros de cerca eléctrica son necesarios 
para rodear todo el terreno.*/
let b1=50;
let b2= 30;
let h= 40;
const LITROS = 1.5

function pesticida(b1,b2,h){
    let area = (((b1 + b2) * h)/2)*LITROS
    return area; 
}

function perimetro(b1,b2,h){
    let perimetroCerca = b1+b2+h
    return perimetroCerca;
}

console.log(pesticida(b1,b2,h), perimetro(b1,b2,h));


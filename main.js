/*
Este programa es un asistente de muestreo.
¿Qué hace? Él recibe todos los datos de un encuestador para poder determinar los valores poblacionales de un estudio.
El estudio es el siguiente:
Un investigador quiere determinar la cantidad de horas que los adolescentes hacen actividad física. Para ello posee una encuesta anónima con la pregunta: ¿Cuántas horas semanales practicas deporte?
A partir de este estudio, este programa realiza:
---El valor promedio de los datos ingresados
---El desvío estándar de la muestra
---El error del estudio
---El intervalo de confianza al 95% del valor poblacional (mu)
El investigador ingresa valores hasta que ingresa un valor negativo. Cuando ingresa un valor negativo, finaliza la carga y devuelve los resultados
Para esta consigna voy a dejar los CONSOLE.LOG para mostrar su uso, aunque los sacaría si fuera un trabajo finalizado.
*/

const ingresarNumero = () => {
    let x;
    do{
        x = parseInt (prompt(`Ingrese un valor positivo. Para finalizar, ingrese un valor negativo`));
    } while (isNaN(x));
    console.log(`número válido ${x}`);
    return x;
}

const resultados = (x,x2,n) => {
    console.log(`ingreso a resultados`);
    let promedio = x/n;
    let varianza = (x2-n*promedio)/(n-1);
    let desvioPromedio=(varianza/n)**(1/2);
    let error=2*desvioPromedio;
    let ls= promedio+error;
    let li=promedio-error;
    alert(`Este es el resultado de la investigación. \n El valor medio de los datos es ${promedio}. \n La varianza de los datos es ${varianza}. \n El error de la investigación es de +-${error}. \n Con una confianza del 95%, se puede decir que el parámetro poblacional se encuentra entre ${li} y ${ls}`);
}

let numero, suma=0, sumaCuadrado=0, n=0, neg=false;
do{
    numero=ingresarNumero();
    if (numero>=0){
        suma=suma+numero;
        sumaCuadrado=sumaCuadrado+numero**2;
        n++;
    } else {
        neg=true;
    }
} while (neg===false);

console.log(`Resultados ${suma}; ${sumaCuadrado}; ${n}`)

resultados(suma,sumaCuadrado,n);
alert(`¡Gracias por utilizar nuestra calculadora de muestreo! \n BG`)
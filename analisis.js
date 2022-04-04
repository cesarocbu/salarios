//helpers
function esPar (numerito){
    return (numerito % 2 === 0);
}

function calcularMedia(lista){
    
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}

//Calculadora de mediana
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMedia([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

//Mediana general

const salariosMex = mexico.map(
    function (personita) {
        return personita.salary;
    }
);
const salariosMexSorted = salariosMex.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    }
);


const medianaGralMex = medianaSalarios(salariosMexSorted);

//Mediana del top 10
const spliceStart = (salariosMexSorted.length * 90) / 100;
const spliceCount = salariosMexSorted.length - spliceStart;

const salariosMexTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Mex = medianaSalarios(salariosMexTop10);

console.log(
    {
        medianaGralMex,
        medianaTop10Mex,
    }
);
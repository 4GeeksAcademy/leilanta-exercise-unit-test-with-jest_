
// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}


 const fromDollarToYen = (dollar) => {
    return dollar * 156.5
}
;
//  const fromEuroToDollar = (euro) => {
//     return (euro * 1.07)
//  }
 
 const fromYenToPound = (yen) => {
    return yen * 0.87
 }


module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
// Importar la función sum del archivo app.js
const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');


test(' an euro is 1.07$ so 3.5 euros are 3.745$ ', () => {
    
    let total = fromEuroToDollar(3.5);
    expect(total).toBe(3.745);
});
test(' an dollar is 156.5Yens so 2 dollars are 313 Yens ', () => {
    
    let total = fromDollarToYen(2);
    expect(total).toBe(313);
});
test(' a Yen is 0.87 Pounds so 3 Yens are 2.67 Pounds', () => {
    
    let total = fromYenToPound(3);
    expect(total).toBe(2.61);
});
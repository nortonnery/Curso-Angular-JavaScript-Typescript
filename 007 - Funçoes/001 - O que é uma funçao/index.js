/*
O que é uma funçao?
É um conjunto de instruções que executa uma tarefa ou calcula um valor
*/
// 1 - Functions Declaration
function isValidDeclaration() {
    const soma = 1+2;
    if (soma ===3 ) {
        return true;
    }
    return false;
};

// 2 - Functions expression
const isValidExpression = function() {
    return false;
};

// 3 - Array Functions

const isValidArrow = () => {
    const multiplicacao = 2 * 2;
    return multiplicacao;
};

console.log(isValidArrow());
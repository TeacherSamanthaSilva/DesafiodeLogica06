// Crie um objeto que receba ao menos três propriedades sobre você.

let pessoa = {
    nome:"Samantha",
    idade:"28",
    animaldeEstimacao:"gato"
}
console.log(pessoa);

// Adicione uma nova propriedade sem alterar seu objeto inicial.

pessoa.comidaFavorita = "pizza"
console.log(pessoa);

// Remova uma propriedade desse objeto.

delete pessoa.idade;
console.log(pessoa);

// Mostre no console todas as propriedades desse objeto.

console.log(pessoa);
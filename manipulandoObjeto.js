const user = {
    name: "Roberto",
    idade: "33",
    formado: "Sim",
    escolaridade: {
        instituicao1: "UNIVERSIDADE MG, UNIVERSIDADE SP, UNIVERSIDADE PR, UNIVERSADE RS",
        instituicao2: "UNIVERSIDADE CRUZEIRO DO SUL",
    },
}

// Altere a propriedade instituição 1 para um array de string utilizando o separador virgula 

user.escolaridade.instituicao1 = user.escolaridade.instituicao1.split(", ");

// Adicione 3 novas propriedade no objeto user: endereço, nacionalidade e situação do curso. 

user.endereco = "Rua dos Bobos, nº 0";
user.nacionalidade = "Brasileiro";
user.situacaoCurso = "Formado";

console.log(user)
function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
        this.idade + anos
    } anos de idade.`;
};

const pessoa1 = {
    nome: 'Maria',
    idade: 30
};

const pessoa2 = {
    nome: 'Aline',
    idade: 23
};

const animal = {
    nome: 'Hime',
    idade: 3,
    raca: 'Akita',
};

//console.log(calculaIdade.call(pessoa2, 30));
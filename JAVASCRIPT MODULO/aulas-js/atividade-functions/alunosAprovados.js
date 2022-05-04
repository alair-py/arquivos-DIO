//Function que recebe array de "alunos" e valor que representa média final.

function calcAlunos(arr, average = 7) {
    if(!arr) return "Não pode usar valores vazios.";

    approved = [];

    for(let i = 0; i < arr.length; i++) {
        
        if(arr[i]['nota'] >= average) {
            approved.push(arr[i]);
        }
    }

    return approved;
}


alunosArr = [
    {Aluno: "Alair", nota: 7},
    {Aluno: "Junior", nota: 5},
    {Aluno: "Brian", nota: 9},
    {Aluno: "Thiago", nota: 4},
]


console.log(calcAlunos(alunosArr, 9));

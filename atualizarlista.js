const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo');/*nome do array.splice == start:começa da onde voce escolher,deletecount:quantos voce vai deletar depois do seu start,
o terceiro parametro é o item que sera incluido*/

console.log(listaEstudantes);
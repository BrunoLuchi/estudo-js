const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5]

const reprovados = alunos.filter((_, indice) => { //nome do array.filter(elemnto filtrado,indice) == para filtrar elemntos em arrays
  return medias[indice] < 7;
});

console.log(reprovados);
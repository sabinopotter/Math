console.log(dados);
let section = document.getElementById("resultados-pesquisa")
// comentario: aqui neste caso foi para acessar as coisas lá no html byID, é similiar ao console log;
let campoPesquisa = document.getElementById("campo-pesquisa").value
console.log(section);
for (let dado of dados) {
    section.innerHTML = '<div class="item-resultado"><h2><a href="#" target="_blank">${dado.titulo}</a></h2><p class="descricao-meta">${dado.descricao}</p><a href=${dado.link}target="_blank">Mais informações</a></div>'
}  
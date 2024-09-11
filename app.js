function pesquisar() {
    // Seleciona a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById ("campo-pesquisa").value 

    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um idioma...</p>"
        return}

        campoPesquisa = campoPesquisa.toLowerCase()
   
    // Inicializa uma string vazia para armazenar os resultados formatados em HTML
    let resultados = "";
    let titulo = "";
    let link = "";
    let tags = "";

  
    // Itera sobre cada idioma nos dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        link = dado.link.toLowerCase()
        tags = dado.tags.toLowerCase()
        
        // Se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || link.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">
              <h3>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h3>
              <p class="descrição-meta">${dado.descricao}</p>
              <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
        }
    console.log (dado.titulo.includes(campoPesquisa))
      // Cria uma nova div para representar um resultado de pesquisa
      
    }
  if (!resultados) {
resultados = "<p>Nada foi encontrado</p>"
  }
    // Atualiza o conteúdo da seção com os resultados formatados
    section.innerHTML = resultados;
  }

function pesquisarTodos() {
  // Seleciona a seção HTML onde os resultados serão exibidos
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados formatados em HTML
  let resultados = "";

  // Itera sobre cada idioma nos dados
  for (let dado of dados) {
      
      resultados += `
          <div class="item-resultado">
            <h3>
              <a href="#" target="_blank">${dado.titulo}</a>
            </h3>
            <p class="descrição-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>`;
      }
    
  // Atualiza o conteúdo da seção com os resultados formatados
  section.innerHTML = resultados;
}


  



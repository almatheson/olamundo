# olamundo

Função de Pesquisa para Banco de Dados de Linguagens

Autora: Anna Carolina Sutter
Data: 09/05/2024
Descrição

Este código JavaScript implementa uma função de pesquisa simples para um banco de dados de linguagens. A função busca por termos em três campos de cada objeto do banco de dados: título, link e tags.
Funcionamento

    Captura da entrada do usuário: A função obtém o termo de pesquisa inserido pelo usuário em um campo de input HTML.
    Normalização: Converte todos os dados para minúsculas para facilitar a comparação e tornar a pesquisa case-insensitive.
    Iteração e filtragem: Percorre cada item do banco de dados, comparando o termo de pesquisa com os campos de título, link e tags. Se houver correspondência, o item é adicionado aos resultados da pesquisa.
    Exibição dos resultados: Os resultados da pesquisa são formatados como HTML e inseridos em uma seção específica na página.

Estrutura do Banco de Dados (dados.js)

O banco de dados (provavelmente em um arquivo separado chamado dados.js) deve ser um array de objetos, onde cada objeto representa uma língua e possui as seguintes propriedades:

    titulo: O nome da língua.
    descricao: Uma breve descrição ou frase na língua.
    link: Um link externo para mais informações sobre a língua.
    tags: Palavras-chave relacionadas à língua.

Uso

Para utilizar a função, você precisará:

    Incluir o script: Certifique-se de que o arquivo JavaScript contendo a função esteja incluído no seu HTML.
    Chamar a função: Associe a função a um evento, como o evento oninput do campo de pesquisa, para que a pesquisa seja realizada em tempo real conforme o usuário digita.
    Preparar a interface: Crie um campo de entrada HTML para o usuário digitar o termo de pesquisa e uma seção para exibir os resultados

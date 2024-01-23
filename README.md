# Customer Management Front-End

Este é um projeto Front-End desenvolvido como parte do desafio proposto. O projeto inclui uma aplicação web para gerenciar clientes e otimizar rotas de visitação.

## Principais Ferramentas Utilizadas

-   **React**: Uma biblioteca JavaScript para construção de interfaces de usuário.
-   **Material-UI**: Uma biblioteca de componentes React para um design mais rápido e fácil.

## Instalação

1.  Certifique-se de ter o Node.js instalado. Você pode baixá-lo [aqui](https://nodejs.org/).

2.  Clone este repositório:

-   `git clone https://github.com/gabriel-ramos44/customer-management-frontend.git`

-   Navegue até o diretório do projeto:

-   `cd customer-management-frontend.git`

-   Instale as dependências:

`	npm install`


## Executando o Projeto

Para o bom funcionamento da aplicação é necessária a execução da [API](https://github.com/gabriel-ramos44/customer-management-api/tree/main) referente ao projeto.
1.   Configure as credenciais de acesso no arquivo `.env` de acordo com o exemplo dado no arquivo `.env.example`.
2.  Após a instalação das dependências, execute o seguinte comando para iniciar o aplicativo:



3.  `npm start`

4.  Você pode acessar [http://localhost:3000](http://localhost:3000).




## Funcionalidades Principais

-   **Adicionar Cliente**: Crie novos registros de clientes, incluindo nome, e-mail, telefone, e coordenadas X e Y.

-   **Lista de Clientes**: Visualize todos os clientes em uma tabela com a opção de filtrar por nome, e-mail e telefone.

-   **Excluir Cliente**: Remova um cliente da lista com o botão "Excluir" na tabela.

-   **Rota Otimizada**: Visualize uma rota otimizada para visitar os clientes, alternando entre a visualização de lista e um plano cartesiano.

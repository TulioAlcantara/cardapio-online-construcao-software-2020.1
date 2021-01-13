# Cardápio Online

Sistema que permite aos restaurantes disponibilizarem de maneira simples e fácil seu cardápio online e receber pedidos via WhatsApp. 

# Stack

* **Angular 9** - Front-End
    * **Material** - Estilo
    * **Karma** - Teste Unitário
* **Firebase** - Back-End
    * **Firestore** - Banco de Dados
    * **Firebase Storage** - Banco de Arquivos
    * **Firebase Hosting** - Hospedagem
* **GitHub Actions** - CI/CD

# Arquitetura

![alt text](https://github.com/TulioAlcantara/cardapio-online-construcao-software-2020.1/blob/main/documentation/Architeture.jpeg?raw=True)

O sistema utiliza dos componentes do Angular como "View" e "Controller", que são responsáveis por escutar as requisições do cliente e renderezirar a página resultado. Os componentes acionam os serviços para buscar os dados que serão usados na construção da página, esses serviços são responsáveis pela comunicação com o Banco de Dados e Banco de Arquivos, ambos hospedados no Firebase. Uma vez que os dados do Firebase são obtidos, os mesmos são retornados como JSON e transformados em objetos TypeScript definidos nos Modelos.

# Passo-a-passo para excução

* Instale o [Node](https://nodejs.org/en/) em sua maquina;
* Execute o comando `npm install` dentro da pasta raiz do projeto para instalar as dependências;
* Execute o comando `ng serve` para construir o projeto e hospedar ele localmente na URL `http://localhost:4200/` (Todas as mudanças no código serão recarregadas autómaticamente nessa URL);
* Execute o comando  `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).

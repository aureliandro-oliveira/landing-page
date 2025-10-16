# Landing Page Simples

Esta é uma landing page simples criada como um projeto de exemplo.

## Descrição

A landing page possui as seguintes seções:

*   **Cabeçalho:** Com o logotipo e o menu de navegação.
*   **Projetos:** Uma seção com um carrossel de imagens para mostrar os projetos.
*   **Quem Somos:** Uma seção com uma breve descrição sobre a empresa.
*   **Rodapé:** Com o logotipo, links para redes sociais e informações de direitos autorais.

## Tecnologias Utilizadas

*   HTML5
*   CSS3
*   JavaScript

## Como Usar

Este projeto possui duas versões:

*   **Desenvolvimento:** Para visualizar a versão de desenvolvimento, basta abrir o arquivo `index.html` em seu navegador. Nesta versão, os arquivos CSS são carregados individualmente para facilitar a depuração e a manutenção.
*   **Produção:** Para criar a versão de produção, você precisa ter o Node.js instalado. Em seguida, execute o seguinte comando no terminal para combinar os arquivos CSS:

    ```
    npm run build:css
    ```

    Isso criará o arquivo `style.css` no diretório `src/css`. Para visualizar a versão de produção, comente os links para os arquivos CSS individuais no `index.html` e descomente o link para o `style.css`.

## Melhorias Implementadas

Este projeto foi refatorado para melhorar a qualidade do código, a manutenibilidade e o desempenho. As seguintes melhorias foram implementadas:

*   **Estrutura de CSS Modular:** O CSS foi dividido em arquivos modulares para facilitar a manutenção durante o desenvolvimento.
*   **Processo de Build de CSS:** Foi adicionado um processo de build simples para concatenar os arquivos CSS em um único arquivo (`style.css`) para produção, reduzindo o número de requisições HTTP.
*   **CSS Refatorado:** O CSS foi refatorado para usar variáveis (propriedades personalizadas) para cores e outros valores, e para reduzir a duplicação de código.
*   **HTML Semântico:** O HTML foi atualizado para usar tags mais semânticas, melhorando a estrutura e a acessibilidade da página.
*   **Acessibilidade:** Foram adicionados atributos ARIA e `alt` mais descritivos para melhorar a acessibilidade da página.
*   **JavaScript Moderno:** O JavaScript foi refatorado para usar recursos modernos da linguagem, como `const`, `let` e arrow functions, e para melhorar o tratamento de erros.

# Teste Técnico Auvo Tecnologia

## 📌 Introdução

Este repositório contém a implementação de testes automatizados de
front-end utilizando **JavaScript** e **Playwright** como teste técnico para vaga de Analista de Qualidade de Software(QA) Pleno.

Repositório:
[teste-tecnico-auvo-tecnologia](https://github.com/brunockutzke/teste-tecnico-auvo-tecnologia)

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   [Node.js](https://nodejs.org/) -- Ambiente de execução JavaScript
-   [Playwright](https://playwright.dev/) -- Framework de automação de
    testes para navegadores
-   [npm](https://www.npmjs.com/) -- Gerenciador de pacotes

------------------------------------------------------------------------

## 📂 Estrutura do repositório

A organização dos arquivos segue a seguinte estrutura:

    .
    ├── .github/              # Conjunto de testes automatizados
    │   ├── workflows # Pasta que contém o script relacionado a pipeline de CI do projeto
    │   ├── playwright.yml # Arquivo contendo o script necessário para a criação da pipeline de CI
    ├── page-objects/              # Contém o conjunto de classes necessárias para automação do projeto utilizando Page Object Model(POM)
    ├── playwright-report/              # Pasta temporária, gerada a cada execução dos testes, contendo o relatório da execução
    ├── tests/              # Conjunto de testes automatizados
    │   ├── purchaseFlow.spec.js # Arquivo contendo o caso de teste automatizado
    ├── .gitignore              # Arquivo contendo descrição de quais pastas e arquivos não devem subir para o repositório remoto
    ├── playwright.config.js # Configuração global do Playwright
    ├── package.json         # Dependências e scripts npm
    └── README.md            # Documentação do projeto

------------------------------------------------------------------------

## 🎯 Objetivo de cada grupo de arquivos

-   **.github/**: Contém a estrutura padrão do GitHub para criação de uma pipeline de CI
-   **page-objects/**: Contém o conjunto de classes necessárias para automação do projeto utilizando Page Object Model(POM)
-   **playwright-report/**: Pasta temporária, gerada a cada execução dos testes, contendo o relatório da execução
-   **tests/**: Contém todos os arquivos de teste automatizado escritos
    em Playwright.
-   **.gitignore/**: Arquivo contendo descrição de quais pastas e arquivos não devem subir para o repositório remoto
-   **playwright.config.js**: Define configurações globais como
    navegador padrão, timeout, diretórios de saída e reporter.
-   **package.json**: Lista dependências do projeto e scripts para
    facilitar a execução dos testes.
-   **README.md**: Documento de instruções e guia de uso do repositório.

------------------------------------------------------------------------

## ⚙️ Modo de instalação e execução do projeto

1.  **Clonar o repositório**

    ``` bash
    git clone https://github.com/brunockutzke/teste-tecnico-auvo-tecnologia.git
    cd teste-tecnico-auvo-tecnologia
    ```

2.  **Instalar dependências**

    ``` bash
    npm install
    ```

3.  **Instalar demais dependências específicas do playwright**

    ``` bash
    npx playwright install
    ```

4.  **Executar os testes**

    -   Rodar todos os testes:

        ``` bash
        npx playwright test
        ```

    -   Abrir no modo interativo (UI):

        ``` bash
        npx playwright test --ui
        ```

    -   Rodar em um navegador específico:

        ``` bash
        npx playwright test --project=chromium
        ```

------------------------------------------------------------------------

## 🚀 Execução no GitHub Actions

Este projeto já está configurado para rodar os testes automaticamente
via **GitHub Actions**.
O workflow está definido no diretório `.github/workflows/`, garantindo
que, a cada push ou pull request, os testes sejam executados em ambiente
de integração contínua.

### Como funciona:

-   Ao enviar código para o repositório, o GitHub Actions dispara o
    fluxo de trabalho.
-   As dependências são instaladas e os testes são executados em
    máquinas virtuais hospedadas pelo GitHub.
-   O resultado dos testes pode ser acompanhado na aba **Actions** do
    repositório.

👉 O usuário não precisa de nenhuma configuração adicional além de
manter o repositório atualizado.


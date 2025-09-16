
# Calculadora Simples com Next.js

Este é um projeto de uma calculadora web simples, construída com o objetivo de praticar e demonstrar o uso de Next.js, React e CSS Modules para a criação de componentes estilizados.

## Visão Geral

A aplicação apresenta uma calculadora com as operações aritméticas básicas. A interface foi desenvolvida de forma componentizada, e a estilização é modular e organizada, com uma distinção clara entre estilos globais e estilos de componentes.

## Tecnologias Utilizadas

  * **Next.js**: Framework React para renderização no servidor e geração de sites estáticos.
  * **React**: Biblioteca JavaScript para construir interfaces de usuário.
  * **CSS Modules**: Para estilização local e componentizada, evitando conflitos de nomes de classes.
  * **Geist Font**: Fonte moderna utilizada no layout principal da aplicação.

## Estrutura de Arquivos

O projeto está organizado da seguinte forma:

```
.
├── app/
│   ├── components/
│   │   ├── Calculator.js         # Componente principal da calculadora
│   │   ├── Display.js            # Componente da tela de exibição
│   │   └── Button.js             # Componente de botão
│   ├── styles/
│   │   ├── Button.module.css     # Estilos para os botões
│   │   ├── Calculator.module.css # Estilos para o corpo da calculadora
│   │   ├── Container.module.css  # Estilos para o container principal
│   │   └── Display.module.css    # Estilos para a tela de exibição
│   ├── globals.css               # Estilos globais da aplicação
│   ├── layout.js                 # Layout raiz da aplicação
│   └── page.js                   # Página inicial que renderiza a calculadora
└── public/
    └── favicon.ico               # Ícone da aplicação
```

## Como Executar o Projeto Localmente

Para executar este projeto em sua máquina local, siga os passos abaixo.

1.  **Clone o repositório:**

    ```bash
    git clone <https://github.com/MaurilioSemeao/calculadora-nextjs.git>
    ```

2.  **Navegue até o diretório do projeto:**

    ```bash
    cd <app/page.js>
    ```

3.  **Instale as dependências:**
    Use `npm` ou `yarn` para instalar os pacotes necessários.

    ```bash
    npm install
    # ou
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    Este comando iniciará a aplicação em modo de desenvolvimento.

    ```bash
    npm run dev
    # ou
    yarn dev
    ```

5.  **Acesse a aplicação:**
    Abra seu navegador e acesse [http://localhost:3000](http://localhost:3000) para ver a calculadora em funcionamento.

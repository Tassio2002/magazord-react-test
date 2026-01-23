This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Instruções adcionais
- Caso enfrente problemas com o limite de requisições de 60/hora da api do github, basta criar um arquivo .env.local e adicionar uma variável de ambiente GITHUB_TOKEN e gerar um token de acesso no seu github.

# Estrutura do projeto
- Na pasta types, encontram-se os arquivos de tipagem do projeto
- Na pasta api, encontram-se as rotas utilizadas no projeto
- Na pasta components, encontram-se os componentes individuais do projeto
- No caminho de pastas repositories/[owner]/[repo], encontra-se a página de detalhes dos repositórios
- Na pasta store, encontram-se os arquivos de estado global utilizando o zustend

# Ferramentas utilizadas
- NextJS 16.1.4
- TypeScript
- TailwindCSS
- Zustend
- React-query
- react-icons

# Funcionalidades entregues
- Carregamento de dados da API do github.
- Listagem de repositórios.
- Dados de perfil de usuário do github.
- Busca de repositório por nome através da barra de pesquisa ao pressionar a tecla enter.
- Filtragem de repositórios por tipo e linguagem principal, funcionando simultaneamente.
- Seleção de repositórios entre repositórios proprios e favoritados via tabs.
- Rota para página de detalhes do repositório ao clicar em algum.
- Botão de voltar da página de detalhes para home page.

# Desafios/Problemas durante a execução do projeto
> Não tive tanto tempo para a realização do projeto, por conta de outras demandas mas dediquei todo o que pude, comecei na quarta-feira a noite. Como não tinha tempo de sobra pensei da mesma forma que pensaria atuando num projeto real com prazo apertado, foquei em entregar as funcionalidades, para que as regras de negócio fossem concluídas, a partir daí refatorei um pouco. Tirando essa questão o único "desafio" foi aprender a usar o react-query, pois, ainda não havia trabalhado com ele, mas foi uma experiencia muito boa, é uma ferramenta excelente.
> 

# Melhorias
- Os nomes de alguns componentes podem ser mais claros.
- Algumas funções como a fetcher poderia ser abstraída para uma pasta utils por exemplo, para ser de fácil acesso em todo projeto sem precisar reescrevê-la.
- A componentização pode melhorar muito, existem diversos items duplicados que poderiam ser componentes individuais sendo chamados e montados dentro do componente pai. A exemplo temos a quantidade de estrelas e forks no componente RepoItem.
- A estrutura de pastas também pode ficar mais clara, com divisão entre componentes de UI e componentes de montagem, principalmente levando em consideração um projeto crescente.
- Poderia ter uma variável global para colocar apenas o nome de usuário do github para trocar facilmente os dados.
- Na estilização, muitas vezes cores foram colocadas direto no jsx(tsx) com hexadecimal, poderiam ter sido pré-configuradas no tailwindcss, já que seriam utilizadas diversas vezes.
- A página de detalhes poderia estar melhor estilizada e conter um volume maior de dados, como pull requests e issues.
- O projeto está com um bug, que não resolvi por conta do tempo, ao clicar em um repositório, ser direcionado a página de detalhes, voltar para página inicial e clicar em outro repositório, apesar da rota no navegador está correta, ele carrega sempre os dados da primeira, provavelmente o estado não está sendo alterado.
- Também por conta do tempo não consegui trabalhar na responsividade da aplicação, logo só está correta no desktop.

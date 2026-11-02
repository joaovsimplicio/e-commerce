# Next Store

## Sobre o projeto

<!--
TODO(jv): escreva esta seção (1 a 2 parágrafos).
  - O que é: e-commerce de teclados mecânicos com marcas e produtos fictícios.
  - Por que existe: projeto de portfólio, e o que você quer mostrar com ele.
  - Destaques planejados: configurador visual, drops limitados, assistente com IA local.
Pronto quando: alguém que nunca viu o projeto entende o que é em 30 segundos de leitura.
Dica: escreva para um recrutador, não para um dev. Depois apague este comentário.
-->

## Stack

- [Next.js 16](https://nextjs.org) (App Router), React 19 e TypeScript
- [Tailwind CSS v4](https://tailwindcss.com)
- [Vitest](https://vitest.dev) para testes
- ESLint e Prettier (com ordenação de classes do Tailwind)

## Rodando localmente

Requisitos: Node.js 22+.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando                | O que faz                              |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Servidor de desenvolvimento            |
| `npm run build`        | Build de produção                      |
| `npm run start`        | Roda o build de produção               |
| `npm run lint`         | ESLint                                 |
| `npm run format`       | Formata o código com Prettier          |
| `npm run format:check` | Verifica a formatação sem alterar nada |
| `npm test`             | Roda os testes uma vez                 |
| `npm run test:watch`   | Roda os testes em modo watch           |

## Convenções

- Uma branch por feature (`feat/cart`, `chore/setup`), integrada à `main` por Pull Request.
- Commits pequenos no padrão [Conventional Commits](https://www.conventionalcommits.org), em inglês.
- Rotas e código em inglês; textos da interface em português.

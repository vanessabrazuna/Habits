# 🧩 Habits - Backend

Backend para uma aplicação de **rotina de hábitos diários**, desenvolvido com **Fastify**, **Prisma** e **TypeScript**.
O objetivo é fornecer uma API rápida, segura e tipada para gerenciar hábitos, permitindo **criar, acompanhar e marcar hábitos concluídos ao longo do dia**.

---

## 🚀 Tecnologias

* ⚡ [Fastify](https://fastify.dev/) — servidor web rápido e eficiente
* 🗄️ [Prisma](https://www.prisma.io/) — ORM moderno para banco de dados
* 🔐 [Zod](https://zod.dev/) — validação de dados
* 📅 [Day.js](https://day.js.org/) — manipulação de datas
* 📘 [TypeScript](https://www.typescriptlang.org/) — tipagem estática para JS

---

## 🔧 Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/seu-usuario/habits-backend.git
cd habits-backend
npm install
```

---

## 🗄️ Banco de Dados

Crie o arquivo `.env` na raiz e configure sua conexão:

```env
DATABASE_URL="file:./dev.db"
```

Depois, rode as migrations:

```bash
npx prisma migrate dev
```

E popule o banco (opcional):

```bash
npx prisma db seed
```

---

## ▶️ Rodando o servidor

```bash
npm run dev
```

O backend iniciará em:
👉 `http://localhost:3333`

---

## 📜 Scripts

* `npm run dev` → inicia em modo desenvolvimento
* `npx prisma migrate dev` → aplica migrations
* `npx prisma studio` → abre painel gráfico do Prisma
* `npx prisma db seed` → roda o seed configurado

---

## 📌 Exemplo de Rota

```http
GET /hello
```

**Resposta:**

```json
{
  "message": "Hello, world!"
}
```

---

## ✨ Autor(a)

Feito com 💜 por **Vanessa Brazuna**

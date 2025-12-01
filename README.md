# 🌸 Site Institucional — Associação Violeta Eliz

Repositório do site institucional da **Associação Cultural e Educacional Violeta Eliz**

A **Associação Cultural e Educacional Violeta Eliz** atua desde 2014 na Favela Morro da Mandioca (SP), promovendo inclusão social, educação, cultura e geração de renda para jovens e adultos em situação de vulnerabilidade.

---

# 🚀 Tecnologias Principais

* **Next.js**
* **TypeScript**
* **TailwindCSS**
* **Zustand**
* **React Hook Form + Zod**
* **Axios**
* **Docker + Docker Compose**
* **PostgreSQL**

---

# 📦 Requisitos

* **Node.js 22**
* **Docker** e **Docker Compose**
* **npm**

---

# 🔧 Desenvolvimento

### ▶️ Rodando localmente com Docker (recomendado)

```sh
docker compose -f compose-dev.yaml up --build
```

A aplicação será iniciada com Next.js no ambiente de desenvolvimento e com todos os serviços necessários (incluindo PostgreSQL, se as variáveis de ambiente estiverem definidas ).

---

# ⚙️ Variáveis de Ambiente

As variáveis de ambiente estão no arquivo [.env.example](./.env.example). Alguns serviços dependem dessas variáveis.


### Observações importantes

* O projeto funciona sem as variáveis definidas, mas parte das funcionalidades (formulários, logins, envios de e-mail) **não funcionará sem** as variáveis corretas.
* Para desenvolvimento, configure um `.env` com valores de teste (ex.: sandbox do PayPal, e-mail app password, PostgreSQL do Docker etc.).


# 🏗️ Arquitetura do Projeto

O projeto segue o padrão [Bulletproof React](https://github.com/alan2207/bulletproof-react), organizado em features e camadas independentes.

### Estrutura resumida

```
src/
 ├─ app/               # Rotas (Next.js App Router)
 │   ├─ api/           # API Routes
 │   ├─ *pages*        # Páginas públicas
 │   └─ globals.css
 │
 ├─ assets/            # Imagens, SVGs, mídias
 ├─ components/        # Componentes globais reutilizáveis
 ├─ features/          # Módulos completos (tela + lógica + serviços)
 ├─ hooks/             # Hooks compartilhados
 ├─ types/             # Tipos globais
 └─ zustand-store/     # Store global
```

# 🚢 Deploy

O website esta hospedado na seguinte URL: https://violetaeliz.org.br/


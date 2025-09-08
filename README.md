# User Data Dashboard

Um dashboard moderno para visualização de dados de usuários, construído com React, TypeScript, Next.js, Tailwind CSS e Framer Motion.

## 🚀 Características

- **Interface Moderna**: Design dark theme com cores personalizadas
- **Responsivo**: Tabela adaptável com container queries
- **Animações Suaves**: Transições e micro-interações com Framer Motion
- **TypeScript**: Tipagem forte para melhor desenvolvimento
- **Componentes Modulares**: Arquitetura limpa e reutilizável

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utilitária
- **Framer Motion** - Animações e transições
- **React 18** - Biblioteca de interface

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd user-data-dashboard
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🚀 Deploy no Vercel

### Opção 1: Deploy Automático via GitHub

1. Faça push do código para um repositório GitHub
2. Conecte sua conta GitHub ao Vercel
3. Importe o projeto no Vercel
4. O deploy será feito automaticamente

### Opção 2: Deploy via Vercel CLI

1. Instale o Vercel CLI:
```bash
npm i -g vercel
```

2. Execute o deploy:
```bash
vercel
```

3. Siga as instruções no terminal

### Configurações do Vercel

O projeto já está configurado com:
- `vercel.json` com configurações otimizadas
- Build command: `npm run build`
- Output directory: `.next`
- Framework: Next.js

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais e Tailwind
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Página inicial
├── components/
│   ├── Header.tsx           # Cabeçalho com botões
│   ├── DataTable.tsx        # Tabela de dados
│   └── Pagination.tsx       # Componente de paginação
├── types/
│   └── user.ts              # Tipos TypeScript
├── package.json             # Dependências e scripts
├── tailwind.config.js       # Configuração do Tailwind
├── tsconfig.json            # Configuração do TypeScript
├── next.config.js           # Configuração do Next.js
└── vercel.json              # Configuração do Vercel
```

## 🎨 Personalização

### Cores
As cores podem ser personalizadas no arquivo `tailwind.config.js`:

```javascript
colors: {
  'dark-bg': '#141118',
  'dark-border': '#302839',
  'primary-purple': '#9234ef',
  // ... outras cores
}
```

### Animações
As animações podem ser ajustadas nos componentes usando Framer Motion:

```tsx
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
```

## 📱 Responsividade

O projeto utiliza container queries para tornar a tabela responsiva:
- Colunas são ocultadas baseadas no tamanho do container
- Breakpoints: 120px, 240px, 360px, 480px

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Executa build de produção
- `npm run lint` - Executa linter


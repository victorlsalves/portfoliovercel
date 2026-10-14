# Colocar o portfólio no ar no Vercel

Este site é um app TanStack Start: ele tem uma parte de servidor (SSR e server
functions), então precisa de um host que execute JavaScript — hospedar só
arquivos estáticos não funciona. O build já está preparado para o Vercel.

## Opção A — enviar a pasta direto pelo terminal (mais rápido)

```bash
npm i -g vercel          # instala a ferramenta (uma vez só)
cd portfolio             # pasta que está dentro do zip
vercel login             # entra na sua conta
vercel                   # primeira vez: cria o projeto (aceite as sugestões)
vercel --prod            # publica a versão definitiva
```

No final o comando imprime a URL pública do site.

## Opção B — conectar ao GitHub (deploy automático a cada envio)

1. Suba a pasta para um repositório no GitHub (ou GitLab/Bitbucket).
2. Em [vercel.com](https://vercel.com): **Add New → Project → Import** e escolha
   o repositório.
3. Confira as configurações:
   - **Build Command**: `npm run build`
   - **Install Command**: `npm install`
   - **Output Directory**: deixe vazio (não preencha)
   - **Node.js**: 22 (o arquivo `.nvmrc` já define isso)
4. Clique em **Deploy**. Cada novo commit publica o site de novo.

## Testar antes de publicar

```bash
npm install
npm run build                  # gera .vercel/output (formato do Vercel)
vercel deploy --prebuilt --prod
```

## O que já está configurado no projeto

| Arquivo | Para que serve |
| --- | --- |
| `vite.config.ts` | Diz ao build gerar a saída do Vercel (`nitro: { preset: "vercel" }`) |
| `vercel.json` | Fixa os comandos de instalar e construir |
| `.nvmrc` | Pede o Node.js 22 |
| `public/perfil.jpg` | Sua foto da capa, servida pelo próprio site |
| `public/victor-linhares-alves-cv.pdf` | Seu currículo, baixado pelo botão "Baixar CV" |

A foto e o currículo agora viajam dentro do projeto, então aparecem em qualquer
host — Lovable, Vercel ou um servidor seu.

## Domínio próprio

Depois de publicado: painel do Vercel → seu projeto → **Settings → Domains →
Add** e siga as instruções de DNS.

## Se algo não funcionar

- **Build falha no Vercel**: confirme o Node 22 e que o `Output Directory` está
  vazio.
- **Abre, mas a foto ou o PDF não carregam**: veja se `public/perfil.jpg` e
  `public/victor-linhares-alves-cv.pdf` estão no repositório.
- **404 ao atualizar a página**: o deploy precisa incluir a parte de servidor —
  use `vercel` e não uma hospedagem de arquivos estáticos.
- **Quer continuar editando no Lovable**: o preview do editor não muda, porque o
  build do Lovable usa o próprio alvo (Cloudflare).

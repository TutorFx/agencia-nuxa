# Agência Nuxa - Website

Confira a documentação do Nuxt 3 para aprender mais.

## Configuração

Certifique-se de instalar as dependências:

```bash
yarn install
```

## Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento em `http://localhost:3000`:

```bash
yarn dev
```

## Produção

Construa a aplicação para produção:

```bash
yarn build
```

Visualize localmente a construção de produção:

```bash
yarn preview
```

Confira a documentação de implantação para mais informações.

## Configuração do Projeto Agência Nuxa

Para iniciar o projeto, você precisará configurar algumas variáveis de ambiente no arquivo `.env`. Aqui estão as variáveis necessárias:

```
private_key= <sua chave privada>
client_email= <seu email do cliente>
SHEET_ID= <seu ID da planilha>
CTF_SPACE_ID= <Contentful Space ID>
CTF_CDA_ACCESS_TOKEN= <Contentful Token>
```

Substitua `<sua chave privada>`, `<seu email do cliente>`, `<seu ID da planilha>`, `<Contentful Space ID>` e `<Contentful Token>` pelos valores correspondentes.

## Como obter as credenciais da API do Google Sheets

Para obter as credenciais da API do Google Sheets, você pode seguir os seguintes passos:

1. Faça login com sua conta do Google na área reservada onde permite configurar APIs do Google, a partir deste URL: console.cloud.google.com/apis/library.
2. Se você já tem projetos criados, basta clicar no projeto selecionado e depois, clicar em NOVO PROJETO. Caso não tenha nenhum projeto criado, basta pesquisar por novo projeto e criar um novo projeto.
3. Informe o nome do projeto e clique em CRIAR.
4. Após o projeto ser criado, você será direcionado para a tela de permissão OAuth.
5. Você deve primeiramente, clicar em selecionar projeto, para que seja selecionado o projeto que você acabou de criar.
6. Escolha a opção Externo e clique em Criar.
7. Ao clicar em Criar no passo 6, você verá a tela seguinte, e precisará fornecer as devidas informações; após fornecer os dados obrigatórios, ao final da página clique em Salvar e continuar.
8. Na próxima tela, clique em salvar para as etapas e na última clique em Voltar para o painel no final da página.
9. Agora, você precisará ativar as APIs do google drive e Google Sheets, então vá em APIs e serviços ativos e clique em ATIVAR APIS E SERVIÇOS.
10. Procure pelas APIS do Google Drive e Google Sheets para ativar.
11. Clique para Ativar a API Google Sheets.
12. Clique para Ativar a API Google Drive API.

### Usando credenciais em ambiente local:

1. Após ter ativado as APIs, clique na opção “Credenciais”.
2. Clique em "CRIAR CREDENCIAIS" e depois "ID do Cliente OAUTH".
3. Selecione a opção “App para computador”.
4. Informe o nome e clique no botão “CRIAR”.
5. Baixe o arquivo JSON.
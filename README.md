# reservamais

# Guia de uso de versão inicial

Bem vindo ao reservamais! Um software dedicado para organização de reservas de salas de aula para qualquer instituição.
Aqui você vai encontrar os requisitos e ações necessárias para testar a versão em desenvolvimento do projeto, segue abaixo ⬇️

# Requisitos

- Visual Studio Code
- Node Package Manager
- Qualquer plataforma de API (como Postman ou Insomnia)
- pgAdmin (PostgreSQL)

# Configuração e execução

1. Abra a pasta completa do projeto em sua workspace do VSCode
   - Arquivo > Abrir pasta
     ou
   - Arquivo > Adicionar pasta ao espaço de trabalho

2. No projeto aberto no VSCode, abra o arquivo main.ts, localizado no caminho back/src/main.ts

3. Preencha essas variáveis abaixo com os dados para conexão do seu banco de dados Postgre:
  ![image](https://github.com/user-attachments/assets/cade6136-1067-407b-adec-fa162b3bdb21)

4. Usando o atalho Ctrl + ' crie dois terminais de cmd
   - ![image](https://github.com/user-attachments/assets/4c07e859-3199-48a4-aac9-888f6ceef1a0)
     Clicando na seta ao lado do ícone + selecione "Command Prompt" e repita esse passo novamente
     Depois, arraste um dos terminais cmd que foram criados para dentro do espaço do terminal, o que vai resultar em dois terminais divididos na mesma tela

5. Em um dos terminais, digite o comando "cd ./back" e no outro, digite "cd ./front".

6. No terminal que está rodando no caminho reservamais/back, digite o comando "npm i"
    Isso deve instalar todas as dependências necessárias do projeto

7. Após finalizar a instalação das dependências e configuração do banco de dados:
     - No terminal reservamais/back, execute o comando "npm run start"
     - No terminal reservamais/front, execute o comando "ng serve"

8. Agora, no navegador de sua preferência, basta acessar o endereço configurado com base em seu servidor. No caso de um servidor local:
    http://localhost:4200/

# Rotas para testes na plataforma de API

- Usuários
   -   GET, POST              localhost:4200/usuarios
   -   GET ID, PATCH, DELETE  localhost:4200/usuarios/:id

- Instituições
   -   GET, POST              localhost:4200/instituicoes
   -   GET ID, PATCH, DELETE  localhost:4200/instituicoes/:id

- Blocos
   -   GET, POST              localhost:4200/instituicoes/:instituicaoId/blocos
   -   GET ID, PATCH, DELETE  localhost:4200/instituicoes/:instituicaoId/blocos/:id

- Salas
   -   GET, POST              localhost:4200/instituicoes/:instituicaoId/blocos/:blocoId/salas
   -   GET ID, PATCH, DELETE  localhost:4200/instituicoes/:instituicaoId/blocos/:blocoId/salas/:id

- Horários
   -   GET, POST              localhost:4200/instituicoes/:instituicaoId/horarios
   -   GET ID, PATCH, DELETE  localhost:4200/instituicoes/:instituicaoId/horarios/:id

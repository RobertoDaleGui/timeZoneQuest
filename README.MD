# Exercício prático entrevista CLOUD
Roberto D'Alessandro Guimarães

## Setup
- NodeJS 18+
- AWS CLI V2
- VS Code
- Windows/Linux

## Execução local
- Abra o projeto no VS Code
- Abra o terminal integrado
- Pressione "F5"
- Inspecione os logs

## Deploy
- Configure o AWS CLI v2
- Execute o sh: "./infra/dploy.sh"

## Estrutura do projeto:
- ".vscode": Arquivos responsáveis pela configuração da execução local do projeto;
- "local_scripts": Arquivos responsáveis pela execução local do projeto e eventos simulados;
- "infra": arquivos responsavei pelo deploy do projeto na aws;
- "src": codigo fonte da lambda
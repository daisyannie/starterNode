# starterNode
API desenvolvida para aplicar os conhecimentos do curso de Node.js da rocketseat.
Abaixo detalhei todas as dependências necessárias para possibilitar a execução, bem como os comandos executados.

Cria o package.json, que grava a informação da versão das dependências do projeto:
npm init -y

npm install express
O express ajuda lidar com rotas e views.

package-lock.json
É apenas para cache.
Pra não tentar instalar o que já tá instalado.

Inicializa o servidor, pode abrir o navegador depois com localhost:3001 que já acessa:
node server.js

Faz automaticamente a reinicialização do servidor toda vez que tiver alteração de código:
npm install -D nodemon

Inclui a linha dev:
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon server.js"
  },
Aí pode executar com:
npm run dev

Instalar a docker (download no site)

Faz o download da imagem:
docker pull mongo

O mongodb usa a porta 27017.
Temos que indicar que essa porta da máquina deve acessar a porta do mongodb.
docker run --name mongodb -p 27017:27017 -d mongo

Ver o status das dockers
docker ps -a

Depois que reinicia a máquina, rodar só esse:
docker start <nome>

Baixar o Mongo 3T:
robomongo.org
Download Robo 3T

Encapsula a lógica das operações do banco de dados através de código
Ao invés de usar a linguagem do banco de dados, sempre vamos usar só código javascript,
pra fazer insert, update, etc.
npm install mongoose

Faz o require em todos arquivos de models do diretório, não um só:
npm install require-dir

Permite fazer paginação no GET:
npm install mongoose-paginate

Permitir acesso externo à API:
npm install cors

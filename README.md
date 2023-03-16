## Descrição
  
  Uma api feita em Typescript e MongoDB (Mongoose) para gerenciar o banco de dados de uma concessionária de veículos. Ela consegue realizar o CRUD de carros e motos, mas pode ser expandida para outros veículos. A arquitetura é do tipo REST, em camadas MSC e o código foi escrito sob o conceito de Programação Orientada a Objetos (POO) e princípios de SOLID. Ela também conta com testes unitários para cobrir o código (100% de cobertura).
  
## Desafios
 - Escrever o código aplicando Programação Orientada a Objetos e SOLID.
 - Criar níveis de abstração intensos no código para que sua estrutura e lógica pudesse ser aplicada em diferentes cenários.
 - Desenvolver um tratamento de erros sólido em POO e que utilizasse elementos do Zod
    
## Executando a aplicação
 Realize o clone do projeto através do seguinte comando
```
git clone git@github.com:ronansalvador/car-shop.git
```
 Acesse a pasta e rode o docker compose com o comando
```
docker-compose up -d
```
Instale as dependências com o comando
```
npm install
```
 Após isso é só iniciar a aplicação com 
 ```
npm run dev
 ```

## Rotas
### Carros

|     Método    |       Função     | URL |
| ------------- | ------------------- |---- |
|POST | Cadastra um carro        | http://localhost:3009/cars |     
| GET | Retorna a lista de carros        | http://localhost:3009/cars | 
|GET | Retorna o carro pelo id       | http://localhost:3009/cars/:id | 
| PUT | Atualiza o carro pelo id        | http://localhost:3009/cars/:id | 
|DELETE | Exclui o carro pelo id       | http://localhost:3009/cars:/id | 

### Motocicletas

|     Método    |       Utilidade     | URL |
| ------------- | ------------------- |---- 
|POST | Cadastra uma motocicleta        | http://localhost:3009/motorcycles |     
| GET | Retorna a lista de motocicletas        | http://localhost:3009/motorcycles | 
|GET | Retorna a motocicleta pelo id       | http://localhost:3009/motorcycles/:id | 
| PUT | Atualiza a motocicleta pelo id        | http://localhost:3009/motorcycles/:id | 
|DELETE | Exclui a motocicleta pelo id       | http://localhost:3009/motorcycles/:id | 

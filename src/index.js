import express from "express";
import cors from "cors";
import routerProduto from "./routes/route.produto.js";
import routerPedido from "./routes/route.pedido.js";

const app = express();

app.use(express.json());
app.use(cors());

//Importante lembrar que os navegadores so executam comandos atraves do verbo HTTP get,
//por isso nós utilizamos o postman para fazer os testes.

//Rotas...
app.use(routerProduto);
app.use(routerPedido);



app.listen(3001, function(){
    console.log("Servidor executando na porta 3001")
})

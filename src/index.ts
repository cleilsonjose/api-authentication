import express, { Request, Response, NextFunction } from "express";
import statusRoute from "./routes/status.route";
import userRouter from "./routes/users.route";

const app = express();
// Configurações da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Configurações de rotas
app.use(statusRoute);
app.use(userRouter);

// Inicialização do servidor
app.listen(3000, () => {
  console.log("listening on port 3000");
});

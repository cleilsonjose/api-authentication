import express, {Request, Response, NextFunction} from 'express'
import userRouter from './routes/users.route'

const app = express()
// Configurações da aplicação
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Configurações de rotas
app.use(userRouter)

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({foo:'batata'})
})
// Inicialização do servidor
app.listen(3000, ()=>{
  console.log('listening on port 3000')
})
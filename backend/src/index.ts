import express, {type Request , type Response} from 'express'

const app = express();
const appMiddleWare = express.json();
app.use(appMiddleWare)

app.get('/', (req : Request, res : Response) => {
  res.send("It is root.")
})

app.listen(3000 , () => console.log('Backend : http:localhost:3000'))

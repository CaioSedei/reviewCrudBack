import express from 'express'
import bancodados from './config/database.js'
import router from './router/produto.js'

// import Produto from './model/produto.js' --> ganbiarra pra ver se deu certo o model

const app = express()
app.use(express.json())

app.use('/api/v1', router)

const port = 3000

bancodados.db
    .sync({ force: false })
    .then(() => {
        app.listen(port, () => {
            console.log('servidor rodando na porta' + port)
        })
    })
    .catch((e) => {
        console.log('não foi possivel conectar com o banco'+ e)
    })

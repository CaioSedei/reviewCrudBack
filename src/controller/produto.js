import ServiceProduto from "../service/produto.js"

class ControllerProduto {

    async PegarTodos (req, res) {
        try {
            const produtos = await ServiceProduto.PegarTodos()
            res.status(200).send({
                data: produtos
            })
        } catch (error) {
            res.status(500).send({ mgs: error.message })
        }
    }

    async PegarUm (req, res) {
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({ mgs: error.message })
        }
    }

    async Criar (req, res) {
        try {
            const { nome, disponivel, qtde } = req.body
            await ServiceProduto.Criar(nome, disponivel, qtde)
            res.status(201).send()
        } catch (error) {
            res.status(500).send({ mgs: error.message })
        }
    }

    async Alterar (req, res) {
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({ mgs: error.message })
        }
    }

    async Deletar (req, res) {
        try {
            res.status(200).send('oi')
        } catch (error) {
            res.status(500).send({ mgs: error.message })
        }
    }


}

export default new ControllerProduto()
import Produto from "../model/produto.js";

class ServiceProdutos {

    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {
        if (!id) {
            throw new Error('Favor informar ID.')
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error('Produto não encontrado.')
        }

        return produto
    }

    async Criar(nome, disponivel, qtde) {
        await Produto.create({
            nome, disponivel, qtde
        })
    }

    async Alterar(id, nome, disponivel, qtde) {
        if (!id) {
            throw new Error('Favor preencher todas as info.')
        }
        const produtovelho = await Produto.findByPk(id)
        if (!produtovelho) {
            throw new Error('Produto não encontrado.')
        }

        produtovelho.nome = nome || produtovelho.nome
        produtovelho.disponivel = disponivel || produtovelho.disponivel
        produtovelho.qtde = qtde || produtovelho.qtde

        produtovelho.save
    }


    async Deletar(id) {
        if (!id) {
            throw new Error('Favor informar ID.')
        }
        const produto = await Produto.findByPk(id)

        if (!produto) {
            throw new Error('Produto não encontrado.')
        }

        await produto.destroy()
    }

}

export default new ServiceProdutos
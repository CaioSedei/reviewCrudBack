import Produto from "../model/produto.js";

class ServiceProdutos {

    async PegarTodos() {
        return Produto.findAll()
    }

    async PegarUm(id) {}

    async Criar(nome, disponivel, qtde) {
        await Produto.create({
            nome, disponivel, qtde
        })
    }

    async Alterar(id, nome, disponivel, qtde) {}

    async Deletar(id) {}

}

export default new ServiceProdutos
import bancodados from '../config/database.js'

class Produto {
    constructor() {
        this.model = bancodados.db.define('produtos', {
            id: {
                type: bancodados.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome: {
                type: bancodados.db.Sequelize.STRING,

            },
            disponivel: {
                type: bancodados.db.Sequelize.BOOLEAN,

            },
            qtde: {
                type: bancodados.db.Sequelize.INTEGER,

            }
        })
    }
}

export default new Produto().model
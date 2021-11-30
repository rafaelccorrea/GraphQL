const { SQLDataSource } = require('datasource-sql')

class MatriculasAPI extends SQLDataSource {
    constructor(dbConfig){
        super(dbConfig)
        this.Resposta = {
            mensagem: ''
        }
    }

    async matricularEstudante(ids){
        console.log(ids)
        const novaMatricula = {
            estudante_id: ids.estudante,
            turma_id: ids.turma,
            status: 'confirmado'
        }

        await this.db
        .insert(novaMatricula)
        .into('matriculas')
        this.Resposta.mensagem = 'Matricula confirmada!'
        return this.Resposta
    }
}

module.exports = MatriculasAPI;
import conexao from "./connection.js";

export async function listarTarefas() {
    let sql = 'SELECT * FROM TB_TAREFA';

    let resposta = await conexao.query(sql);
    let dados = resposta[0];
    
    return dados;
}

export async function inserirTarefa(tarefa) {
    let sql = `INSERT INTO TB_TAREFA(DS_TAREFA, NR_ORDEM, BT_FINALIZADO, DT_CADASTRO)
                              VALUES(?, ?, ?, ?)`

    let resposta = await conexao.query(sql, [tarefa.descricao, tarefa.ordem, tarefa.finalizado, tarefa.dataCadastro]);
    let dados = resposta[0];

    return dados;
}

export async function listarTarefasFinalizadas() {
    let sql = `SELECT * FROM TB_TAREFA 
                WHERE BT_FINALIZADO = TRUE`

    let resposta = await conexao.query(sql);
    return resposta[0];
}

export async function alterarTarefa(tarefaId, newTarefa) {
    let sql = `UPDATE TB_TAREFA 
                  SET DS_TAREFA = ?,
                      NR_ORDEM = ?,
                      BT_FINALIZADO = ?,
                      DT_CADASTRO = ?
                WHERE ID_TAREFA = ?;`

    let resposta = await conexao.query(sql, [newTarefa.descricao, newTarefa.ordem, newTarefa.finalizado, newTarefa.dataCadastro, tarefaId]);
    return resposta[0];
}

export async function deletarTarefa(tarefaID) {
    let sql = `DELETE FROM TB_TAREFA
                WHERE ID_TAREFA = ?`
    
    let resposta = await conexao.query(sql, [tarefaID]);
    return resposta[0];
}
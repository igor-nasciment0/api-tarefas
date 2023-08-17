import { Router } from 'express';
import { inserirTarefa, listarTarefas, listarTarefasFinalizadas, alterarTarefa, deletarTarefa } from '../repository/tarefasRepository.js';

let endpoints = Router();

endpoints.get('/tarefa', async (req, resp) => {
    let dados = await listarTarefas();
    resp.send(dados);
})

endpoints.post('/tarefa', async (req, resp) => {
    let newTarefa = req.body;

    let dados = await inserirTarefa(newTarefa);
    resp.send(dados);
})

endpoints.get('/tarefas/finalizadas', async (req, resp) => {
    let dados = await listarTarefasFinalizadas();
    resp.send(dados);
})

endpoints.put('/tarefas/:id', async (req, resp) => {
    let tarefaID = req.params.id;
    let newTarefa = req.body;

    let dados = await alterarTarefa(tarefaID, newTarefa);
    resp.send(dados);
})

endpoints.delete('/tarefas/:id', async (req, resp) => {
    let tarefaID = req.params.id;

    let dados = await deletarTarefa(tarefaID);
    resp.send(dados);
})

export default endpoints;
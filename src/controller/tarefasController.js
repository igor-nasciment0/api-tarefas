import { Router } from 'express';
import { inserirTarefa, listarTarefas, listarTarefasFinalizadas, alterarTarefa } from '../repository/tarefasRepository.js';

let endpoints = Router();

endpoints.get('/tarefa/listar', async (req, resp) => {
    let dados = await listarTarefas();
    resp.send(dados);
})

endpoints.post('/tarefa/new', async (req, resp) => {
    let newTarefa = req.body;

    let dados = await inserirTarefa(newTarefa);
    resp.send(dados);
})

endpoints.get('/tarefas/listar/completas', async (req, resp) => {
    let dados = await listarTarefasFinalizadas();
    resp.send(dados);
})

endpoints.put('/tarefas/alterar', async (req, resp) => {
    let tarefaID = req.body.id;
    let newTarefa = req.body.newTarefa;

    let dados = await alterarTarefa(tarefaID, newTarefa);
    resp.send(dados);
})

export default endpoints;
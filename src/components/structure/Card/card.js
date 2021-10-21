import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const tarefas = props.data;
    return(
        <Link>
        <div>
            <div id='title'>
            <p>Tarefa:{ tarefas.titulo }</p></div>
            <div id='date'>
            <p>Data:{ tarefas.data }</p></div>
            <div id='descricao'>
            <p>Descricao:{ tarefas.descricao }</p></div>
            <div id='prioridade'>
            <p>Prioridade:{tarefas.prioridade}</p></div>
            <div id='status'>
            <p>Status:{tarefas.status}</p></div>
            <div id='prazo'>
            <p>Prazo:{tarefas.prazo}</p></div>
            
        </div>
        </Link>
    )
}

export default Card;
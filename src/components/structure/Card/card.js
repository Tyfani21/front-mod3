import React from 'react';
import { Link } from 'react-router-dom';
import './card.css'

const Card = (props) => {
    const tarefas = props.data;
    return(
        <Link to={`/view/${tarefas._id}`} id='link'>
        <div id='card'>
            <div id='title'>
            <p>Tarefa:<span>{ tarefas.titulo }</span></p></div>
            <div id='text-group'>
            <p>Data:<span>{ tarefas.data }</span></p></div>
            <div id='text-group'>
            <p>Descricao:<span>{ tarefas.descricao }</span></p></div>
            <div id='text-group'>
            <p>Prioridade:<span>{tarefas.prioridade}</span></p></div>
            <div id='text-group'>
            <p>Status:<span>{tarefas.status}</span></p></div>
            <div id='text-group'>
            <p>Prazo:<span>{tarefas.prazo}</span></p></div>
            <div id='text-group'>
                <p>Etiqueta:<span>{tarefas.etiqueta}</span></p>
            </div>
        </div>
        </Link>
    )
}


export default Card;

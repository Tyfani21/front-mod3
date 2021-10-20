import React from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const tarefas = props.data;
    return(
        <Link>
        <div><label>
            <p>Tarefa:{ tarefas.tarefa }</p>
            <p>Data:{ tarefas.data }</p>
            <p>Importância:{ tarefas.cor }</p>
            </label>
        </div>
        </Link>
    )
}

export default Card;
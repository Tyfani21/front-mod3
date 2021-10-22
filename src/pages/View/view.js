import React, { useEffect } from "react";
import { useState } from "react";
import Api from "../../api/api";
import { Link } from "react-router-dom";
import {Modal} from 'react-responsive-modal';
import './view.css'
const View = (props)=>{
    const _id = props.match.params.id;
    const history = props.history;
    const [tarefas, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTarefaById()
    },[]);
    const getTarefaById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setTarefa(result);
    }


    const handleDelete = async (evento) =>{
        evento.preventDefault();
        const response = await Api.fetchDelete(_id);
        const result = await response.json();
        alert(result.message);
        history.push('/');
}
    return(
    <div id='backg'>
    < div className="col">
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
                <p>Etiqueta:<span>{tarefas.etiqueta}</span></p></div>
            
     <button> <Link to={`/edit/${tarefas._id}`} id='link' className="btn">Editar</Link></button>
      <button className="btn-danger" onClick={onOpenModal}>Excluir</button>
    </div>
<Modal open={open} onClose={onCloseModal} center>
  <h2>Deseja realmente Excluir</h2>
  <button onClick={onCloseModal}>Não</button>
  <button onClick={handleDelete}>Sim</button>
</Modal>
</div>
</div>)
}

export default View
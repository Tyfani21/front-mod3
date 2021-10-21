import React, { useEffect } from "react";
import { useState } from "react";
import Api from "../../api/api";
import { Link } from "react-router-dom";
import {Modal} from 'react-responsive-modal';

const View = (props)=>{
    const _id = props.match.params.id;
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTarefaById()
    }, []);
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
        props.history.push('/');
}
    return(< div className="col">
        <div id='title'>
    <p>Tarefa:{ tarefa.titulo }</p></div>
    <div id='date'>
    <p>Data:{ tarefa.data }</p></div>
    <div id='descricao'>
    <p>Descricao:{ tarefa.descricao }</p></div>
    <div id='prioridade'>
    <p>Prioridade:{tarefa.prioridade}</p></div>
    <div id='status'>
    <p>Status:{tarefa.status}</p></div>
    <div id='prazo'>
    <p>Prazo:{tarefa.prazo}</p></div>
    <div className="btn-group">
      <Link to={`/edit/${tarefa._id}`}  className="btn">Editar</Link>
      <button className="btn-danger" onClick={onOpenModal}>Excluir</button>
    </div>
<Modal open={open} onClose={onCloseModal} center>
  <h2>Deseja realmente Excluir</h2>
  <button className="btn btn-danger" onClick={onCloseModal}>Não</button>
  <button className="btn btn-success" onClick={handleDelete}>Sim</button>
</Modal>
</div>)
}

export default View
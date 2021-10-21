import React from 'react';
import Api from '../../api/api'



const Cadastro =(props) =>{
    const history = props.history;

    const handleSubmit = async(evento) =>{
        evento.preventDefault();

    let tituloEl = evento.target.titulo.value;
    let dataEl = evento.target.data.value;
    let descricaoEl = evento.target.descricao.value;
    let prioridadeEl = evento.target.prioridade.value;
    let statusEl = evento.target.status.value;
    let prazoEl = evento.target.prazo.value;
    let etiqueta = evento.target.etiqueta.value;

    

    const tarefas = {
        titulo: tituloEl,
        data: dataEl,
        descricao: descricaoEl,
        prioridade: prioridadeEl,
        status: statusEl,
        prazo: prazoEl,
        etiqueta,
    }
    try{
        const response = await Api.fetchPost(tarefas);
        const result = await response.json();
        alert(result.message);
        history.push('/');
    } catch(error){console.log(error);}
    }

    return(
        <div>
        <form onSubmit={handleSubmit} className="input-group">
            
           <div className='col'>
            <label className="input-group-1">
                <input name='titulo'className="input-group-name" placeholder="Digite um titulo para a tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
            <label className="input-group-2">
                <input name='data' className="input-group-data" type="date"></input>
            </label>
            </div>
            
           <div className='col'>
            <label className="input-group-1">
                <input name='descricao'className="input-group-descricao" placeholder="Digite sua tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
            <div className="input-group-1">
                <select name='status'className="input-group-status" placeholder="Selecione um status">
                <option value="fazer">Fazer</option>
                <option value="fazendo">Fazendo</option>
                <option value="feito">Feito</option>
                </select>
                
                <label htmlFor='floatingstatus'>Status</label>
            </div>
            </div>
           <div className='col'>
            <div className="input-group-1" id='floatingcor'>
                <select name='etiqueta'className="input-group-target" placeholder="Selecione uma etiqueta">
                <option id="color-r"value="red"></option>
                <option id="color-y" value="yellow"></option>
                <option id="color-p" value="pink"></option>
                </select>
                
                <label htmlFor='floatingcor'>Etiqueta</label>
            </div>
            </div>
            
           <div className='col'>
            <label className="input-group-1">
                <input name='prazo'className="input-group-prazo" type='date' placeholder="Digite um prazo"></input>
            </label>
            </div>
           <div className='col'>
            <div className="input-group-1">
                <select name='prioridade'id='floatingprioridade'className="input-group-target" placeholder="Selecione uma prioridade">
                <option value="alta">Alta</option>
                <option value="media">Media</option>
                <option value="baixa">Baixa</option>
                </select>
                <label htmlFor='floatingprioridade'>Prioridade</label>
            </div>
            </div>
                <button type='submit' >Adicionar</button>
    </form>
    </div>
    )
}

export default Cadastro;
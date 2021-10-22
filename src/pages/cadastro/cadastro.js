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
        <div >
        <form onSubmit={handleSubmit} className="input-group">
            
           <div className='col-1'>
            <label className="input-group-1">
                <h4>Título:</h4>
                <input name='titulo'className="input-group-1" placeholder="Digite um titulo para a tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
            <label className="input-group-2">
                <h4>Data de hoje:</h4>
                <input name='data' className="input-group-2" type="date"></input>
            </label>
            </div>
            
           <div className='col'>
            <h4>Descrição:</h4>
            <label className="input-group-3">
                <input name='descricao'className="input-group-3" placeholder="Digite sua tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
               <h4>Status</h4>
            <div className="input-group-4">
                <select name='status'className="input-group-4" placeholder="Selecione um status">
                <option value="Fazer">Fazer</option>
                <option value="Fazendo">Fazendo</option>
                <option value="Feito">Feito</option>
                </select>
                
                <label htmlFor='floatingstatus'></label>
            </div>
            </div>
           <div className='col'>
               <h4>Etiqueta:</h4>
            <div className="input-group-5" id='floatingcor'>
                <select name='etiqueta'className="input-group-5" placeholder="Selecione uma etiqueta">
                <option id="color-r"value="Vermelho">Vermelho</option>
                <option id="color-y" value="Amarelo">Amarelo</option>
                <option id="color-p" value="Rosa">Rosa</option>
                </select>
                
                <label htmlFor='floatingcor'></label>
            </div>
            </div>
            
           <div className='col'>
            <label className="input-group-6">
                <h4>Prazo:</h4>
                <input name='prazo'className="input-group-6" type='date' placeholder="Digite um prazo"></input>
            </label>
            </div>
           <div className='col'>
            <h4>Prioridade:</h4>
            <div className="input-group-7">
                <select name='prioridade'id='floatingprioridade'className="input-group-7" placeholder="Selecione uma prioridade">
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baixa">Baixa</option>
                </select>
                <label htmlFor='floatingprioridade'></label>
            </div>
            </div>
            <div className='col-2'>
                <button type='submit' >Adicionar</button></div>
    </form>
    </div>
    )
}

export default Cadastro;
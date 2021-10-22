import './../cadastro/cadastro.css'
import Api from "../../api/api";
import React,{useEffect, useState} from "react"
const Edicao = (props) =>{
    const _id = props.match.params.id;
    const history = props.history;

    const [tarefa, setTarefa] = useState({});
    useEffect(() => {
        getTarefaById()
    }, []);
    const getTarefaById = async () => {
        const response = await Api.fetchGetById(_id);
        const result = await response.json();
        setTarefa(result)
    }

    const handleFielChange = (event) => {
        const campos = {...tarefa};
        campos[event.target.value] = event.target.value;
        setTarefa(campos)
    }

    const handleSubmit = async (evento) =>{
        evento.preventDefault();
        const obj = {...tarefa};
    try { const response = await Api.fetchPut(obj,_id);
        const result = await response.json();
        alert(result.message);
        history.push("/");

    } catch(error){console.log(error)}
}
   
    return(
     <div >
        <form onSubmit={handleSubmit} className="input-group">
            
           <div className='col-1'>
            <label className="input-group-1">
                <h4>Título:</h4>
                <input name='titulo'className="input-group-1" value={tarefa.titulo} onChange={handleFielChange} placeholder="Digite um titulo para a tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
            <label className="input-group-2">
                <h4>Data de hoje:</h4>
                <input name='data' className="input-group-2" type="date"value={tarefa.data} onChange={handleFielChange}></input>
            </label>
            </div>
            
           <div className='col'>
            <h4>Descrição:</h4>
            <label className="input-group-3">
                <input name='descricao'className="input-group-3" value={tarefa.descricao} onChange={handleFielChange}  placeholder="Digite sua tarefa"></input>
            </label>
            </div>
            
           <div className='col'>
               <h4>Status</h4>
            <div className="input-group-4">
                <select name='status'className="input-group-4" value={tarefa.status} onChange={handleFielChange} placeholder="Selecione um status">
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
                <select name='etiqueta'className="input-group-5"value={tarefa.etiqueta} onChange={handleFielChange} placeholder="Selecione uma etiqueta">
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
                <input name='prazo'value={tarefa.prazo} onChange={handleFielChange}className="input-group-6" type='date' placeholder="Digite um prazo"></input>
            </label>
            </div>
           <div className='col'>
            <h4>Prioridade:</h4>
            <div className="input-group-7">
                <select name='prioridade'id='floatingprioridade'value={tarefa.prioridade} onChange={handleFielChange}className="input-group-7" placeholder="Selecione uma prioridade">
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baixa">Baixa</option>
                </select>
                <label htmlFor='floatingprioridade'></label>
            </div>
            </div>
            <div className='col-2'>
                <button type='submit' >Enviar</button></div>
    </form>
    </div>
    )
}
export default Edicao
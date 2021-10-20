import React from 'react';
import Api from '../../api/api'

const Cadastro =(props) =>{
    const history = props.history;

    const handleSubmit = async(evento) =>{
        evento.preventDefault();

    let tarefa = document.querySelector('.input-group-name').value;
    let data = document.querySelector('.input-group-data').value;
    let cor = document.getElementsByName('input-group-radio');
    for( var i = ""; i <cor.length; i++){
        if (cor[i].checked){
            cor = cor[i].value
        }
    }

    const tarefas = {
        tarefa,
        data,
        cor
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
            <label className="input-group-1">
                <input className="input-group-name" placeholder="Digite sua tarefa"></input>
            </label>
            <label className="input-group-2">
                <input className="input-group-data" type="date"></input>
            </label>
            <div className="importancia">
            <form className="input-group-2" for="cm_butt-red">
                <input name="input-group-radio" type="radio" value="red"/>
                
                <input  name="input-group-radio" type="radio"value="green"/>
            
                <input  name="input-group-radio" type="radio"
                value="orange"  />
         
                <input  name="input-group-radio" type="radio" value="yellow"/>
                <input  name="input-group-radio" type="radio" value="pink"/>
                </form>
                </div>
                <bottom type='submit' >Adicionar</bottom>
    </form>
    </div>
    )
}

export default Cadastro;
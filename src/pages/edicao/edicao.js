const Edicao = () =>{
    return(
        <div>
        <form onSubmit="" className="input-group">
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
export default Edicao
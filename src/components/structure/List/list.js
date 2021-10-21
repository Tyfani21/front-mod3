import Card from "../Card/card";
import Api from "../../../api/api";
import React, {  useState, useEffect } from "react";

const List = () =>{
    const [tarefas, setTarefas] = useState([]);

    useEffect(()=>{
        getTarefas();
    }, [])

   const getTarefas = async () =>{
       const response = await Api.fetchGetAll();
       const data = await response.json();
       setTarefas(data)
   }

    return(
        <section>{
            tarefas.map((tarefa, index) => (
                <Card data={tarefa} key={index}/>
            ))}
        </section>
    )
}

export default List
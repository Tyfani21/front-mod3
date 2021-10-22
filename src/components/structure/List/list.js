import Card from "../Card/card";
import Api from "../../../api/api";
import React, {  useState, useEffect } from "react";
import './list.css'
const List = () =>{
    const [tarefas, setTarefas] = useState([]);

    useEffect(()=>{
        getTarefas();
    }, [])

   const getTarefas = async () =>{
       const response = await Api.fetchGet();
       const result = await response.json();
       setTarefas(result)
   }

    return(
        <section>{
            tarefas.map((tarefa, index) => (
                <Card data={tarefa} key={index} />
            ))}
        </section>
    )
}

export default List
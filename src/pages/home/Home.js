import React from "react";
import List from "../../components/structure/List/list";

const Home = () =>{
    return(
        <section className='content'><h1 className='content-title'>To do-list</h1>
        <div className='content-list'><p>Lista de Tarefas</p>
        <List/>
            </div></section>

    )
}
export default Home
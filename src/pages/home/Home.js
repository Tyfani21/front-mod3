import React from "react";
import List from "../../components/structure/List/list";
import './home.css' 
const Home = () =>{
    return(
        <section className='home'><h1 className='content-title'>To do-list</h1>
        <div className='list'><p>Lista de Tarefas</p>
        <List/>
            </div></section>

    )
}
export default Home
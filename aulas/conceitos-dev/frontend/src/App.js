import React, { useState } from 'react'

import './App.css'
import backgroundImage from './assets/background.jpg'

import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])

    // useState retorna um array com 2 posições
    // 1. Variável com o seu valor inicial
    // 2.Função para atualizarmos esse valor

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`])

        console.log(projects)
    }

    return (
        // O Fragment é usado para retornar mais de um elemento que não estão aninhados
        <>
            <Header title="Projects"></Header>
            <img width={300} src={backgroundImage} />
            <ul>
                {projects.map((project, index) => <li key={index}>{project}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App
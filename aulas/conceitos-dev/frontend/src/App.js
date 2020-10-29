import React, { useState, useEffect } from 'react'
import api from './services/api'

import './App.css'

import Header from './components/Header'

function App() {
    const [projects, setProjects] = useState([])

    // useState retorna um array com 2 posições
    // 1. Variável com o seu valor inicial
    // 2.Função para atualizarmos esse valor

    useEffect(() => {
        api.get('projects').then(response => {
            setProjects(response.data)
        })
    }, [])

    async function handleAddProject() {
        // setProjects([...projects, `Novo projeto ${Date.now()}`])

        const response = await api.post('projects', {
            title: `Novo projeto ${Date.now()}`,
            name: "Vinicius Santos"
        })
        const project = response.data

        setProjects([...projects, project])
    }

    return (
        // O Fragment é usado para retornar mais de um elemento que não estão aninhados
        <>
            <Header title="Projects"></Header>
            <ul>
                {projects.map((project, index) => <li key={project.id}>{project.title}</li>)}
            </ul>

            <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
        </>
    )
}

export default App
import React, { useState, useEffect, FormEvent} from "react";
import { RepositoryItem } from "./RepositoryItem";
import { Container } from "./styles";


interface Repository {
        id: 'uuid';
        name: string;
        script: string;
        runtime: string;
        value: string;
        created_at: string;
    
}


export function RepositoryList() {
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //const [newRepo, setNewRepo] = useState('');
     const [busca, setBusca] = useState('');

    //consumindo api get
    useEffect(() => {
        fetch('http://localhost:3333/params/')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    async function handleAddRepository(
        event: FormEvent<HTMLFormElement>,
    ): Promise<void> {
        event.preventDefault();
    
        const rpaFiltro = repositories.filter((repository) => repository.created_at.startsWith(busca))
        console.log({rpaFiltro})
    }
    const rpaFiltro = repositories.filter((repository) => repository.created_at.startsWith(busca))
        console.log({rpaFiltro})
//map = mapeia o item 
    return(
        
        <Container>
            <form onSubmit={handleAddRepository}>
                            <input
                            type="date"
                            value={busca}
                            onChange={(e)=> setBusca(e.target.value)}
                            placeholder="Digite"
                            >
                            </input>
                            <button type="submit">Pesquisar</button>
                            
                        </form>
            <h1>Lista de Parâmetros</h1>
            <table>
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>Script</th>
                    <th>Runtime</th>
                    <th>Value</th>
                </tr>
                </thead>
                <tbody>
                    {rpaFiltro.map(repository => {
                        return <RepositoryItem key={repository.id} repository={repository} />
                    })}
                
                </tbody>
            </table>
        </Container>
    )
}
import React, { useState, FormEvent, useEffect } from "react";
import {Link} from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories, Error} from "./styles";

interface Repository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [inputError, setInputError] = useState('');
    const [repositories, setRepositories] = useState<Repository[]>([]);
    

    //sempre que criarmos um estado onde o valor dele é um array ou um objeton, é muito importante definirmos o tipo dele
    //Não precisamos tipar tudo o que há de dados, tipamos só o que iremos usar


    useEffect(() => {
        const storagedRepositories = localStorage.getItem('GithubExplorer:repositories');
        console.log(storagedRepositories)
        setRepositories(JSON.parse(storagedRepositories || '[]'));
    }, []);
    

    useEffect(() => {
        localStorage.setItem('GithubExplorer:repositories', JSON.stringify(repositories));

    }, [repositories]);


    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {

        event.preventDefault();
        
        if(!newRepo){
            setInputError('Digite o autor/nome do repositório');
            return;
            //dou um return pra parar o código
        };

        try {
            const response = await api.get(`repos/${newRepo}`);
            const repository = response.data;
    
            setRepositories([...repositories, repository]);
            setNewRepo('');
            setInputError('');

        } catch (error) {
            setInputError('Erro na busca por esse repositório');
        };

    };

    return (
        <>
            <img src={logoImg} alt="logo" />
            <Title>Explore repositórios no GitHub</Title>

            <Form 
            hasError={Boolean(inputError)}
            onSubmit={handleAddRepository}
            >
                <input
                    type="text"
                    placeholder="Digite o nome do repositório"
                    value={newRepo}
                    onChange={(event) => setNewRepo(event.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {/* if simplificado = se o inputError estiver preenchido, renderiza o componente a seguir*/}
            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map((mapRepo) => {
                    return (
                        <Link key={mapRepo.full_name} to={`/repository/${mapRepo.full_name}`}>
                            <img src={mapRepo.owner.avatar_url} alt={mapRepo.owner.login} />
                            <div>
                                <strong>{mapRepo.full_name}</strong>
                                <p>{mapRepo.description}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </Link>
                    )
                })}
            </Repositories>
        </>
    )
};

export default Dashboard;


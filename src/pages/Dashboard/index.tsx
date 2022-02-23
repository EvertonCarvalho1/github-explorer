import React, { useState, FormEvent } from "react";
import { FiChevronRight } from 'react-icons/fi';
import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from "./styles";

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
    const [repositories, setRepositories] = useState<Repository[]>([]);
    //sempre que criarmos um estado onde o valor dele é um array ou um objeton, é muito importante definirmos o tipo dele
    //Não precisamos tipar tudo o que há de dados, tipamos só o que iremos usar


    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        const response = await api.get(`repos/${newRepo}`);
        const repository = response.data;

        setRepositories([...repositories, repository]);
        setNewRepo('')
    }

    return (
        <>
            <img src={logoImg} alt="logo" />
            <Title>Explore repositórios no GitHub</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    type="text"
                    placeholder="Digite o nome do repositório"
                    value={newRepo}
                    onChange={(event) => setNewRepo(event.target.value)}
                />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                {repositories.map((mapRepo) => {
                    return (
                        <a key={mapRepo.full_name} href="teste">
                            <img src={mapRepo.owner.avatar_url} alt={mapRepo.owner.login} />
                            <div>
                                <strong>{mapRepo.full_name}</strong>
                                <p>{mapRepo.description}</p>
                            </div>

                            <FiChevronRight size={20} />
                        </a>
                    )
                })}
            </Repositories>
        </>
    )
};

export default Dashboard;


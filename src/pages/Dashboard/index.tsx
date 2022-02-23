import React, {useState, FormEvent} from "react";
import {FiChevronRight} from 'react-icons/fi';
import api from "../../services/api";

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);


    function handleAddRepository(event : FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(newRepo)
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
                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/82480230?v=4" alt="Everton" />
                    <div>
                        <strong>Devfinances</strong>
                        <p>Sistema para controlar suas finanças</p>
                    </div>

                    <FiChevronRight size={20}/>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;


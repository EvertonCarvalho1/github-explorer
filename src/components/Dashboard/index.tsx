import React from "react";

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="logo" />
            <Title>Explore repositórios no GitHub</Title>

            <Form action="">
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="">
                    <img src="https://avatars.githubusercontent.com/u/82480230?v=4" alt="Everton" />
                    <div>
                        <strong>Devfinances</strong>
                        <p>Sistema para controlar suas finanças</p>
                    </div>
                </a>
            </Repositories>
        </>
    )
};

export default Dashboard;


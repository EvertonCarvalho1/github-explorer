import React from "react";
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo } from "./styles";



interface RepositoryParams {
    paramsrepo: string;
};

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();

    return (
        <>
            <Header>
                <img src={logoImg} alt='github explorer' />

                <Link to={"/"}>
                    <FiChevronLeft
                        size={16}
                    />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img src="https://avatars.githubusercontent.com/u/82480230?v=4" alt="" />
                    <div >
                        <strong>EvertonCarvalho1/devfinances</strong>
                        <p>descrição do repositório</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>



        </>
    )
};

export default Repository;



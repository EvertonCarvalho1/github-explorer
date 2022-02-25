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
                
            </RepositoryInfo>

        </>
    )
};

export default Repository;



import React, { useState, useEffect } from 'react';
import HeaderLogo from '../../components/headerLogo/index'
import api from "../../server/api";

import { Container, Title, ContainerImg, ContainerButtons } from './styles';
import { FaLaptopCode, FaGithub, } from 'react-icons/fa'

function Portfolio() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/projetos');
            const data = response.data;
            setData(data);
        }
        fetchData();

    }, []);

    return (
        <Container>
            <HeaderLogo />
            <Title>
                <strong>Portfolio</strong>
                <span>Meus projetos</span>
            </Title>
            <ContainerImg >
                {data.map(projetos => (
                    <article key={projetos.id} >
                        <div>
                            <div >
                                <strong>{projetos.title}</strong>
                                <span>
                                    <ContainerButtons>
                                        <strong><a href={projetos.linkGithub} target="_blank" ><FaGithub size={12} /> Github</a></strong>
                                        <strong><a href={projetos.linkDemo} target="_blank"><FaLaptopCode size={12} /> Demo</a></strong>
                                    </ContainerButtons>
                                </span>
                            </div>
                            <img src={projetos.image} alt="imagem do projeto" />
                        </div>
                    </article>
                ))}
            </ContainerImg>
        </Container>
    );
}

export default Portfolio;
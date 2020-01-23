import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';


function Repositories({ user }) {

    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        async function loadRepos() {

            const response = await api.get(`${user}/repos`);
            
            setRepos(response.data);
        }

        loadRepos();
    },[user]);

    return (
        <>
            <ul className="repo-list">
                {
                    repos.map((repo,index) => (
                        <li key={index}>
                            <span>{repo.name}</span>
                            <p>{repo.description}</p>
                            <a href={repo.html_url}>Acessar no Github</a>
                        </li>
                    ))
                }
            </ul>
            <Link className="home-button" to="/"> </Link>
        </>
    )
}

export default Repositories;
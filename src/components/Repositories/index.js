import React, { useState, useEffect } from 'react';

import api from '../../services/api';

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
        <ul>
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
    )
}

export default Repositories;
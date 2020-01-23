import React, { useState, useEffect } from 'react';

import api from '../../services/api';

function Repositories() {

    const [ repos, setRepos ] = useState([]);

    useEffect(() => {
        async function loadRepos() {

            const response = await api.get(`/MickaelAraujs/repos`);
    
            setRepos(response.data);
        }

        loadRepos();
    },[repos]);

    return (
        <ul>
            {
                repos.map((repo,index) => (
                    <li key={index}>
                        <span>{repo.name}</span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Repositories;
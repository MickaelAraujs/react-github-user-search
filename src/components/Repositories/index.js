import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';


function Repositories({ user }) {

    const [ repos, setRepos ] = useState([]);
    const [ page, setPage ] = useState(1);
    const [lastPage, setLastPage] = useState(false);

    useEffect(() => {

        async function loadRepos(page = 1) {

            const response = await api.get(`${user}/repos?page=${page}`);
            
            if (response.data.length === 0) {
                setLastPage(true);
                return;
            }

            setRepos(response.data);
        
        }

        loadRepos(page);

    },[user, page]);

    function prevPage() {

        if(page === 1) return;

        setPage(page - 1);

    }

    function nextPage() {

        if(page === 4) return;

        setPage(page + 1); 

    }

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
            <button disabled={page === 1} className="page-button" id="prev" onClick={prevPage}> </button>
            <button disabled={lastPage === true} className="page-button" id="next" onClick={nextPage}> </button>
        </>
    )
}

export default Repositories;
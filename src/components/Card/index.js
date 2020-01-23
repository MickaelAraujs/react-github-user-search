import React from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

function Card({ item }) {
    return (
        <li>
            <div className="info">
                <img src={item.avatar_url} alt={item.name}/>
                <h3>{item.name}</h3>
                <span>{item.login}</span>
                <p>{item.bio}</p>
                <Link to={`/repos/${item.login}`}>Ver Repositórios</Link>
            </div>
        </li>
    );
}

export default Card;
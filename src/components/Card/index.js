import React from 'react';

import './styles.css';

function Card({ item }) {
    return (
        <li>
            <div className="info">
                <img src={item.avatar_url} alt={item.name}/>
                <h3>{item.name}</h3>
                <span>{item.login}</span>
                <p>{item.bio}</p>
                <a href={item.repos_url}>ver repositórios</a>
            </div>
        </li>
    );
}

export default Card;
import React from 'react';
import { Link }  from 'react-router-dom';

import './styles.css';

function Card({ item, deleteCard }) {

    return (
        <li>
            <div className="info">
                <img src={item.avatar_url} alt={item.name}/>
                <h3>{item.name}</h3>
                <span>{item.login}</span>
                <p>{item.bio}</p>
                <Link to={`/repos/${item.login}`}>repositories: {item.public_repos}</Link>
                <button className="card-delete" onClick={() => {
                    deleteCard(item.login);
                }}> </button>
            </div>
        </li>
    );
}

export default Card;
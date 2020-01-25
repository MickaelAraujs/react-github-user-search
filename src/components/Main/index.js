import React, { useState } from 'react';

import api from '../../services/api';

import Form from '../Form';
import Card from '../Card';

import './styles.css';


function Main() {

    const [ users, setUsers ] = useState(() => {
        return JSON.parse(localStorage.getItem('users')) || [];
    });

    async function loadUsers(user) {
        const response = await api.get(`/${user}`);
    
        const {  login, avatar_url, name, bio, repos_url,public_repos } = response.data;

        setUsers([...users, {
        login,
        avatar_url,
        name,
        bio,
        repos_url,
        public_repos
        }]);

        saveToStorage();
    }

    const saveToStorage = () => {
        localStorage.setItem('users',JSON.stringify(users));
    }

    function deleteCard(login) {
        users.forEach(user => {
            if (user.login === login) {
                const index = users.indexOf(user);
                users.splice(index,1);
                setUsers(users);
                saveToStorage();
            }
            
        })
    }

    return (
        <>
            <Form onSubmit={loadUsers} />
            <ul className="info-list">
                {
                users.map((item,index) => {
                    return (
                    <Card key={index} item={item} deleteCard={deleteCard} />
                    );
                    })
                }
            </ul>
        </>
    );
}

export default Main;

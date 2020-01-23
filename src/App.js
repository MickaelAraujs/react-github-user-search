import React, { useState } from 'react';

import api from './services/api';

import Form from './components/Form';
import Card from './components/Card';

import './styles.css';

function App() {

  const [ users, setUsers ] = useState([]);

  async function loadUsers(user) {
    const response = await api.get(`/${user}`);
    
    const {  login, avatar_url, name, bio, repos_url } = response.data;

    setUsers([...users, {
      login,
      avatar_url,
      name,
      bio,
      repos_url
    }]);
  }

  return (
    <>
      <Form onSubmit={loadUsers} />
      <ul>
        {
          users.map((item,index) => {
            return (
              <Card key={index} item={item} />
              );
            })
        }
      </ul>
    </>
  );
}

export default App;

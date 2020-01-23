import React, { useState } from 'react';
import api from './services/api';

import './styles.css';

function App() {
  
  const [ user, setUser ] = useState('');
  const [ users, setUsers ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    
    setUser('');

    loadUsers();
  }

  async function loadUsers() {
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
      <form onSubmit={handleSubmit}>
        <div className="userInput">
          <label>Github Username:</label>
          <input type="text" name="text" id="text" placeholder="your github username"
          value={user} onChange={e => setUser(e.target.value)}
          />
        </div>
        <button type="submit">Search</button>
      </form>
      <ul>
        {
          users.map((item,index) => {
            return (
              <li key={index}>
                <div className="info">
                  <img src={item.avatar_url} alt={item.name}/>
                  <h3>{item.name}</h3>
                  <span>{item.login}</span>
                  <p>{item.bio}</p>
                  <a href={item.repos_url}>ver repositórios</a>
                </div>
              </li>
              );
            })
        }
      </ul>
    </>
  );
}

export default App;

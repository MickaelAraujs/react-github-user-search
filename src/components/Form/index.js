import React, { useState } from 'react';

import './styles.css';

function Form({ onSubmit }) {

    const [ user, setUser ] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    
        setUser('');

        onSubmit(user);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="userInput">
            <label>Github Username:</label>
            <input type="text" name="text" id="text" placeholder="your github username"
            value={user} onChange={e => setUser(e.target.value)}
            />
            </div>
            <button type="submit">Search</button>
        </form>
    );
}

export default Form;
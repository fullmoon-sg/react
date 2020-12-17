import React from 'react'
import './style.css'

function App() {
    return (
        <React.Fragment>
        <h1>Hello World</h1>
        <ul>
            <li>How many more days to Christmas</li>
            <li>I dont know</li>
        </ul>
        <p style={{'color': 'red',
    'fontSize' : '32px'}}> 3 + 3 = {3+3}</p>
        <p>Random number = {Math.floor(Math.random() * 6) +1} </p>
        <img src={require('./among.jpg').default} alt="among"/>

        </React.Fragment>
    );
  
}

export default App;

import React, { useState } from 'react'
import Home from "./Home";
import Login from "./Login";
import './App.css';


function App() {
    //Create your states here.

    const [user, setUser] = useState(null)


    return (
        //Create your conditional component here for routing.
        <div>
            {user === null || user.errors ? <Login setUser={setUser} /> : <Home setUser={setUser} />}
        </div>
    );
}

export default App;

import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';

function Login(props) {
    //Create your states here.

    const [pin, setPin] = useState("")

    const login = () => {
        
    }


    return (
        //Create your login component here.
        <div className='App'>
            <header className='Title'>
                <h1>Block Bank</h1>
            </header>
            <body>
                <div className='Login'>
                    <h1 className='LoginTitle'>Enter PIN to login</h1>
                    <div>
                        <form>
                            <input name='pin' type='text' className='login-field'
                            maxLength={4} onChange={(e) => setPin(e.target.value)} value={pin}
                            />
                        </form>
                    </div>
                    <div className='LoginButtonDiv'>
                        <button onClick={login} type='submit' className='SubmitButton'>Login</button> 
                    </div>
                </div>
            </body>
        </div>
    );
}

export default Login;
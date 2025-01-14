import React, { useState, useEffect } from 'react';
import axios from "axios";
import 'reactjs-popup/dist/index.css';

function Home(props) {
    //Create States here

    const [bankBalance, setBankBalance] = useState(0)
    const [transferHistory, setTransferHistory] = useState([])
    const [transferAddress, setTransferAddress] = useState()
    const [transferAmount, setTransferAmount] = useState()


    function logout() {

    }

    function refreshBalance() {

    }

    function sendFunds() {

    }

    function getTransaction() {

    }


    return (
        //Create the dashboard component here.
        <div className='App'>
            <header className='Title'>
                <h1>Block Bank</h1>
                <div className='LogoutButtonDiv'>
                    <button className='SubmitButton'>Logout</button>
                </div>
            </header>
            <body>
                <div className='GridContainer'>
                    <div className='GridChild'>
                        <h1 className='CardTitle'>Account Balance</h1>
                        <div className='AccountBalance'>
                            <p>
                                {bankBalance} ETH
                            </p>
                            <button
                                className='RefreshButton'
                                type='submit'
                                onClick={refreshBalance}
                            >
                                <img
                                    src="refresh.png"   
                                    alt="Refresh Button"
                                    height="16"
                                    width="16"
                                />
                            </button>

                        </div>
                    </div>
                    <div className='GridChild'>
                        <h1 className='CardTitle'>Funds Transfer</h1>
                        <div className='form-style-3'>
                            <form>
                                <label>
                                    <span>
                                        Wallet Address <span className='required'>*</span>
                                    </span>
                                    <input 
                                        type='text' 
                                        className='input-field'
                                        name='field1'
                                        value={transferAddress}
                                        onChange={e => setTransferAddress(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <span>Reason For Transaction</span>
                                    <select name="field4" classname="select-field">
                                        <option value='Online Purchases'>
                                            Online Purchases
                                        </option>
                                        <option value='Service'>
                                            Service
                                        </option>
                                        <option value='To Friend'>
                                            To Friend
                                        </option>
                                        <option value='Other'>
                                            Other
                                        </option>
                                    </select>
                                </label>
                                <label>
                                    <span>
                                        Amount <span className='required'>*</span>
                                    </span>
                                    <input
                                        type='number' 
                                        className='input-field'
                                        name='field2'
                                        value={transferAmount}
                                        onChange={e => setTransferAmount(e.target.value)}
                                     />
                                </label>
                            </form>
                            <div className='ButtonDiv'>
                                <button className='SubmitButton'>
                                    Send Funds 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className='GridChild2'>
                    {transferHistory.map((transact, index) => (
                        <div className="TransactionHistory" key={index}>
                            <p>Transaction ID: {transact.id}</p>
                            <p>Amount: {transact.amount} ETH</p>
                            <p>Transferred to: {transact.sentTo}</p>
                        </div>
                    ))}
                </div>
            </body>
        </div>
    );
}

export default Home;
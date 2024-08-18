import React, { useEffect, useState } from 'react';
import './popup.css'

function Popup(){

    let [newUser, setNewUser] =  useState(() => {

        const savedValues = localStorage.getItem('value');
        return savedValues ? JSON.parse(savedValues) : true;
      });

    function closePop(){
        setNewUser((oldValue) => !oldValue)
        
    }

    useEffect(() => {
        localStorage.setItem('value', JSON.stringify(newUser));

    }, [newUser])


    return (
        <>
            {newUser && (
                <main>
                    <div className='blur'></div>
                    <section className='popup-container'>
                        <button onClick={closePop} id="exit-settings">X</button>
                        <p>Welcome to..</p> 
                        <p>Memes <u>R</u>andom <u>N</u>umber <u>G</u>enerator!</p>
                        <div className='howTo'>
                            <h3 className='howToPlay'>How to play?</h3>
                            <p>ROLL!</p>
                            <p>and</p>
                            <p>COMPLETE YOUT INDEX!</p>
                        </div>
                        <div className='howTo'>
                            <p id='big'>99% Of people Quit gambling Right Before They Win Big!</p><br/>
                            <p>Have fun with it</p>
                        </div>
                        <h4>~ GIGI ~</h4>
                    </section>
                </main>
            )}
            <div className='rareRoll'></div>
        </>
    )
}

export default Popup
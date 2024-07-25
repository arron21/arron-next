"use client";

import React, { useState } from 'react';


export default function Email() {
    const [showEmail, setShowEmail] = useState(false);
    
    const revealEmailHandler = () => { 
        setShowEmail(!showEmail);
    }; 

    return (
        <div className='flex flex-col items-center justify-center'>
            {!showEmail ? <p className='pt-4 text-2xl'><button onClick={() => revealEmailHandler()} className='text-cyan-700 underline'>Contact Me</button></p>: null}
            {showEmail ? <p className='pt-4 text-2xl'>My Email is <a className='text-cyan-700 underline' href="mailto:arronmccrory@gmail.com">arronmccrory@gmail.com</a></p>: ""}
        </div>
    )
  }
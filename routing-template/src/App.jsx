import React from "react";
import {Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar/Navbar";

import AllRouting from "./components/AllRouting";

const App = () => {
    return (
        <div className='app'>
            <Navbar />

            <main className='app_main'>
            <AllRouting/>                
            </main>
            
        </div>
    );
};

export default App;

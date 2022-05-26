import React from 'react';
import Babel from "Components/Babel";
import Webpack from "Components/Webpack";

const App = () => {
    console.log('Running App version ' + VERSION);
    console.log(process.env)
    return (
        <div>
            <h1>Hello from React</h1>
            <Babel/>
            <Webpack/>
        </div>
    );
};

export default App;
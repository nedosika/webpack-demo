import React from 'react';
import Babel from "./components/Babel/Babel";
import Webpack from "./components/Webpack/Webpack";

const App = () => {
    return (
        <div>
            <h1>Hello from React</h1>
            <Babel/>
            <Webpack/>
        </div>
    );
};

export default App;
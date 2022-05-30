import React from 'react';

const App = () => {
    console.log('Running App version ' + VERSION);
    console.log(process.env)
    return (
        <div>
            <h1>Hello from React</h1>
        </div>
    );
};

export default App;
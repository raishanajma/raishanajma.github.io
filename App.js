import React from 'react';

class App extends React.Component{
 render() {
    const hello = 'Hello World';
    const study = 'Let`s study together!';
     return (
         <div>
            <h1> {hello} </h1>
            <p> {study} </p>
         </div>
     );
 }
}

export default App;
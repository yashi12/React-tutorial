import React from 'react';

const Greet=(props) =>{
    const {name,age} = props; // extracting name and age from props
    return (
        <div>
            <h1>hello {name}</h1>
            <p>{age}</p>
            {props.children}
        </div>
    );
}

export default Greet;
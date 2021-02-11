import React from 'react';

function ChildComponent(props) {
    return (
        <div>
            <button onClick={props.greetHandler}>greet parent</button> {/* call method of parent component from child component using props*/}
            <button onClick={()=>props.greetHandler('child')}>greet parent</button> {/* same as above used () to pass paramets */}
        </div>
    );
}

export default ChildComponent;
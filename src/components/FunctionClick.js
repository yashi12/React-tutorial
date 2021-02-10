import React from 'react';

function FunctionClick() {
    const clickHandler = ()=>{
        console.log("button clicked");
    }

    return (
        <div>
            <button onClick={clickHandler}>click</button> {/* handler should be a function and not a function call ie.()should not br present*/}
        </div>
    );
}

export default FunctionClick;
import React,{useState} from 'react';

const Test = ()=> {
    const [text,setText] = useState('random title');
    const changeText = ()=>{
        if (text == 'random title')
            setText('hello');
        else
            setText('random title');
    }
    return (
        <div>
            <h1>{text}</h1>
            <button type={"button"} onClick={changeText}> click me</button>
        </div>
    );
}

export default Test;
import React,{useState} from "react";
import {data} from '../data'

const Greet1 = () => {
    console.log(data);
    const [people,setPeople] = useState(data);
    console.log(people);
    return(
        <div>
        {people.map(person =>{
            const {id,name} = person;
            return(
                <div key={id}>
                    <h4>{name}</h4>
                </div>
            )
            })};
        </div>
    );
};

export default Greet1;
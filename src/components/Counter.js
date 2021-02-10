import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    increment(){
        // this.setState({
        //     count:this.state.count +1  //object as argument ( use given state )
        // },()=>{console.log("count",this.state.count)}) //callback runs after count value is set

        this.setState(prevState=>({  //function as argument (use prev state) returns object
            count : prevState.count +1
        }))
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1>count:{this.state.count}</h1>
                <button onClick={()=>this.increment()}>Increment</button>
                <button onClick={()=>this.incrementFive()}>Increment 5</button>{/*all incremet calls run asyn so only change by 1*/}

            </div>
        );
    }
}

export default Counter;
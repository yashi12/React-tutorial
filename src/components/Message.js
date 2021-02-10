import React, {Component} from 'react';

class Message extends Component {

    constructor() {
        super();
        this.state= {
            message:'Welcome state change'
        }
    }

    messageChange(){
        this.setState({
            message:'Thankyou '
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.messageChange()}>click</button>
            </div>
        );
    }
}

export default Message;
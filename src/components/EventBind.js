import React, {Component} from 'react';

class EventBind extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message:'Good bye'
        }
        this.clickHandler = this.clickHandler.bind(this);{/*binding event handler in constructor*/}
    }

    clickHandler(){
        console.log(this)
        this.setState({
            message:'hello msg changed'
        })
    }

    // clickHandler=()=>{
    //     console.log(this)
    //     this.setState({
    //         message:'hello msg changed'
    //     })
    // }

    render() {
        return (
            <div>
                <p>{this.state.message}</p>
                <button onClick={this.clickHandler}>click</button>  {/*binding is not present here but can use arrow func with clickHandler good approach*/}
                <button onClick={this.clickHandler.bind(this)}>click</button>  {/*bind to this has performance issue*/}
                <button onClick={()=>this.clickHandler()}>click</button> {/*binding is done has performance issue*/}
                <button onClick={this.clickHandler}>click</button>  {/*binding event handler in constructor best approach*/}
            </div>
        );
    }
}

export default EventBind;
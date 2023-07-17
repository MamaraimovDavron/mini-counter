import React from "react";
import { Component } from "react";
import './App.css';

class App extends Component{

    state = {
        count: 0,
    }

    plusOne = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    reset = () => {
        this.setState({
            count: 0,
        })
    }

    minusOne = () => {
        this.setState({
            count: this.state.count - 1,
        })
    }

    render(){
        return(
            <div className="container">
                <div className="counter-header">Mini counter</div>
                <div className="counter-body"><p>{this.state.count}</p></div>
                <div className="counter-footer">
                    <button className="plus" onClick={this.plusOne}>+1</button>
                    <button className="reset" onClick={this.reset}>0</button>
                    <button className="minus" onClick={this.minusOne}>-1</button>
                </div>
            </div>
        );
    }
}

export default App;
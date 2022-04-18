import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import store ,{COUNTER_INCREMENT,COUNTER_DECREMENT}from './store.js'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }
  increment = ()=>{
    store.dispatch({type:COUNTER_INCREMENT})
    console.log(store.getState().count)
  }
  decrement = ()=>{
    store.dispatch({type:COUNTER_DECREMENT})
    console.log(store.getState().count)
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <button onClick={this.increment}>incrtement</button>
        <button onClick={this.decrement}>decrtement</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

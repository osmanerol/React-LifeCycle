import React, {Component} from 'react';
// import Child from './Child';
import ChildInput from './ChildInput';
import './App.css';

class App extends Component {
  state={
    name:'Tom'
  }

  constructor(props){
    super(props);
    console.log('constructor');
  }

  //  constructor ile render arasinda calisir
  UNSAFE_componentWillMount(){
    console.log('componentWillMount');
  }

  //  renderdan sonra calisir
  componentDidMount = () => {
    console.log('componentDidMount');
  };
  
  changeName=()=>{
    this.setState({
      name:'Alex'
    })
  }
  
  render(){
    console.log('render');
    return (
      <div className="App">
        <ChildInput />
      </div>
    );
  }

  /*
  render(){
    console.log('render');
    return (
      <div className="App">
        {this.state.name}
        <ChildInput />
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
  */
}

export default App;

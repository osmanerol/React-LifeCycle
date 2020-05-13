import React, { Component } from 'react';

class Child extends Component {
  constructor(props){
    super(props);
    console.log('child constructor');
  }

  UNSAFE_componentWillMount(){
    console.log('child componentWillMount');
  }

  componentDidMount=()=>{
    console.log('child componentDidMount');
  }

  // child componente gelen props degistiginde render'i tekrar calistirir
  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps',nextProps);
  }

  render() {
    console.log('child render');
    return (
        <div> 
            
        </div>
    );
  }
}

export default Child;
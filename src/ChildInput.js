import React, { Component } from 'react';

class ChildInput extends Component {
  state={
      tl:0
  }

  changeTL=(e)=>{
      this.setState({
        tl:e.target.value
      })
  }

  //  true , false deger doner . Componentin guncellenip guncellenmemesi gerektigi
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate',nextProps,nextState);
    return (nextState.tl % 10 ) === 0;
  }

  //  component guncellenecegi zaman calisir. renderdan once
  UNSAFE_componentWillUpdate(nextProps,nextState){
    console.log('componentWillUpdate',nextProps,nextState);
  }

  // state guncelledndikten sonraki renderdan sonra calisir
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate',prevProps,prevState);
  }
  
  render() {
    return (
        <div> 
            <input type="text" name="tl" id="tl" onChange={this.changeTL} /> <br/>
            <h2>Each item 10 TL</h2>
            You can buy {this.state.tl / 10} item 
        </div>
    );
  }
}

export default ChildInput;
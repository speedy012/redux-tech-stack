import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { changeName } from './action'



class App extends React.Component {

  componentDidMount() {
    console.log(this.props.dog)
  }


  render() {
    return (
      <div className="App">
      

      </div>
    );
 }
}

function msp(state){
  return { dog: state.dog}
}


export default connect(msp, { changeName })(App);

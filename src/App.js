import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import { changeName, fetchBooks } from './action'



class App extends React.Component {

  componentDidMount() {
    this.props.changeName("bosco")
    this.props.fetchBooks()
  }


  render() {
    if(!this.props.loading){
      return (
        <div className="App">
          <h1>{this.props.dog}</h1>
          {this.props.cat.map(kitties => <h1>{kitties}</h1>)}
          {this.props.books.map(books => <h1>{books.Title}</h1>)}
        </div>
      );
    }  else {
      return <div> Loading..</div>
    }
 }
}

function msp(state){
  return { dog: state.dog, cat: state.cat, books:state.books, loading:state.loading}
}


export default connect(msp, { changeName, fetchBooks })(App);

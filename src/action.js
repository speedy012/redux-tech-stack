import { CHANGE_DOG_NAME, SET_BOOKS } from './type.js'


function changeName(name){
  console.log("hi")
  return(
    { type:CHANGE_DOG_NAME, payload: name }
  )
}

function fetchBooks(){
  return function(dispatch) {
    return fetch('https://fakerestapi.azurewebsites.net/api/Books')
      .then(res=> res.json())
      .then(books=>{dispatch( { type: SET_BOOKS, payload: books, payload1: false})})
  }
}

export {
  changeName,
  fetchBooks
}

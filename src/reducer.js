import { CHANGE_DOG_NAME, SET_BOOKS } from './type.js'

const defaultState = {
  dog: "woody",
  cat: ["kit", "casper", "billy"],
  books: null,
  loading: true
}

function reducer(prevState=defaultState, action) {
  console.log(action.payload)
  switch(action.type){
    case CHANGE_DOG_NAME:
      return { ...prevState, dog: action.payload}
    case SET_BOOKS:
      return {...prevState, books: action.payload, loading: action.payload1}
      default:
        return prevState
  }
}

export default reducer

import { CHANGE_DOG_NAME } from './type.js'

const defaultState = {
  dog: "woody",
  cat: ["kit", "casper", "billy"]
}

function reducer(prevState=defaultState, action) {
  console.log(action.payload)
  switch(action.type){
    case CHANGE_DOG_NAME:
      return { ...prevState, dog: action.payload}
  }

}

export default reducer

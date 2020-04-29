import { CHANGE_DOG_NAME } from './type.js'

function changeName(name){
  console.log("hi")
  return(
    { type:CHANGE_DOG_NAME, payload: name }
  )
}

export {
  changeName
}

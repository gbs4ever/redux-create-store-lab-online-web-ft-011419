export default function createStore(reducer) {
  // add your code here
  let state
  function dispatch(action){
    state = reducer(state,action)
    render()
  }

  function getState(){
    return state
  }
<<<<<<< HEAD
   dispatch({ type: '@@INIT' })
=======
>>>>>>> c6c9e980eba80b175a1f54f1a955f55e845983fa
  return {
    dispatch
    getState
  }
<<<<<<< HEAD

=======
>>>>>>> c6c9e980eba80b175a1f54f1a955f55e845983fa
}

function render() {
  const container = document.getElementById('container');

}

// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameInputRef = React.useRef() // this will also capture the input value, but using a ref
  function handleSubmit(event) {
    event.preventDefault()
    const value = event.target.elements.userName.value
    const value2 = usernameInputRef.current.value
    console.log(value2)
    onSubmitUsername(value, value2)
  }


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='userName'>Username:</label>
        <input ref={usernameInputRef} id='userName' type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  function onSubmitUsername (input1, input2) {
    alert(`You entered: ${input1} and ${input2}`)
  } 
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

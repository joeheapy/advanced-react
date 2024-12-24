// useState is a named export from the react library. It can used to create a state variable and a function to update that state variable. The function is named using the set prefix followed by the state variable name. The useState function takes an argument which is the initial value of the state variable. The state variable is then used in the component to display the current value of the state variable. The function to update the state variable is then used in an event handler to update the state variable. The state variable is then displayed in the component to show the updated value of the state variable. The useState function returns an array with two elements. The first element is the state variable and the second element is the function to update the state variable. The array destructuring syntax is used to assign the two elements of the array to two variables. The state variable is then used in the component to display the current value of the state variable. The function to update the state variable is then used in an event handler to update the state variable. The state variable is then displayed in the component to show the updated value of the state variable.

import { useState } from 'react'

const UseStateBasics = () => {
  const [count, setCount] = useState(0) // array destructuring

  const handleClick = () => {
    // event handler
    setCount(count + 1)
  }

  return (
    <div>
      <h4> You clicked {count} times.</h4>
      <button type="button" className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default UseStateBasics

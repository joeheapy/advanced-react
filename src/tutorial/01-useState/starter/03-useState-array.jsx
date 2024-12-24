import { data } from '../../../data'
import React from 'react'

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data)

  const removeItem = (id) => {
    console.log(id)
    const newPeople = people.filter((person) => person.id !== id) // This is a filter method that filters out the person with the id that matches the id passed in the removeItem function.
    setPeople(newPeople)
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <div>
      {people.map((person) => {
        const { id, name } = person
        console.log(person)
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button type="button" onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        )
      })}
      <button
        type="button"
        style={{ margintop: '2rem' }}
        className="btn"
        //onClick={() => setPeople([])} Alternatively, you can use the clearAllItems function
        onClick={clearAllItems}
      >
        Clear Items
      </button>
    </div>
  )
}

export default UseStateArray

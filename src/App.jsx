import { useState } from "react"
import Buttons from "./Components/Buttons";
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');
  const [storeArray, setArray] = useState([]);

  // console.log(inputValue)

  const handleInputValue = (e) => {

    // console.log(e.target.value)
    setInputValue(e.target.value)
  }

  const handleAddBtn = () => {
    let data = [...storeArray, inputValue]
    setArray(data)
    // console.log(data)
  }

  const handleUpdateBtn = (id) => {
    // console.log("Update clicked by =>", id);
    let enteredSentence = prompt("Enter the new sentence")
    // console.log(enteredSentence)

    let updatedArray = storeArray.map((element, index) => {
      if (index == id) {
        return enteredSentence
      } else {
        return element
      }
    })

    setArray(updatedArray)
    // console.log(updatedArray)
  }

  const handleDeleteBtn = (id, ele) => {
    // console.log("Deleting.....", ele, "of index", id)

    let deletedTodo = storeArray.filter((element, index) => {
      return index != id;
      //It means returning which we did not clicked 
    })
    // console.log(deletedTodo)
    setArray(deletedTodo)
  }


  return (
    <div className="container">

      <h1>To-Do</h1>

      <input type="text" placeholder="Input your todo.."
        onChange={handleInputValue}
      />

      <button onClick={handleAddBtn}>Add</button>

      <Buttons data={storeArray} deleteBtn={handleDeleteBtn} updateBtn={handleUpdateBtn} />

    </div>
  )
}


export default App
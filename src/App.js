import { useState } from 'react';
import './App.css';

function App() {

  // data
  const [input , setInput] = useState('')
  const [list , setList] = useState([])
  const [chanceValue , setChanceValue] = useState('')

  //methods
  const addItemToListHandler = (e) => {
    if(!!input && e.key === 'Enter') {
      setList([...list , input])
      setInput('')
    }
  }

  const getValueByChance = () => {
    const randomIndex = Math.floor(Math.random() * list.length) + 0
    setChanceValue(list[randomIndex])
  }

  // loop
  const listItems = list.map((el , index) => {
    return(
      <li key={'item' + index}>{el}</li>
    ) 
  })
 
  return (
    <div className="App">
      <div>
        <div>Tab Enter to add new item to the list</div>
        <input type='text' value={input} onKeyDown={addItemToListHandler} onInput={(e) => {setInput(e.target.value)}} />
        <hr />
        <div>My list:</div>
        
        {/* check that list is not empty */}
        {
        listItems.length > 0 ? 
        <ul>
          {listItems}
        </ul>
        :
        <div>there is no item in this list</div>
        }

        <hr />

        {
        listItems.length > 0 && 
        <>
        <button onClick={getValueByChance}>
          get a value by chance
        </button>
        <div>{chanceValue}</div>
        </>
        }

      </div>
    </div>
  );
}

export default App;

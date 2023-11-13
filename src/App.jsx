import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [command, setCommand] = useState("")
  const [x, setX]= useState(0)
  const [y, setY]= useState(0)
  const [cellState, setCellState]= useState("")

  // const [message, setMessage] = useState('');

  const handleChange = event => {
    setCommand(event.target.value);

    console.log('value is:', event.target.value);

   }
    const executeCommand = () => {
    setCellState(command)
    };
    
  return (
    <>
    <div id='board'>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id=''></div>
      <div id='uno' className={cellState}>1</div>
      <div id='2'>2</div>
      <div id='3'>3</div>
      <div id='4'>4</div>
      <div id='5'>5</div>
  </div>
  <textarea id="command" cols="30" rows="10"
        name="command"
        onChange={handleChange}
        value={command}>
          Type a command
  </textarea>
  <button onClick={executeCommand}>Go!</button>
    </>
  )
}

export default App

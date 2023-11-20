import { useState } from "react";
import Button from 'react-bootstrap/Button';

// const CommandForm = ({command}) => {
//     const [commandToExecute,setCommandToExecute]= useState("Test")

const CommandForm = ({ onCommandSubmit }) => {
    const [commandToExecute, setCommandToExecute] = useState("");

    const handleChange = event => {
        setCommandToExecute(event.target.value.toUpperCase());
    
    }

    const executeCommand = () => {
        // Llama a la función proporcionada desde las props cuando se ejecuta el comando
        onCommandSubmit(commandToExecute);
      };
    
      return (
        <>
          <textarea
            id="command"
            cols="30"
            rows="5"
            name="command"
            onChange={handleChange}
            value={commandToExecute}
          >
            Type a command
          </textarea>
          <Button variant="secondary" onClick={executeCommand}>Go!</Button>
        </>
    )
}
export default CommandForm
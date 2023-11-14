import { useState } from "react";

// const CommandForm = ({command}) => {
//     const [commandToExecute,setCommandToExecute]= useState("Test")

const CommandForm = ({ onCommandSubmit }) => {
    const [commandToExecute, setCommandToExecute] = useState("");

    const handleChange = event => {
        setCommandToExecute(event.target.value);
       
        console.log('value is:', event.target.value);
    
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
            rows="10"
            name="command"
            onChange={handleChange}
            value={commandToExecute}
          >
            Type a command
          </textarea>
          <button onClick={executeCommand}>Go!</button>
        </>
    )
}
export default CommandForm
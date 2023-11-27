import { useState } from "react";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";
import "../commandForm/commandForm.css"
import DropdownButtons from "../dropdown/DropdownButtons";
import { Instructions } from "../instructions/instructions";

const CommandForm = ({ onCommandSubmit }) => {
    const [commandToExecute, setCommandToExecute] = useState("");
    const [visibleOptions, setVisibleOptions] = useState("");
   
      
    const handleChange = event => {
        setCommandToExecute(event.target.value.toUpperCase());
    
    }
    const handleOptionClick = (option) => {

      setCommandToExecute((prevCommand) => `${prevCommand}${option}`);
      
    };
  

    const executeCommand = () => {
        // Llama a la función proporcionada desde las props cuando se ejecuta el comando
        onCommandSubmit(commandToExecute);
        setCommandToExecute("");
      };

    const handleDropdownClick = (buttonKey) => {
      
          handleOptionClick(buttonKey)
          // Actualiza el estado para mostrar las opciones asociadas al botón clicado
          setVisibleOptions(buttonKey);

        };

    const handleSubDropdownClick=(buttonKey) => {
      handleOptionClick(buttonKey)
    }


       

    
      return (
        <>
        <div className="pannel-flex-row">
          <Instructions/>
         <div className="buttongroup-flex">
      {/* Botones de Robot */}
      
      <ButtonGroup>
        <Button
          variant="info"
          className="button-border-color"
          onClick={() => handleDropdownClick('PLACE_ROBOT ')}
        >
          ROBOT
        </Button>
        <Button
          variant="info"
          className="button-border-color"
          onClick={() => handleDropdownClick('PLACE_WALL ')}
        >
          WALL
        </Button>
        {visibleOptions != ""&& (

          <DropdownButtons visibleOptions={visibleOptions} onOptionClick={handleSubDropdownClick} />
          
        ) }
 
      </ButtonGroup>
          <textarea
            data-testid={"command"}
            id="command"
            cols="30"
            rows="1"
            name="command"
            onChange={handleChange}
            value={commandToExecute}
          >
          </textarea>
          <ButtonGroup>
      <Button variant="info" className="button-border-color" onClick={() => handleDropdownClick('MOVE')}>MOVE</Button>       
        <DropdownButton
          variant="info"
          className="button-border-color"
          as={ButtonGroup}
          title="TURN"
          id="bg-nested-dropdown"
        >

              <Dropdown.Item onClick={() => handleDropdownClick('LEFT')} >LEFT</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={() => handleDropdownClick('RIGHT')}>RIGHT</Dropdown.Item>
              </DropdownButton>
              <Button variant="info" className="button-border-color" onClick={() => handleDropdownClick('REPORT')}>REPORT</Button>

      </ButtonGroup>
          </div>
            <Button data-testid={"submit"} id="button-go" style={{backgroundColor:"chocolate",border:"3px solid brown"}} onClick={executeCommand}>Go!</Button>
          
            </div> 
          
        </>
    )
  }
export default CommandForm
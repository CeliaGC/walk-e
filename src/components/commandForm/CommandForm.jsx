import { useState } from "react";
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonGroup } from "react-bootstrap";
import '../commandForm/CommandForm.css';

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
        <div className="buttongroup-flex">

        <ButtonGroup>
          <Button variant="info" className="button-border-color">ROBOT</Button>
          <Button variant="info" className="button-border-color">WALL</Button>

      <DropdownButton variant="info" className="button-border-color" eventKey="ROBOT"as={ButtonGroup} title="OPTIONS" id="bg-nested-dropdown">
        <DropdownButton variant="warning" title='Column'>
          <Dropdown.Item >1</Dropdown.Item>
          <Dropdown.Item >2</Dropdown.Item>
          <Dropdown.Item >3</Dropdown.Item>
          <Dropdown.Item >4</Dropdown.Item>
          <Dropdown.Item >5</Dropdown.Item> 
        </DropdownButton>

        <DropdownButton variant="warning" title='Row'>
          <Dropdown.Item >1</Dropdown.Item>
          <Dropdown.Item >2</Dropdown.Item>
          <Dropdown.Item >3</Dropdown.Item>
          <Dropdown.Item >4</Dropdown.Item>
          <Dropdown.Item >5</Dropdown.Item> 
        </DropdownButton>

        <DropdownButton variant="warning" title='Facing'>
          <Dropdown.Item >North</Dropdown.Item>
          <Dropdown.Item >East</Dropdown.Item>
          <Dropdown.Item >South</Dropdown.Item>
          <Dropdown.Item >West</Dropdown.Item>
        </DropdownButton>
        
      </DropdownButton>

      <DropdownButton variant="info" className="button-border-color" eventKey="ROBOT" as={ButtonGroup} title="OPTIONS" id="bg-nested-dropdown">
        <DropdownButton variant="warning" title='Column'>
          <Dropdown.Item >1</Dropdown.Item>
          <Dropdown.Item >2</Dropdown.Item>
          <Dropdown.Item >3</Dropdown.Item>
          <Dropdown.Item >4</Dropdown.Item>
          <Dropdown.Item >5</Dropdown.Item> 
        </DropdownButton>

        <DropdownButton variant="warning" title='Row'>
          <Dropdown.Item >1</Dropdown.Item>
          <Dropdown.Item >2</Dropdown.Item>
          <Dropdown.Item >3</Dropdown.Item>
          <Dropdown.Item >4</Dropdown.Item>
          <Dropdown.Item >5</Dropdown.Item> 
        </DropdownButton>
        </DropdownButton>
    </ButtonGroup>
          <textarea
            id="command"
            cols="30"
            rows="1"
            name="command"
            onChange={handleChange}
            value={commandToExecute}
          >
          </textarea>
          <ButtonGroup>
      <Button variant="info" className="button-border-color">MOVE</Button>
      <Button variant="info" className="button-border-color">TURN</Button>
      <Button variant="info" className="button-border-color">REPORT</Button>


      <DropdownButton variant="info"  className="button-border-color" as={ButtonGroup} title="OPTIONS" id="bg-nested-dropdown">
        <Dropdown.Item eventKey="TURN">LEFT</Dropdown.Item>
        <Dropdown.Item eventKey="TURN">RIGHT</Dropdown.Item>
      </DropdownButton>
    </ButtonGroup>
          <Button style={{backgroundColor:"chocolate",border:"3px solid brown"}} onClick={executeCommand}>Go!</Button>
          </div>
        </>
    )
}
export default CommandForm
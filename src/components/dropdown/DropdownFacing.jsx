import { ButtonGroup } from "react-bootstrap";
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


const DropdownFacing = ({ visibleOptions, onOptionClick }) => {
    return (
    
          <>
        <Dropdown.Divider />
        <DropdownButton variant="warning" title="Facing">
                <Dropdown.Item onClick={() => onOptionClick(',NORTH')}>NORTH</Dropdown.Item>
                <Dropdown.Item onClick={() => onOptionClick(',EAST')}>EAST</Dropdown.Item>
                <Dropdown.Item onClick={() => onOptionClick(',SOUTH')}>SOUTH</Dropdown.Item>
                <Dropdown.Item onClick={() => onOptionClick(',WEST')}>WEST</Dropdown.Item>
              </DropdownButton>

              
            </>

      
    );
  };
  
  export default DropdownFacing;
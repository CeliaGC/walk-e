import { ButtonGroup } from "react-bootstrap";
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownFacing from "./DropdownFacing";




const DropdownButtons = ({ visibleOptions, onOptionClick}) => {

 
    return (
      <>
      <DropdownButton
        variant="info"
        className="button-border-color"
        as={ButtonGroup}
        title="OPTIONS"
        id="bg-nested-dropdown"
      >  
        <DropdownButton variant="warning" title="Row">
          <Dropdown.Item onClick={() => onOptionClick('1,')}>1</Dropdown.Item>
          <Dropdown.Item onClick={() => onOptionClick('2,')}>2</Dropdown.Item>
          <Dropdown.Item onClick={() => onOptionClick('3,')}>3</Dropdown.Item>
          <Dropdown.Item onClick={() => onOptionClick('4,')}>4</Dropdown.Item>
          <Dropdown.Item onClick={() => onOptionClick('5,')}>5</Dropdown.Item>
        </DropdownButton>
        <Dropdown.Divider />
        <DropdownButton variant="warning" title="Column">
        <Dropdown.Item onClick={() => onOptionClick('1')}>1</Dropdown.Item>
        <Dropdown.Item onClick={() => onOptionClick('2')}>2</Dropdown.Item>
        <Dropdown.Item onClick={() => onOptionClick('3')}>3</Dropdown.Item>
        <Dropdown.Item onClick={() => onOptionClick('4')}>4</Dropdown.Item>
        <Dropdown.Item onClick={() => onOptionClick('5')}>5</Dropdown.Item>
        </DropdownButton>
        {visibleOptions === "PLACE_ROBOT " && (
          <>

          <DropdownFacing visibleOptions={visibleOptions} onOptionClick={onOptionClick} />

          </>
        )}
      </DropdownButton>
    </>
 
 
    );
  };
  
  export default DropdownButtons;
import '../instructions/Instructions.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';

export const Instructions = () => {

  const [show, setShow] = useState(false);
  const target = useRef(null);
    return (
        
       
      <div className="instructions-float"> 

<Button variant="info" style={{border:"3px solid rgb(255, 114, 138)"}} ref={target} onClick={() => setShow(!show)}>
        Instructions
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({
          placement: _placement,
          arrowProps: _arrowProps,
          show: _show,
          popper: _popper,
          hasDoneInitialMeasure: _hasDoneInitialMeasure,
          ...props
        }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              padding: '2px 10px',
              color: 'chocolate',
              borderRadius: 3,
              fontSize: '12px',
              fontFamily: 'pangolin',
              ...props.style,
            }}
          >
            <p className='instructions-margin'>Use buttons below to build and submit a command. Once at time, please!</p>
            <p className='instructions-margin'>1. Choose what to place: a cuttie pie Walk-e robot or a chocochunk wall</p>
            <p className='instructions-margin'>2. The options menu will pop up, select then where to locate your choice</p>
            <p className='instructions-margin'>   Select options in order of appearance!</p>
            <p className='instructions-margin'>3. Once you got a Walk-e, you can make him...</p>
            <p className='instructions-margin'>MOVE - towards his current facing position</p>
            <p className='instructions-margin'>TURN - 90º degrees in the selected direction</p>
            <p className='instructions-margin'>REPORT - his current position in a pop up window</p>
            
          </div>
        )}
      </Overlay>
      {/* <Container>
        <Row >
          <Col> <p>Choose an option to place: a Walk-e robot or a chocochunk wall</p></Col>
          <Col xs={6}> <p>Set a position for your choice (wider)</p></Col>
          <Col><p>Select the options in order o appearance!</p></Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col xs={5}>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col><p>Makes Walk-e move in the direction he is facing</p></Col>
          <Col xs={5}> <p>Makes Walk-e turn 90º in the selected direction</p></Col>
          <Col><p>Print the coordenates of Walk-e current position</p></Col>
        </Row>
      </Container> */}
           
           
            
            
           
            
    </div>
      
        
    )
}
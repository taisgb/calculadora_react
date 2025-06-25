import Input from './components/Input';
import Button from './components/Buttons';
import { Container, Content, Row } from './styles';
import { useState } from 'react';



const App = () => {

    const [currentNumber, setCurrentNumber] = useState('0');
    const [firstNumber, setFirstNumber] = useState('0');
    const [operation, setOperation] = useState('');

    const handleAddNumber = (num) => {
     setCurrentNumber(prev => prev === '0' ? num : prev + num);
    };

    const handleOnClear = () => {
      setCurrentNumber('0');
      setFirstNumber('0');
      setOperation('');
    }; 

   

    const handleOperation = (op) => {
      if (firstNumber === '0') {
        setFirstNumber(currentNumber);
        setCurrentNumber('0');
        setOperation(op);
      } else {
        const result = calculate(firstNumber, currentNumber, operation);
        setFirstNumber(String(result));
        setCurrentNumber('0');
        setOperation(op);
      }
    };

     const handleEquals = () => {
      if(firstNumber !== '0' && operation !== '' && currentNumber !== '0') {

        const result = calculate(firstNumber, currentNumber, operation);
        setCurrentNumber(String(result));
        setFirstNumber('0');
        setOperation('');
        
        }      
    };

    const calculate = (num1, num2, op) => {
      const n1 = Number(num1);
      const n2 = Number(num2);

      switch (op) {
        case '+': return n1 + n2;
        case '-': return n1 - n2;
        case 'x': return n1 * n2;
        case '/': return n1 / n2;
        default: return n2;
      }
    };  

  return (   
     <Container>
      <Content>
        <Input value={currentNumber}/>

        <Row>
          <Button label='x' onClick={() => handleOperation('x')}/>
          <Button label='/' onClick={() => handleOperation('/')}/>
          <Button label='%' onClick={() => handleOperation('%')}/>
          <Button label='c' onClick={() => handleOnClear('')}/>
        </Row>

        <Row>
          <Button label='7' onClick={() => handleAddNumber('7')}/>
          <Button label='8' onClick={() => handleAddNumber('8')}/>
          <Button label='9' onClick={() => handleAddNumber('9')}/>
          <Button label='-' onClick={() => handleOperation('-')}/>
        </Row>

        <Row>
          <Button label='4' onClick={() => handleAddNumber('4')}/>
          <Button label='5' onClick={() => handleAddNumber('5')}/>
          <Button label='6' onClick={() => handleAddNumber('6')}/>
          <Button label='+' onClick={() => handleOperation('+')} />
        </Row>
        
        <Row>
          <Button label='1' onClick={ () => handleAddNumber('1')}/>
          <Button label='2' onClick={() => handleAddNumber('2')}/>
          <Button label='3' onClick={() => handleAddNumber('3')}/>
          <Button label='=' onClick={handleEquals} />
        </Row>  
        
        
      </Content>      
     </Container>    
  );
}

export default App;

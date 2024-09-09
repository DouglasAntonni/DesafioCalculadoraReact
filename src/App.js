import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';
import { useState } from 'react';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState(null);

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation(null);
  };

  const handleAddNumber = (num) => {
    setCurrentNumber((prev) => `${prev === '0' ? '' : prev}${num}`);
  };

  const handleSetOperation = (op) => {
    if (currentNumber !== '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(op);
    }
  };

  const handleEqual = () => {
    if (firstNumber !== '0' && currentNumber !== '0' && operation) {
      let result;
      switch (operation) {
        case '+':
          result = Number(firstNumber) + Number(currentNumber);
          break;
        case '-':
          result = Number(firstNumber) - Number(currentNumber);
          break;
        case '/':
          result = Number(firstNumber) / Number(currentNumber);
          break;
        case '*':
          result = Number(firstNumber) * Number(currentNumber);
          break;
        default:
          return;
      }
      setCurrentNumber(String(result));
      setOperation(null);
      setFirstNumber('0');
    }
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="X" onClick={() => handleSetOperation('X')} />
          <Button label="/" onClick={() => handleSetOperation('/')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="*" onClick={() => handleSetOperation('*')} />
          
        </Row>
        
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleSetOperation('-')} />
          
        </Row>
        
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleSetOperation('+')} />
        </Row>
        
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEqual} />
        </Row>
      </Content> 
    </Container>
  );
};

export default App;

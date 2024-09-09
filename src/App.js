import { Container, Content, Row, Input, Button, SpecialButton } from './styles';
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
        case 'X':
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
        <Input value={currentNumber} readOnly />
        <Row>
          <Button onClick={() => handleSetOperation('X')}>X</Button>
          <Button onClick={() => handleSetOperation('/')}>/</Button>
          <SpecialButton onClick={handleOnClear}>C</SpecialButton>
          <Button onClick={() => handleSetOperation('*')}>*</Button>
          
        </Row>

        <Row>
          <Button onClick={() => handleAddNumber('7')}>7</Button>
          <Button onClick={() => handleAddNumber('8')}>8</Button>
          <Button onClick={() => handleAddNumber('9')}>9</Button>
          <Button onClick={() => handleSetOperation('-')}>-</Button>
          
        </Row>

        <Row>
          <Button onClick={() => handleAddNumber('4')}>4</Button>
          <Button onClick={() => handleAddNumber('5')}>5</Button>
          <Button onClick={() => handleAddNumber('6')}>6</Button>
          <Button onClick={() => handleSetOperation('+')}>+</Button>
        </Row>

        <Row>
          <Button onClick={() => handleAddNumber('1')}>1</Button>
          <Button onClick={() => handleAddNumber('2')}>2</Button>
          <Button onClick={() => handleAddNumber('3')}>3</Button>
          <SpecialButton onClick={handleEqual}>=</SpecialButton>
        </Row>
      </Content>
    </Container>
  );
};

export default App;

/* styles.js ou App.css */
import styled from "styled-components";

// Paleta de cores suaves e modernas
const primaryColor = '#4CAF50';  /* Verde moderno */
const secondaryColor = '#F1F1F1';  /* Cinza claro */
const buttonBgColor = '#E0E0E0';  /* Cor dos botões numéricos */
const buttonHoverColor = '#BDBDBD'; /* Cor dos botões ao passar o mouse */

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${secondaryColor};
`;

export const Content = styled.div`
  width: 320px;
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
`;

export const Input = styled.input`
  width: 87%;
  height: 80px;
  background-color: ${secondaryColor};
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
  font-size: 36px;
  text-align: right;
  color: black;
  box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Button = styled.button`
  background-color: ${buttonBgColor};
  border: none;
  border-radius: 50px;
  font-size: 24px;
  width: 70px;
  height: 70px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: ${buttonHoverColor};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SpecialButton = styled(Button)`
  background-color: ${primaryColor};
  color: white;
  font-weight: bold;

  &:hover {
    background-color: darken(${primaryColor}, 10%);
  }
`;

export const Column = styled.div`
  flex: 1;
  margin: 5px;
`;

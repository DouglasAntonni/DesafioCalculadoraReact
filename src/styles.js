import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    background-color: #ffffff;
    width: 320px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid #C0C0CD;
    background-color: #00AAF0;
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    flex: 1; 
    margin: 5px;  

    &:hover{
        opacity: 0.6;
        cursor: pointer;
    }
`;

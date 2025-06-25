import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #CACACA;
    color:rgb(0, 0, 0);

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #E6F5DDFF;
    width: 50%;
    min-height: 250px;

    display: flex;    
    flex-direction: column;
    justify-content: flex-start;  
`

export const Row = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center;


`

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    align-items: center;


`
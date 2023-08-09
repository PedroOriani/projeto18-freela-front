import { styled } from "styled-components"
import { BiLogOut } from 'react-icons/bi'
import { Link } from "react-router-dom";

export default function Header(){

    const nome = 'LLLLLLLLLLLL'

    const token = 1; 

    return(
        <SCContainer>
            {token === 1 ? 
            <SCSubContainer><SCLogOut /><SCWelcome>Bem vindo, {nome}</SCWelcome><SCLogOut /></SCSubContainer> : 
            <SCSubContainer><SCWelcome>Bem vindo</SCWelcome><SCSign>Sign-In</SCSign><SCSign>Sign-Up</SCSign></SCSubContainer>}            
        </SCContainer>
    ); 
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #ff087f;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 20px 0 20px;

    position: fixed;
    top: 0px;

    z-index: 10;
`

const SCWelcome = styled.p`
    color: #ffffff;
    font-weight: 300;
    font-size: 20px;

    margin-left: 50px;
`

const SCLogOut = styled(BiLogOut)`
    width: 30px;
    height: 30px;

    color: #ffffff;
`

const SCSubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const SCSign = styled.button`
    width: 90px;
    height: 40px;

    background-color: white;

    color: black;
    font-weight: bold;
    font-size: 15px;

    border: 2px solid white;
    border-radius: 5px; 
`
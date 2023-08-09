import { styled } from "styled-components"
import { BiLogOut } from 'react-icons/bi'
import logo from '../assets/shoppingCart.png'
import { Link } from "react-router-dom";

export default function Header(){

    const nome = 'Pedro'

    const token = 0; 

    return(
        <SCContainer>
            {token === 1 ? 
            <SCSubContainer><SCLogo src={logo}/><SCWelcome>Bem vindo, {nome}</SCWelcome><SCLogOut /></SCSubContainer> : 
            <SCSubContainer><SCLogo src={logo}/><SCWelcome>Bem vindo</SCWelcome><SCSign>Log-In</SCSign></SCSubContainer>}            
        </SCContainer>
    ); 
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 20px 0 20px;

    position: fixed;
    top: 0px;
    left: 0px;

    z-index: 10;

    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`

const SCLogo = styled.img`
    width: 60px;
    height: 60px;

    margin-bottom: 10px;
`

const SCWelcome = styled.p`
    color: black;

    font-weight: 300;
    font-size: 25px;
    font-family: 'RetroVintage';

    margin-top:5px;
`

const SCLogOut = styled(BiLogOut)`
    width: 30px;
    height: 30px;

    color: black;
`

const SCSubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
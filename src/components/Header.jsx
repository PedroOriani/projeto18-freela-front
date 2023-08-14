import { styled } from "styled-components"
import { BiLogOut } from 'react-icons/bi'
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";

export default function Header(){

    const navigateTo = useNavigate();

    function goHome(){
        navigateTo('/')
    }

    const nome = 'Pedro'

    const token = 0; 

    return(
        <SCContainer>
            {token === 1 ? 
            <SCSubContainer><SCLogo src={logo} onClick={goHome}/><SCWelcome>Bem vindo, {nome}</SCWelcome><SCLogOut /></SCSubContainer> : 
            <SCSubContainer><SCLogo src={logo} onClick={goHome}/><SCWelcome>E - Market</SCWelcome><SCSign to={'/signin'}>Sign In</SCSign></SCSubContainer>}            
        </SCContainer>
    ); 
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #f5f5f5;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 20px 0 20px;

    border-radius: 10px;

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

    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
`

const SCWelcome = styled.p`
    color: #d19300;

    font-weight: 300;
    font-size: 25px;
    font-family: 'RetroVintage';

    margin-top:5px;
`

const SCLogOut = styled(BiLogOut)`
    width: 30px;
    height: 30px;

    color: #474a51;

    &:hover{
        transform: scale(1.1)
    }
`

const SCSubContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const SCSign = styled(Link)`
    width: 60px;
    height: 40px;

    color: #474a51;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 16px;

    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;

    &:hover{
        transform: scale(1.1)
    }
`
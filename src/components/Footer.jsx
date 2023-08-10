import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { RiAccountBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';


export default function Footer(){

    const navigateTo = useNavigate();

    function goToAccount(){
        navigateTo('/user')
    }

    return(
        <SCContainer>
            <SCHome />
            <SCTitle>E - Market</SCTitle>
            <SCMyAccount onClick={goToAccount}/>
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px 0 25px;

    position: fixed;
    bottom: 0px;
    left: 0px;

    z-index: 10;

    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.2);
`

const SCTitle = styled.h1`
    color: black;

    font-size: 25px;
`

const SCHome = styled(GoHomeFill)`
    width: 30px;
    height: 30px;

    color: black;
`

const SCMyAccount = styled(RiAccountBoxFill)`
    width: 30px;
    height: 30px;

    color: black;

    &:hover{

    }
`
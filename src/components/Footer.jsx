import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { RiAccountBoxFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import {BsFillPlusCircleFill} from 'react-icons/bs'


export default function Footer(){

    const navigateTo = useNavigate();

    function goToAccount(){
        navigateTo('/user')
    }

    return(
        <SCContainer>
            <SCHome />
            <SCAdd />
            <SCMyAccount onClick={goToAccount}/>
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 70px;

    background-color: #f5f5f5;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 25px 0 25px;

    border-radius: 10px;

    position: fixed;
    bottom: 0px;
    left: 0px;

    z-index: 10;

    box-shadow: 2px 2px 20px 4px rgba(0, 0, 0, 0.2);
`

const SCHome = styled(GoHomeFill)`
    width: 30px;
    height: 30px;

    color: #474a51;

    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
`

const SCAdd = styled(BsFillPlusCircleFill)`
    width: 30px;
    height: 30px;

    color: #474a51;

    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
`

const SCMyAccount = styled(RiAccountBoxFill)`
    width: 30px;
    height: 30px;

    color: #474a51;

    border-color: black;

    cursor: pointer;

    &:hover{
        transform: scale(1.1)
    }
`
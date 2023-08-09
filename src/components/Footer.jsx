import styled from 'styled-components';
import { BiLogOut } from 'react-icons/bi';
import { GoHomeFill } from 'react-icons/go';
import { RiAccountBoxFill } from 'react-icons/ri';


export default function Footer(){
    return(
        <SCContainer>
            <SCHome />
            <SCTitle>E - Market</SCTitle>
            <SCMyProducts />
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

    box-shadow: 2px -50px 500px 30px #9400d3;
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

const SCMyProducts = styled(RiAccountBoxFill)`
    width: 30px;
    height: 30px;

    color: black;
`
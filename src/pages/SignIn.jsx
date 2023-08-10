import { styled } from "styled-components";
import logo from '../assets/logo.png'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn(){

    const navigateTo = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function logIn(e){
        e.preventDefault()

        navigateTo('/')
    }

    return(
        <SCContainer>
            <SCTitle>E - market</SCTitle>
            <SCSubTitle>A place to sell your detachments !</SCSubTitle>
            <SCLogo src={logo} />
            <SCForm onSubmit={() => logIn(event)}>
                    <SCInput
                        name="email"
                        placeholder="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <SCInput
                        name="password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <SCInput
                        value="Submit"
                        type="submit"
                    />
            </SCForm>
            <SCAccount>Doesn't Have an account? <SCSignIn to={'/signup'}>Sign Up</SCSignIn></SCAccount>
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const SCTitle = styled.p`
    font-weight: 400;
    font-size: 75px;
    font-family: 'RetroVintage';

    color: #d19300;
`

const SCSubTitle = styled.p`
    font-weight: 200;
    font-size: 20px;
    font-family: 'RetroVintage';

    margin-top: 25px;
`

const SCLogo = styled.img`
    width: 200px;
    height: 200px;

    margin-bottom: 30px;
`

const SCInput = styled.input`
    width: 200px;
    height: 30px;

    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 2px solid black;

    outline: none;

    padding: 0 0 0 10px;

    background: none;

    color: black;

    font-weight: 200;
    font-size: 15px;
    font-family: 'RetroVintage';
`

const SCForm = styled.form`
    height: 100px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 30px;
`

const SCAccount = styled.p`
    font-weight: 200;
    font-size: 15px;
    font-family: 'RetroVintage';
`

const SCSignIn = styled(Link)`
    text-decoration: none;

    font-weight: 200;
    font-size: 15px;
    font-family: 'RetroVintage';

    color: darkblue;
`
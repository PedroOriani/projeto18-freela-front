import { styled } from "styled-components";
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export default function SignUp(){

    const navigateTo = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");

    function register(e){
        e.preventDefault();

        navigateTo('/signin')
    }

    return(
        <SCContainer>
            <SCTitle>E - market</SCTitle>
            <SCSubTitle>A place to sell your detachments !</SCSubTitle>
            <SCLogo src={logo} />
            <SCForm onSubmit={() => register(event)}>
                    <SCInput
                        name="name"
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
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
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        type="password"
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                    />
                    <SCInput
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <SCInput
                        value="Register"
                        type="submit"
                    />
            </SCForm>
            <SCAccount>Have an account? <SCSignIn to={'/signin'}>Sign In</SCSignIn></SCAccount>
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

    margin-bottom: 10px;
`

const SCForm = styled.form`
    height: 200px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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
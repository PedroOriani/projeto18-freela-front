import { styled } from "styled-components";
import logo from '../assets/logo.png'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn(props){

    const { setAdd } = props

    const navigateTo = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        setAdd(0)
    }, [])

    function logIn(e){
        e.preventDefault();
        const body = {
            email,
            password
        }

      const promise = axios.post(`${import.meta.env.VITE_API_URL}/signin`, body)

        promise.then(resposta => {
            sessionStorage.setItem('token', JSON.stringify(resposta.data.token));
            sessionStorage.setItem('name', JSON.stringify(resposta.data.name));
            navigateTo("/")
        })
        promise.catch(err => {
            alert(err.response.data)
            setEmail("")
            setSenha("")
        })
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
                    <SCSubmit style={{cursor: 'pointer'}}
                        value="Submit"
                        type="submit"
                    />
            </SCForm>
            <SCAccount>Doesn't Have an account? <SCSignIn to={'/signup'}>Register</SCSignIn></SCAccount>
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

    background-color: #eeeeee;
`

const SCTitle = styled.p`
    font-weight: 400;
    font-size: 65px;
    font-family: 'RetroVintage';

    color: #d19300;

    margin-bottom: 15px;
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

const SCForm = styled.form`
    height: 100px;

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
    border-bottom: 2px solid #474a51;

    outline: none;

    padding: 0 0 0 10px;

    background: none;

    color: black;

    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 15px;
    
    margin-bottom: 15px;
`

const SCSubmit = styled.input`
    width: 200px;
    height: 30px;

    background-color: #474a51;

    border: 2px solid #474a51;
    border-radius: 15px;

    box-shadow: 1px 1px 10px 0.5px #474a51;

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 15px;

    color: #ffffff;

    margin-top: 15px;
`

const SCAccount = styled.p`
    font-weight: 500;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
`

const SCSignIn = styled(Link)`
    text-decoration: none;

    font-weight: 600;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;

    color: darkblue;
`
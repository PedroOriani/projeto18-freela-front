import { styled } from "styled-components";
import logo from '../assets/logo.png'
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'


export default function SignUp(props){

    const { setAdd } = props

    const navigateTo = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    useEffect(() => {
        setAdd(0)
    }, [])

    function register(e){
        e.preventDefault();

        if (password === confirmPassword){

            const userData = {
              name: name,
              email: email,
              password: password,
              confirmPassword: confirmPassword,
              cpf: cpf,
              phone: phone,
              city: city,
              state: state
            }

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/signup`, userData)
        promise.then(resposta => {
            alert(resposta.data)
            navigateTo('/signin')
        })
        promise.catch((erro) => alert(erro.response.data))

        }else{
            alert("As senhas digitadas estão diferentes")
        }
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
                        name="phone"
                        placeholder="Phone"
                        type="tel"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <SCInput
                        name="cpf"
                        placeholder="cpf"
                        type="text"
                        value={cpf}
                        onChange={e => setCpf(e.target.value)}
                    />
                    <SCInput
                        name="city"
                        placeholder="City"
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <SCInput
                        name="state"
                        placeholder="State (Sigla)"
                        type="tel"
                        value={state}
                        onChange={e => setState(e.target.value)}
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
                    <SCSubmit style={{cursor: 'pointer'}}
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

    padding-top: 30px;

    background-color: #eeeeee;
`

const SCTitle = styled.p`
    font-weight: 400;
    font-size: 75px;
    font-family: 'RetroVintage';

    color: #d19300;

    top: 0px;
`

const SCSubTitle = styled.p`
    font-weight: 200;
    font-size: 20px;
    font-family: 'RetroVintage';

    margin-top: 15px;
`

const SCLogo = styled.img`
    width: 200px;
    height: 200px;

    margin-bottom: 10px;
`

const SCForm = styled.form`
    height: 300px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 35px;
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

    font-weight: 400;
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;

    margin-bottom: 15px;
`

const SCSubmit = styled.input`
    width: 200px;
    height: 30px;

    background: #474a51;

    border: 2px solid #474a51;
    border-radius: 15px;

    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 15px;

    color: #ffffff;

    box-shadow: 1px 1px 10px 0.5px #474a51;

    margin-top: 10px;

    box-shadow: none;
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
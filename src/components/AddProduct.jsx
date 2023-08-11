import { styled } from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import close from '../assets/close.png'

export default function AddProduct(){

    function closeSubPage(){
        console.log('fechou');
    }

    return(
        <SCContainer>
            <SCForm>
                <p>Adicionar Produto</p>
                <SCInput />
                <SCInput />
                <SCInput />
                <SCInput />
            </SCForm>
            <SCCloseImage src={close} onClick={closeSubPage}/>
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 320px;
    height: 520px;

    position: fixed;
    top: 100px;
    left: calc(50% - 150px);

    background: none;

    padding: 10px;
`

const SCForm = styled.form`
    width: 300px;
    height: 500px;

    background-color: white;

    border: 2px solid #474a51;

    border-radius: 15px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    padding: 30px;

    position: relative;

    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 700;

        color: #474a51;

        text-decoration: underline;

        top: 0px;
    }
`

const SCCloseImage = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    top: 0px;
    left: 293px;

    cursor: pointer;
`

const SCInput = styled.input`
    width: 200px;
    height: 30px;

    border: 1px solid #474a51;

    border-radius: 5px;

    color: #474a51;
`

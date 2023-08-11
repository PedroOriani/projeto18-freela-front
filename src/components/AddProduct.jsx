import { styled } from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import close from '../assets/close.png'

export default function AddProduct(){
    return(
        <SCContainer>
            <SCForm>
                <p>Adicionar Produto</p>
            </SCForm>
            <SCCloseImage src={close} />
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
    justify-content: center;

    padding: 10px;

    position: relative;

    p{
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 700;

        color: #474a51;
    }
`

const SCCloseImage = styled.img`
    width: 30px;
    height: 30px;

    position: absolute;
    top: 0px;
    left: 290px;

    cursor: pointer;
`

import { styled } from "styled-components";
import { AiOutlineCloseCircle } from 'react-icons/ai'
import close from '../assets/close.png'
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default function AddProduct(props){

    const { add, setAdd } = props

    const token = JSON.parse(sessionStorage.getItem("token"));

    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [model, setModel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function closeSubPage(){
        setAdd(0);
    }

    function addProduct(e){
        e.preventDefault()

        const body = {
            photo: image,
            title: title,
            model: model,
            description: description,
            price: price,
            quantity: quantity
          }

        const config = {
            headers: {
              Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.post(`${import.meta.env.VITE_API_URL}/product`, body, config)

        promise.then(resposta => {
            setAdd(0);
            location.reload()
        })
        promise.catch(err => {
            Swal.fire({title: err.response.data})
        })
    }

    return(
        <SCContainer add={add}>
            <SCForm onSubmit={() => addProduct(event)}>
                <p>Adicionar Produto</p>
                <SCInput
                        name="image"
                        placeholder="Image - URL"
                        type="url"
                        value={image}
                        onChange={e => setImage(e.target.value)}
                />
                <SCInput
                        name="title"
                        placeholder="Title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                />
                <SCInput
                        name="model"
                        placeholder="Model"
                        type="text"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                />
                <SCInput
                        name="description"
                        placeholder="Description"
                        type="text"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                />
                <SCInput
                        name="price"
                        placeholder="Price"
                        type="number"
                        value={price}
                        onChange={e => setPrice(e.target.value)}
                />
                <SCInput
                        name="quantity"
                        placeholder="Quantity"
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                />
                <SCSubmit style={{cursor: 'pointer'}}
                        value="Register"
                        type="submit"
                    />
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
    left: calc(50% - 160px);

    background: none;

    display: ${props => props.add === 1 ? 'flex' : 'none'};

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

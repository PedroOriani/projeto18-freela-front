import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaTrashAlt } from 'react-icons/fa'
import AddProduct from "../components/AddProduct";
import axios from "axios";


export default function MyProducts(props){

    const { add, setAdd } = props

    const [products, setProducts] = useState([]);

    const token = JSON.parse(sessionStorage.getItem("token"));

    const navigateTo = useNavigate();

    useEffect(() => {
        setAdd(0);
    }, [])

    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
    };

    function loadProducts() {
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/myproducts`, config)
        promise.then(resposta => {
            setProducts(resposta.data)
        })
        promise.catch((erro) => alert(erro.response.data))
    }

    useEffect(loadProducts, [])

    function deleteProduct(id){
        if (confirm('Gostaria realmente de retirar este produto de venda?')) {
            const promise = axios.delete(`${import.meta.env.VITE_API_URL}/product/${id}`, config)
            promise.then(resposta => {
                alert('Produto retirado')
                location.reload();
            })
            promise.catch((erro) => alert(erro.response.data))
        }
    }

    function goToProduct(id){
        navigateTo(`/product/${id}`)
    }

    return(
        <>
            <SCContainer add={add}>
                <Header />
                <SCMyProducts>My Products</SCMyProducts>
                {products.map((p, i) => (
                    <SCProducts key={i}>
                        <SCProdImage src={p.photo} onClick={() => goToProduct(p.id)}/>
                        <SCContainerInfos>
                            <h1 onClick={() => goToProduct(p.id)}>{p.title}</h1>
                            <SCSubname onClick={() => goToProduct(p.id)}>{p.model}</SCSubname>
                            <p><SCSubtitle>Price: </SCSubtitle>{p.price}</p>
                        </SCContainerInfos>
                        <SCDelete onClick={() => deleteProduct(p.id)}/>
                    </SCProducts>
                ))}
                <Footer add={add} setAdd={setAdd}/>
            </SCContainer>
            <AddProduct add={add} setAdd={setAdd}/>
        </>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 70px;
    margin-bottom: 70px;

    background-color: white;

    padding: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    opacity: ${props => props.add === 1 ? 0.3 : 1};
`

const SCMyProducts = styled.p`
    width: 100%;
    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 33px;
    font-weight: 700;
    margin-bottom: 20px;

    color: #2c2f36;

    text-decoration: underline;
`

const SCProducts = styled.div`
    width: 100%;
    height: 130px;

    background: none;

    padding: 10px;

    margin-bottom: 15px;

    border: 2px solid #eeeeee;
    border-radius: 5px;

    background-color: #f5f5f5;

    display: flex;
    align-items: center;

    text-decoration: none;

    position: relative;

    &:hover{
        transform: scale(1.05)
    }
`

const SCProdImage = styled.img`
    width:110px;

    border-radius: 4px;
`

const SCContainerInfos = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-left: 10px;

    h1{
        color: black;

        font-family: 'Montserrat', sans-serif;
        font-size: 18px;
        font-weight: 700;

        margin-bottom: 5px;

        margin-top: 10px;
    }

    p{
        color: black;

        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        font-weight: 300;
        margin-bottom: 20px;
    }
`

const SCSubtitle = styled.span`
    font-weight: 700;
`

const SCSubname = styled.p`
    color: #474a51;
    text-decoration: underline;
`

const SCDelete = styled(FaTrashAlt)`
    width: 25px;
    
    position: absolute;

    color: #2c2f36;

    top: 5px;
    right: 5px;

    z-index: 25;
`
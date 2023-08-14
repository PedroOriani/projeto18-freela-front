import { styled } from "styled-components";
import Footer from '../components/Footer';
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

export default function Product(props){

    const { setAdd } = props

    const params = useParams();

    useEffect(() => {
        setAdd(3);
    }, [])

    const [product, setProduct] = useState([])
  
    function loadProduct() {
        const promise = axios.get(`${import.meta.env.VITE_API_URL}/products/${params.id}`)
        promise.then(resposta => {
            setProduct(resposta.data);
        })
        promise.catch((erro) => Swal.fire({title: erro.response.data}))
    }

    useEffect(loadProduct, [])

    return(
        <SCContainer>
            <Header />
            <SCProduct>
                <SCTitle>{product.title}</SCTitle>
                <SCSubTitle>{product.model}</SCSubTitle>
                <SCImage src={product.photo} />
                <SCDescription>{product.description}</SCDescription>
                    <SCDivisor>
                        <SCPrice>{product.price}</SCPrice>                            
                        <SCQuantity>{product.quantity} {product.quantity === 1 ? 'item available' : 'items available'}</SCQuantity>
                    </SCDivisor>
                <SCSeller>Vendido por {product.ownerName}</SCSeller>                
                <SCContactData>
                    <SCContact>{product.phone}</SCContact>
                    <SCAdress>{product.address}</SCAdress>
                </SCContactData>
            </SCProduct>
            <Footer setAdd={setAdd} />
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 70px;
    margin-bottom: 190px;

    padding: 10px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SCProduct = styled.div`
    width: 100%;
    height: 500px;

    padding:  0 10px 10px 10px;

    color: #474a51;
`

const SCTitle = styled.p`
    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    font-weight: 700;

    margin-bottom: 10px;
`

const SCSubTitle = styled.p`
    text-align: center;

    font-family: 'Montserrat', sans-serif;
    font-size: 17px;
    font-weight: 600;

    margin-bottom: 10px;
`

const SCImage = styled.img`
    width: 100%;
    height: 300px;

    border-radius: 5px;
    border: none;

    margin-bottom: 7px;
`

const SCDescription = styled.p`
    font-family: 'Montserrat', sans-serif;

    font-size: 15px;
    font-weight: 500;
    line-height: 20px;

    color: #474a51;

    margin-bottom: 30px;
`

const SCDivisor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 30px;
`

const SCPrice = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;

    color: #202124;
`

const SCQuantity = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;

    color: #202124;
`

const SCSeller = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;

    color: #202124;

    margin-bottom: 10px;
`

const SCContactData = styled.div`
    height: 25px;
    display: flex;
    justify-content: space-between;
`

const SCContact  = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;

    color: #474a51;
`

const SCAdress = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;

    color: #474a51;
`

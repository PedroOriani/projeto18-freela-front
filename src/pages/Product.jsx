import { styled } from "styled-components";
import Footer from '../components/Footer';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from 'react-icons/fi'
import { useEffect } from "react";

export default function Product(props){

    const { setAdd } = props

    const navigateTo = useNavigate();

    useEffect(() => {
        setAdd(3);
    }, [])

    function back(){
        navigateTo('/')
    }

    const product = {
        id: 1,
        image: 'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000',
        title: 'Máquina de Lavar Roupa',
        model: 'Electrolux Essential Care 2022 Novo',
        description: 'Notebook Multilaser Ultra UB240 preta 14.1", Intel Celeron N4020 4GB de RAM 128GB SSD, Intel UHD Graphics 600 1366x768px Windows 11 Home',
        price: 'R$ 35.00',
        quantity: 23,
        owner: 'Pedro',
        phone: '(11) 982247801',
        adress: 'Itatiba - SP'
    }

    const price = product.price.replace('R$ ', '');
    const numPrice = Number(price).toFixed(2);

    const parcela = 'R$ ' + ((numPrice + 5)/6).toFixed(2);

    const parcelaF = parcela.replace('.', ',');

    return(
        <SCContainer>
            <Header />
            <SCProduct onClick={back}>
                <SCTitle>{product.title}</SCTitle>
                <SCSubTitle>{product.model}</SCSubTitle>
                <SCImage src={product.image} />
                <SCDescription>{product.description}</SCDescription>
                    <SCDivisor>
                        <div>
                            <SCPrice>{product.price}</SCPrice>
                            <SCParcela>Em até 6x de {parcelaF}</SCParcela>
                        </div>
                        <SCQuantity>{product.quantity} items available</SCQuantity>
                    </SCDivisor>
                <SCSeller>Vendido por {product.owner}</SCSeller>                
                <SCContactData>
                    <SCContact>{product.phone}</SCContact>
                    <SCAdress>{product.adress}</SCAdress>
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
    height: 350px;

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

    margin-bottom: 20px;
`

const SCDivisor = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 20px;
`

const SCPrice = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 18px;
    font-weight: 700;
    line-height: 20px;

    color: #202124;

    margin-bottom: 3px;
`

const SCParcela = styled.p`
    font-family: 'Montserrat', sans-serif;
    
    font-size: 13px;
    font-weight: 500;
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

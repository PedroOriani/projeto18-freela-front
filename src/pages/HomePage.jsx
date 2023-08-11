import { styled } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddProduct from "../components/AddProduct";

export default function HomePage(){

    const [products, setProducts] = useState([
        {id: 1, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Computador', subname: 'Samsung S20', price: 'R$ 35.00', phone: '(11) 982247801' },
        {id: 2, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', phone: 'new' },
        {id: 3, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', phone: 'new' },
        {id: 4, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', phone: 'new' },
        {id: 5, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', phone: 'new' },
        {id: 6, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', phone: 'new' }
    ]);

    return(
        <>
            <SCContainer>
                <Header />
                {products.map((p, i) => (
                    <SCProducts key={i} to={`/product/${p.id}`}>
                        <SCProdImage src={p.image} />
                        <SCContainerInfos>
                            <h1>{p.name}</h1>
                            <SCSubname>{p.subname}</SCSubname>
                            <p><SCSubtitle>Price: </SCSubtitle>{p.price}</p>
                            <p><SCSubtitle>Phone: </SCSubtitle>{p.phone}</p>
                        </SCContainerInfos>
                    </SCProducts>
                ))}
                <Footer />
            </SCContainer>
            <AddProduct />
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

    opacity: 0.3;
`

const SCProducts = styled(Link)`
    width: 350px;
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

    margin-left: 25px;

    h1{
        color: black;

        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 700;

        margin-bottom: 5px;
    }

    p{
        color: black;

        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        font-weight: 300;
        margin-bottom: 20px;
    }
`

const SCSubtitle = styled.span`
    font-weight: 600;
`

const SCSubname = styled.p`
    text-decoration: underline;
`
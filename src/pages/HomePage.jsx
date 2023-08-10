import { styled } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function HomePage(){

    const navigateTo = useNavigate();

    const [products, setProducts] = useState([
        {id: 1, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' },
        {id: 2, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' },
        {id: 3, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' },
        {id: 4, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' },
        {id: 5, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' },
        {id: 6, image:'https://img.freepik.com/fotos-gratis/imagem-aproximada-da-cabeca-de-um-lindo-leao_181624-35855.jpg?w=2000', name: 'Leão', price: 'R$ 35.00', status: 'new' }
    ]);

    return(
    <SCContainer>
        <Header />
        {products.map((p, i) => (
            <SCProducts key={i} to={`/product/${p.id}`}>
                <SCProdImage src={p.image}/>
                <p>{p.name}</p>
                <p>{p.price}</p>
                <p>{p.status}</p>
            </SCProducts>
        ))}
        <Footer />
    </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 70px;
    margin-bottom: 70px;

    padding: 20px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const SCProducts = styled(Link)`
    width: 150px;
    height: 200px;

    background-color: white;

    margin-bottom: 20px;

    border: 1px solid lightgray;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-decoration: none;

    p{
        color: black;
    }
`

const SCProdImage = styled.img`
    width:130px;

    border-radius: 4px;

    margin-top: 10px;
`
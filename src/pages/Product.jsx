import { styled } from "styled-components";
import Footer from '../components/Footer';
import Header from "../components/Header";

export default function Product(){
    return(
        <SCContainer>
            <Header />
            <p>Product</p>
            <Footer />
        </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100vh;
`
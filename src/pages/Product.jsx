import { styled } from "styled-components";
import Footer from '../components/Footer';
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function Product(){

    const navigateTo = useNavigate();

    function back(){
        navigateTo('/')
    }

    return(
        <SCContainer>
            <Header />
            <div onClick={back}>ProductInfo</div>
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
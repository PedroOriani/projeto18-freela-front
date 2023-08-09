import { styled } from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage(){
    return(
    <SCContainer>
        <Header />
        <p>HomePage</p>
        <Footer />
    </SCContainer>
    );
}

const SCContainer = styled.div`
    width: 100%;
    height: 100%;

    margin-top: 70px;
    margin-bottom: 70px;

    padding: 20px 10px 20px 10px;
`
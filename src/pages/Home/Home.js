import React, {useState} from 'react';
import Header from "Components/Header";
import Content from "Components/Content";
import Footer from "Components/Footer";
import Menu from "Components/Menu";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <Header onShowMenu={() => setIsMenuOpen(true)}/>
            <Content/>
            <Footer/>
            <Menu open={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
        </>
    );
};

export default Home;
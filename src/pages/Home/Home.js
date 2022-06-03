import React, {useState} from 'react';
import Header from "Components/Header";
import Content from "Components/Content";
import Footer from "Components/Footer";
import Menu from "Components/Menu";
import Feedback from "Components/Feedback/Feedback";
import Navigation from "Components/Navigation";

const Home = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <Header onShowMenu={() => setIsMenuOpen(true)}/>
            <Navigation/>
            <Content/>
            <Footer/>
            <Menu open={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
            <Feedback/>
        </>
    );
};

export default Home;
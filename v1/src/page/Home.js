import React, {useEffect, useState} from "react";
import NavBar from "../layer/Navbar"
import SearchBar from "../layer/SearchBar";
import SectionRecommend from "../component/home/SectionRecommend/SectionRecommend"
import SectionPrice from "../component/home/SectionPrice/SectionPrice";
import SectionVolume from "../component/home/SectionVolume/SectionVolume";
import SectionTickers from "../component/home/SectionTickers/SectionTickers";
import SectionNews from "../component/home/SectionNews/SectionNews";
import Footer from "../layer/Footer";
import GlobalStyle from "../GlobalStyle"

function Home(props) {
    return (
        <>
            <GlobalStyle />
            <NavBar />

            <SectionRecommend />
            <div style={{
                width:"100%", marginTop:"25px",
                display:"flex", justifyContent:"center", alignItems:"center"
            }}>
                <SectionTickers />
            </div>
            <div style={{width:"100%", marginTop:"25px",
                display:"flex", justifyContent:"center", alignItems:"center"}}>
                <div style={{
                    width:"60%",display:"flex", flexDirection:"row"
                }}>
                    <SectionPrice />
                    <SectionVolume />
                </div>
            </div>
            <div style={{width:"100%", marginTop:"25px", marginBottom:"100px",
                display:"flex", justifyContent:"center", alignItems:"center"}}>
                <SectionNews />
            </div>
            <Footer />
        </>
    );
}

export default Home;
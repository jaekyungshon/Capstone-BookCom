import React from "react";
import NavBar from "../layer/Navbar";
import GlobalStyle from "../GlobalStyle";
import SearchBar from "../layer/SearchBar";
import Footer from "../layer/Footer";
import SectionNews from "../component/News/TodayNews/SectionNews";
import SectionNews2 from "../component/News/CategoryNews/SectionNews";
function News(props) {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>

            <div style={{
                width: "100%", marginTop: "25px", marginBottom: "100px",
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <SectionNews/>

            </div>
            <div style={{
                width: "100%", marginTop: "25px", marginBottom: "100px",
                display: "flex", justifyContent: "center", alignItems: "center"
            }}>
                <SectionNews2/>

            </div>
            <Footer/>
        </>
    );
}

export default News;

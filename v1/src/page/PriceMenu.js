import React from "react";
import NavBar from "../layer/Navbar";
import GlobalStyle from "../GlobalStyle";
import SearchBar from "../layer/SearchBar";
import SectionStockTable from "../component/PriceMenu/SectionStockTable";
import Footer from "../layer/Footer";

function PriceMenu(props) {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            <SearchBar/>
            <div style={{width:"100%", marginTop:"25px", marginBottom:"100px",
               display:"flex", justifyContent:"center", alignItems:"center"}}>
                <SectionStockTable />
            </div>
            <Footer/>
        </>
    );
}

export default PriceMenu;
import React, {useEffect, useState} from "react";
import SectionCardBoardRecommend from "./SectionCardBoardRecommend"
import StockCard from "./StockCard";
import axios from "axios";

function SectionRecommend(props) {
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get('/recommends')
            .then(res => setList(res.data))
            .catch(err => console.log(err))
    }, []);
    list.map(stock=>(console.log(`  ${stock.code}`)));

    return (
        <div id={"Card-Stock-Recommend"} style={{
            width:"100%", marginTop:"60px",
            display:"flex", justifyContent:"center", alignItems:"center"
        }}>
            <SectionCardBoardRecommend
                cardHeader={"추천 종목"}
                stylewidth={"60%"}
                styleheight={"400px"}
                bodyContent={
                    list.map(stock=> (<StockCard key={`${stock.code}`} stockname={`KRX:${stock.code}`}/>))



                }
            />
        </div>
    );
}

export default SectionRecommend;
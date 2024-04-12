import React from "react";
import SectionCardBoardNews from "./SectionCardBoardNews";

function SectionNews(props) {
    return (
        <div id={"Card-Stock-News"} style={{
            width:"60%"
        }}>
            <SectionCardBoardNews
                stylewidth={"100%"}
                styleheight={"1000px"}
                cardHeader={"뉴스 카테고리"}
                bodyContent={"Card"}
            />
        </div>
    );
}

export default SectionNews;
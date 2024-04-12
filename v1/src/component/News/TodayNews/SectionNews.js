import React from "react";
import SectionCardBoardNews from "./SectionCardBoardNews";

function SectionNews(props) {
    return (
        <div id={"Card-Stock-News"} style={{
            width:"60%"
        }}>
            <SectionCardBoardNews
                stylewidth={"100%"}
                styleheight={"500px"}
                cardHeader={"오늘의 뉴스"}
                bodyContent={"Card"}
            />
        </div>
    );
}

export default SectionNews;
import React from "react";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

function SearchBar(props) {
    return (
        <div id={"Header-Search"} style={{marginTop:"50px"}}>
            <Form className={"d-flex"} action={"#"} style={{
                display:"flex", justifyContent:"center", alignItems:"center"
            }}>
                <Form.Control
                    style={{
                        width:"50vh", border: "3px solid darkgray", marginTop:"24px"
                }}
                    type={"search"}
                    placeholder={"(ex: 종목코드, 종목명 등)"}
                    className={"mb-4"}
                    aria-label={"Search"}
                />
                <Button type={"submit"} variant={"outline-dark"} style={{height:"40px"}}>검색</Button>
            </Form>
        </div>
    );
}

export default SearchBar;
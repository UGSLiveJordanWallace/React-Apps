import { Card, Image } from "react-bootstrap";
import React from "react";

const NameDescription = ({ message, pictureURL, style }) => (
    <Card style={{background: "white", boxShadow: "5px 5px 5px 1px"}}>
        <Card.Body>
            <h5>{message}</h5>
            <div style={style}>
                <img src={pictureURL} width="300"/>
            </div>
        </Card.Body>
    </Card>
);

export default NameDescription;

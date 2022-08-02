import { Card, Badge, Image } from "react-bootstrap";
import React from "react";
import NameDescription from "./NameDescription";

export function FirstNameSection({ name, message, pictureURL }) {
    return (
        <>
            <Card style={{background: "lightgrey", position: "relative", border: "2px solid black"}}>
                <Card.Header>
                    <h2 style={{display: "inline-block", width: "100%", textAlign: "center"}}>My Name</h2>
                </Card.Header>
                <Card.Body>
                    <Image src="/favicon.ico" style={{position: "absolute", right: "1.5%"}}/>
                    <h2><Badge style={{color: "white", backgroundColor: "cyan"}}>{name}</Badge></h2>
                    <hr/>
                    <NameDescription message={message} pictureURL={pictureURL} />
                </Card.Body>
            </Card>
        </>
    )
}

export function LastNameSection({ name, message, pictureURL, style }) {
    return (
        <>
            <Card style={{background: "lightgrey", position: "relative", border: "2px solid black"}}>
                <Card.Header>
                    <h2 style={{display: "inline-block", width: "100%", textAlign: "center"}}>My Name</h2>
                </Card.Header>
                <Card.Body style={{position: "relative"}}>
                    <Image src="/favicon.ico" style={{display: "inline"}} />
                    <h2 style={{position: "absolute", right: "1.5%", textAlign: "right", display: "inline-block", verticalAlign: "bottom"}}><Badge style={{color: "white", backgroundColor: "cyan"}}>{name}</Badge></h2>
                    <hr/>
                    <NameDescription message={message} pictureURL={pictureURL} style={{width: "100%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "flex-end"}} />
                </Card.Body>
            </Card>
        </>
    )
}
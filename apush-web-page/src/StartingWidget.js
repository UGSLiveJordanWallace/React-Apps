import React from "react";
import { Image, Card } from "react-bootstrap";

export default function StartingWidget() {
    return (
        <>
        <div className={"w-100"}>
            <h1 style={{fontSize: "4.5em", textAlign: "center"}}>Welcome</h1>
            <Card>
                <Card.Body>
                    <div style={{flexDirection: "column"}}>
                        <div style={{width: "100%"}}>
                            <Image src="/images/Jordan's About Me Photo.jpg" width="500" fluid style={{verticalAlign: "top", boxShadow: "5px 5px 5px 1px"}} />
                            <div style={{display: "inline-block", width: "50%", marginLeft: "10px"}}>
                                <p style={{fontSize: "2.40em"}}>Welcome to my page, my name is Jordan Wallace, and I am a 16 year old aspiring to be a software engineer. This website will be an overview of my first and last name, where they came from, and why my first name is what it is. Scroll down for more information.</p>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
        </>
    )
}
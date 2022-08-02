import { Card, Tabs, Tab } from "react-bootstrap";
import AudioTape from "./AudioTape";
import Spelling from "./Spelling";
import React from "react";

export default function FooterDescription() {
    return (
        <>
        <Card style={{border: "3px solid black", width: "100%", marginLeft: "1px"}}>
            <Card.Body>
                <Tabs defaultActiveKey="pronunciation" id="uncontrolled-tab-example" className="mb-3">
                    <Tab eventKey="pronunciation" title="Pronunciation">
                        <AudioTape />
                    </Tab>
                    <Tab eventKey="spelling" title="Spelling">
                        <Spelling />
                    </Tab>
                </Tabs>
            </Card.Body>
        </Card>
        </>
    )
}

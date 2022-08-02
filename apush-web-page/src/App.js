import { FirstNameSection, LastNameSection } from "./NameSection";
import FooterDescription from "./FooterDescription";
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import StartingWidget from "./StartingWidget";
import CustomModal from "./CustomModal";

function App() {
  const [show, setShowModal] = useState(false);
  
  useEffect(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      <Image src="/images/sunset-background-image.jpg" width={"4150"} style={{position: "absolute", zIndex: "-1"}}/>
      <Container className={"d-flex align-items-center justify-content-center"}>
        <CustomModal showModal={show} setShowModal={setShowModal} title={"Welcome To My Page"} message={"Good Day, my name is Jordan Wallace. A junior going to Bishop McNamara Catholic High School."} />
        <div className={"w-100"}>
          <StartingWidget />
          <br/>
          <br/>
          <br/>
          <br/>
          <FirstNameSection name={"Jordan"} pictureURL={"https://i.guim.co.uk/img/media/86302dbcc55f07d65c45bb3baf8c864e36bd4320/0_155_3600_2159/master/3600.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=df936fc2e7b2b84a58f2e293ecde27de"} message={"My mother named me Jordan because of my grandmother. Before my grandmother passed away from Pneumonia, she asked my mother to name me Jordan. She also liked the player Michael Jordan so she named me after his last name. As soon as I was born, my mother didn't even think twice, I was named Jordan."} />
          <br/>
          <LastNameSection name={"Wallace"} pictureURL={"https://clanwallace.org/cw/wp-content/uploads/2020/02/cropped-redbadge3-1.gif"} message={"The name Wallace comes from an old French word 'waleis' which means welshman (Basically a man of Welsh decent or from Wales). Originating in Scottland, Wallace is a revered name in the Scottish history books. Coming from Strathclyde Briton, early records show that it was common in Renfrewshire and Ayrshire. The name 'Wallace' has also probably been seen in the name Clan Wallace, a clan that was revered by their enemies known for their war cry 'FREEDOM'. William Wallace was a legendary member of the clan and fought in the Independence war for Scotland, he is the most famous and honored 'Wallace' in the world. My name goes back to a Scottish soldier who raped a Jamaican woman who was forced to marry him. They both ended up having a child and thusly, my lineage began."} />
        </div>
      </Container>
      <div style={{display: "block", position: "relative", bottom: "0"}}>
        <br />
        <FooterDescription />
      </div>
    </div>
  );
}

export default App;

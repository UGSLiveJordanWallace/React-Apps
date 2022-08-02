import React from 'react'
import { Link } from 'react-router-dom'
import Advert from '../components/Advert'
import Article from '../components/Article'

export default function Hewan() {
    return (
        <div className="article-body">
            <h1>Come One Come All</h1>
            <hr/>
            <Article>
                <p>We, as people under God, are all one. We are to be seen as one, heard as one, and treated as one. As brothers and sisters under God we are to obey his laws and live according to his plan. We are a pillar to other future civilizations, as John Winthrop would say, “a city upon a hill.” As God has done for others, he allowed us to inherit the promised land for him and under him. God endowed us humans with reasons so we could tell the difference between right and wrong. So choose to live your life as you are called to do so. Choose God.</p>
                <div className="schedule">
                    <h2>Come join us:</h2>
                    <ul className="time-list">
                        <li>
                            Sunday & Wednesday- 8:00 am - 3:00pm
                        </li>
                        <li>
                            Saturday - 6:00am - 9:00 am
                        </li>
                        <li>
                            Tuesday- 7:00 am- 9:00 am
                        </li>
                    </ul>
                </div>
                <Advert title="Slavery discounts!!!" message="30% of slaves Sales located at local town hall URGENT!! PRICES OF SLAVES DROPPING" style={{width: "40%", display: "block", margin: "0 auto"}}/>
                <div className="grouped-article-buttons">
                    <Link to="/lenny">Third Article</Link>
                    <Link to="/jordan">Fifth Article</Link>
                </div>
                <footer>
                    <hr/>
                    <h4>Author Unknown</h4>
                </footer>
            </Article>
        </div>
    )
}

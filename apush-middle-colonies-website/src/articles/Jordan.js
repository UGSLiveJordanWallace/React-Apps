import React from 'react'
import { Link } from 'react-router-dom'
import Advert from '../components/Advert'
import Article from '../components/Article'

export default function Jordan() {
    return (
        <div className="article-body">
            <h1>The Pennsylvania Dream</h1>
            <hr/>
            <Article>
                <p>Come one, come all. The Pennsylvania Dream is open to everyone. It doesn’t matter what religion you practice, the freedom of worship is not a dream any longer. As long as you worship God and follow the blue laws, then you are free to do anything you want. The land is rich with fruitful soil to farm on. Strong cattle and fawns fill the land with great beauty and grace. And the hills flow like the river’s waves, calm and subtle. The wealthy and the common people work together in harmony, creating a cohesive and fair society. Without a militia, we are protected by the graces of God. War cannot dictate the ways of which man thrives in life, only God has such dominion. As the population of Pennsylvania grows, and the sweet fellowship of our neighbors grows stronger, your settlement will be more than welcomed among the people. A society that is religiously open, serves God, and sees all men as equal can be your home forever! Amen.</p>
                <div className="group-adverts">
                    <Advert title="Beware of the quaker faker!" message="Those who make mockery of the faith, laugh until they can’t comprehend what they are laughing about, and participate in vile gambling and dice events shall be put to question. But, the one who spites our blessed colony the most are the religious deceivers. Pastors who speak against the quaker religion and work against the great colony that the beloved William Penn has built will be put to death. One of these men, Alexander of Oley town has ridiculed our God to the highest degree. Those of you who throw this sacred rule away shall be brought forth and executed. May God be with you." style={{width: "40%"}}/>
                    <Advert title="Should we stand up for slaves?" message="Click the Link below to an article about whether we should have compassion over the slaves of the middle colonies." style={{width: "40%"}} link={{title: "Spare the slaves?", address: "/lenny"}}/>
                </div>
                <img className="article-5-images" src="https://www.history.com/.image/t_share/MTczNDc0MzAyMTk1MTQ3ODEz/slavery-in-america-gettyimages-464757479.jpg"/>
                <div className="grouped-article-buttons">
                    <Link to="/hewan">Fourth Article</Link>
                    <Link to="/kaarli">Sixth Article</Link>
                </div>
                <footer>
                    <hr/>
                    <h4>Oxford Hignes</h4>
                </footer>
            </Article>
        </div>
    )
}

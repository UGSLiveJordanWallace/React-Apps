import React from 'react'
import { Link } from 'react-router-dom'
import Advert from '../components/Advert'
import Article from '../components/Article'

export default function Kaarli() {
    return (
        <div className="article-body">
            <h1>Reminder: Gambling, Drinking, Blood Sports</h1>
            <hr/>
            <Article>
                <p className="article-6">Due to the recent activity observed in town, we’d like to remind you that gambling, drinking, blood sports, and anything else of that matter is prohibited and frowned upon when done excessively and/or on the Sabbath. Remember, the Sabbath is for the Lord, and your efforts should be given to God. In the beloved book of 1 Timothy, God’s words tell us that “the love of money is the root of all evil” meaning that gambling and lottery is not aligned with God’s words. Even though there is a mixture of religions located in this area, it is important that we all worship the One, True God so that we may continue to thrive and strive - failing to do so will result in a fine. In case you have forgotten these rules, here are some of the main ones listed: no gambling, drinking, blood sports, card games, dice. For more information, write to [] at []. If further activity similar to this continues to occur, new laws will be put in place to keep everything and everyone in order and in accordance with God.</p>
                <div className="advert-6">
                    <Advert title="Local Slave Tries for Freedom!!" message="Watch out! Local Slave, Gregory Douglas (owned by Wilbur Jones on Wood Drive), has gathered other slaves in the community to conspire a revolt to gain more freedom. Remember, slaves that go out of line will be punished. Certain freedoms have already been given to the slaves and can easily be taken away. The restrictions and rules still remain: education must not given for slaves, slaves must obey their owners, slavery rules may vary due to the owners having authority over their slaves. Please remind these rules to your current slaves so that action won’t have to be taken.If you or a loved one have experienced or have heard rumors about slaves revolting for freedom, please contact the local authorities on Main Road 876 via letter or in person, and action will be taken." style={{width: "95%"}}/>
                </div>
                <div className="grouped-article-buttons">
                    <Link to="/jordan">Fifth Article</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/work-cited">Resources</Link>
                </div>
                <footer>
                    <hr/>
                    <h4>Author Unknown</h4>
                </footer>
            </Article>
        </div>
    )
}

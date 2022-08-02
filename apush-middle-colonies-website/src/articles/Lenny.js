import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../components/Article'

export default function Lenny() {
    return (
        <div className="article-body">
            <h1>Spare the slaves?</h1>
            <hr/>
            <Article>
                <p>Pennsylvania is an open and free state for all. It doesn’t matter your background or where you are from, you are welcomed here! Our objective in our new founded land is to obey the word of God and spread it throughout the new world. Pennsylvania is the best place to settle down and gain a fresh start. Currently, slavery is the most popular way of growing your economy and getting your hard labor done. However, even with all these benefits slavery brings to us, it is a violent outtake on life that should be questioned. We, as Quakers, believe that this type of violence should not be justified and should forbid slavery within our new growing land. Some may believe that slavery should be allowed since their work carries our economy, or that they are under us, but this violence is simply not tolerable, they are humans like us, and we should be treating everyone equal. </p>
                <img className="article-images" src="./images/middle-colonies-article-3-images.jpeg"/>
                <a href="https://thewordsearch.com/puzzle/2929344/word-search/" target="_blank">Click This Link To Play</a>
                <div className="grouped-article-buttons">
                    <Link to="/kyla">Second Article</Link>
                    <Link to="/hewan">Fourth Article</Link>
                </div>
                <footer>
                    <hr/>
                    <h4>Author Unknown</h4>
                </footer>
            </Article>
        </div>
    )
}

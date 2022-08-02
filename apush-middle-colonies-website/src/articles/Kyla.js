import React from 'react'
import { Link } from 'react-router-dom'
import Article from '../components/Article'

export default function Kyla() {
    return (
        <div className="article-body">
            <h1>Is Help Worth the Cost?</h1>
            <hr/>
            <Article>
                <p>
                    “It is the natural responsibility of a man to help other men,” is the phrase preached in all schoolhouses and all churches, throughout all childhoods. But how much help is too much? God teaches us to love our friends and enemies, and to give aid wherever it is needed. It is also our responsibility to spread the Good News of Christ, so that we can gather others into the warm embrace of Salvation. 
                </p>

                <br/>
                    <img className="article-images" height="650" src="/images/middle-colonies-article-2-images.jpeg"/>
                <br/>

                <p>
                    But what do we do when helping others will cause harm to ourselves? When one man disgraces God, his whole colony is smote. When one people commit a heinous sin, their entire culture is cast from the good graces of God. It is best not to associate with those who fail lest we ourselves lose our place in Heaven for it. While being helpful to those who are struggling is one action that will set us on the path to Heaven out of hundreds of other actions that will do the same, associating with a sinner is sure to send us to Hell. 
                </p>

                <br/>
                    <img className="article-images" height="650" src="/images/middle-colonies-article-2-images-2.jpeg"/>
                <br/>

                <p>
                    If one who lives in a very successful settlement comes across a settlement that is not quite so successful, he should not interfere. The settlement is failing because they disgraced God; that is their own trouble and nobody else’s. If he does choose to help that settlement, he risks associating himself and the rest of his people with the impure actions of the struggling settlement. We have a responsibility to make sure our own people do not follow the same path, and therefore, we have a responsibility to place ourselves over others when it comes to helping someone who has fallen from God’s grace. 
                </p>

                <br/>

                <p>
                    Keep our colony pure. Though we may be the only ones doing the right thing, extricate yourself from the “natural responsibility” to help others. In doing so, you are hurting your friends, family, and neighbors. We must remain good unlike others. Keep our colony pure.
                </p>
                <div className="grouped-article-buttons">
                    <Link to="/abigail">First Article</Link>
                    <Link to="/lenny">Third Article</Link>
                </div>
                <footer>
                    <hr/>
                    <h4>Author Unknown</h4>
                </footer>
            </Article>
        </div>
    )
}

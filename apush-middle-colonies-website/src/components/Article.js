import React from 'react'

const Article = ({children}) => {
    console.log(children);
    return (
        <div className="article-div">
            {children}
        </div>
    )
}

export default Article

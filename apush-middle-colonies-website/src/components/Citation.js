import React from 'react'

const Citation = ({ name, body, link, ...rest }) => {
    return (
        <div className="citation-card" {...rest}>
            <div>
                {name && <h5>{name}</h5>}
                <p>{body}</p>
                <br/>
                {link && <a href={link}>Resource Link</a>}
            </div>
        </div>
    )
}

export default Citation

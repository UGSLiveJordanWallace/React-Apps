import React from 'react'
import { Link } from 'react-router-dom'

const Advert = ({title, message, imgsrc, link, ...rest}) => {
    return (
        <div className="advert-div" {...rest}>
            <h4>{title}</h4>
            <p>{message}</p>
            {link && <p><Link to={link.address}>{link.title}</Link></p>}
            <img src={imgsrc}/>
        </div>
    )
}

export default Advert

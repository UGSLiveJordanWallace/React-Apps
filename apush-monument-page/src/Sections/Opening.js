import React from 'react'
import { Link } from 'react-router-dom'

export default function Opening() {
    return (
        <div className="opener">
            <h1>The Mohegan Tribe</h1>
            <div className="card-pannels">
                <div className="pannel" >
                    <img className="opener-imgs" src={"https://www.mohegan.nsn.us/images/default-source/default-album/pic_maskuncas.jpg?sfvrsn=2e47722c_0"} width="285px"/>
                    <p>The Mohegan People are the "Wolf People". Coming from a Upstate New York area, the Wolf Tribe (Mohegan) relocated to Connecticut. After relocating, the Mohegan tribe was born into what it is now known as today.</p>
                </div>
                <div className="pannel">
                    <img className="opener-imgs" src={"/images/APUSH-Monument.png"} width="340px"/>
                    <p>I decided to create a Mohegan Monuement with their tribal symbol and their sacred little people traditions. For more details, <Link to="/monument" className="monument-link">View More</Link></p>
                </div>
                <div className="pannel">
                    <img className="opener-imgs" src={"https://www.mohegan.nsn.us/images/default-source/default-album/bettejeana0165.tmb-medium.jpg?sfvrsn=4d4f732c_1"} width="210px"/>
                    <p>The oral tradition in the Mohegan society is democratic, yet selective in their record keeping. They have specific cultural speakers who will tell these oral traditions. They are trained in interpreting and teaching the Mohegan tradition and stories.</p>
                </div>
            </div>
        </div>
    )
}

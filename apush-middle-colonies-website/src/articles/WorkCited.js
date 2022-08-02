import React from 'react'
import { Link } from 'react-router-dom';
import Citation from '../components/Citation';

export default function WorkCited() {
    return (
        <div className="work-cited-div">
            <h1>Resources</h1>
            <div className="grouped-citations">
                <Citation name="Mittelberger, Gottlieb" body="“Gottlieb Mittelberger's Journey to Pennsylvania in the Year 1750 and Return to Germany in the Year 1754.” Google Books, Google" link="https://www.google.com/books/edition/Gottlieb_Mittelberger_s_Journey_to_Penns/MX4tAQAAMAAJ?hl=en&gbpv=1"/>
                <Citation name="Marietta, Jack D., and G. S. Rowe" body="“Violent Crime, Victims, and Society in Pennsylvania, 1682-1800.” Pennsylvania History: A Journal of Mid-Atlantic Studies, vol. 66, Penn State University Press, 1999, pp. 24–54" link="http://www.jstor.org/stable/27774235"/>
                <Citation name="Klein, Philip Shriver, and Ari Arthur Hoogenboom" body="A History of Pennsylvania. Pennsylvania State University Press, 1980"/>
            </div>
            <div className="grouped-citations">
                <Citation name="Kidd, Thomas." body="“Passing as a Pastor: Clerical Imposture in the Colonial Atlantic World.” Religion and American Culture: A Journal of Interpretation, vol. 14, no. 2, 2004, pp. 149–174., doi:10.1525/rac.2004.14.2.149"/>
                <Citation body="“Religion in Colonial America: Trends, Regulations, and Beliefs.” Facing History and Ourselves" link="http://www.facinghistory.org/nobigotry/religion-colonial-america-trends-regulations-and-beliefs"/>
                <Citation body="“The Middle Colonies.” Ushistory.org, Independence Hall Association" link="https://www.ushistory.org/us/4.asp"/>
            </div>
            <Link to="/">Home</Link>
        </div>
    )
}

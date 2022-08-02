import React from 'react'
import { useCookies } from 'react-cookie';

const Message = ({ index, sender, message }) => {    
    const [ cookies ] = useCookies(['chat_user']);

    return (
        <li key={index}>
            {sender !== cookies.chat_user.user && <div className="other-message">
                <img src={`https://avatars.dicebear.com/api/initials/${sender}.svg`}/>
                <h4 className='message-title'>{sender}</h4>
                <p className='message-body'>{message}</p>
            </div>}
            {sender === cookies.chat_user.user && <div className="self-message">
                <img src={`https://avatars.dicebear.com/api/initials/${sender}.svg`}/>
                <h4 className='message-title'>{sender}</h4>
                <p className='message-body'>{message}</p>
            </div>}
        </li>
    )
}

export default Message;

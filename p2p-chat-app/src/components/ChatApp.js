import React, { useRef, useState, useEffect } from 'react';
import Message from './Message';
import { BsFillChatLeftDotsFill } from 'react-icons/bs';
import { useAuth } from '../context/AuthContext';
import Gun, { SEA } from 'gun';

export default function ChatApp() {
    const userMsg = useRef();
    const { gundb } = useAuth();
    const { user } = useAuth();
    const [messages, setMessages] = useState([]);

    async function handleUserSend(e) {
        e.preventDefault();

        try {
            const secret = await SEA.encrypt(userMsg.current.value, 'msgSecret');
            const message = user.get('all').set({ what: secret });
    
            const index = new Date().toISOString();
            gundb.get('chat').get(index).put(message);
            userMsg.current.value = '';
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        let currentMessageBuild = [];
        return gundb.get('chat')
        .map()
        .on(async (data, id) => {
            if (data) {
                const key = 'msgSecret';

                var message = {
                    who: await gundb.user(data).get('alias'),
                    what: (await SEA.decrypt(data.what, key)) + '',
                    when: Gun.state.is(data, 'what'),
                }

                if (message.what) {
                    currentMessageBuild = [...currentMessageBuild.slice(-100), message]
                }
            }
            return setMessages(currentMessageBuild)
        });
    }, [])

    return (
        <>
        <h1>Chat App <BsFillChatLeftDotsFill style={{verticalAlign: "bottom"}} /></h1>
        <div className="chat-app">
            <div className="msg-body">
                <div className="chat-channel">
                    <ul>
                        {messages.map((value, key) => {
                            return <Message index={value.when} sender={value.who} message={value.what}/>
                        })}
                    </ul>
                </div>

                <div className="msg-box">
                    <form onSubmit={handleUserSend}>
                        <input name="user-msg-input-box" className="user-msg-textbox" ref={userMsg} maxLength={200}/>
                        <input name="send-button" type="submit" className="send-msg-button"/>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

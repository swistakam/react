import React from "react";
import Chat from "./Chat";
import Icons from "./Icons";

let stateChat = true;

function ChatComponent(props) {
    if (props.show) {
        return <Chat /> 
    } else {
        return <Icons />
    }
    
}

export default ChatComponent;
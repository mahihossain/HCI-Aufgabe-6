import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
import * as React from "react";
import './chat.css'

export default function MessageItem({
    name = "Sarah Emmet",
    message="Hey, about yesterday evening."
                                    }){

    return (
        <Container sx={{display:'flex',paddingY:2,alignItems:'center'}}>
            <Avatar alt="Remy" sx={{background:'#10427A',marginRight:2}} />
            <div>
            <div className={'chat-text'}>
            {name}

            </div>
                {
                    message &&
                <div>
            {message}
                </div>
                    }
            </div>
        </Container>
    )

}
import Box from "@mui/material/Box";
import SearchIcon from "@mui/material/SvgIcon/SvgIcon";
import * as React from "react";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import MessageItem from "./message";
import {useState} from "react";

export default function ChatPage(props) {

    const [tab,setTab] = useState(0)

    return(
        <Box sx={{ width: '100%', position:'relative' }}>

            <div className={'title-container'}>
                <span className={'title'}>Messages</span>
                <SearchIcon/>
            </div>
            <br/>
            <Container fluid sx={{display:'flex'}}>
            <Button onClick={()=>setTab(0)} fullWidth variant={!tab?'contained':'outlined'} sx={{background:!tab && '#10427A',marginRight:2}} >CHATS</Button>
            <Button onClick={()=>setTab(1)} fullWidth variant={tab?'contained':'outlined'} sx={{background: tab && '#10427A'}} >CONTACTS
            </Button>
            </Container>
            <br/>
            {
                ['Matthew Pierce','Dave from Uds','Beatrice','Nia','Sarah Emmet'].map((item)=><MessageItem name={item}
                message={tab?'':undefined}
                />)
            }
        </Box>
    )

}
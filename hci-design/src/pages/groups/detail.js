import Container from "@mui/material/Container";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import {Room} from "@mui/icons-material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import {useState} from "react";
import GroupItem from "./group";
import CalendarTodayIcon from "@mui/material/SvgIcon/SvgIcon";
import Avatar from "@mui/material/Avatar";

export default function EventDetail({
    ...props
                                    }) {

    const navigate = useNavigate()

    const [tab,setTab] = useState(0)

    const [joined,setJoined] = useState(false)


    return(
        <div>
            <div className={'title-container'}>
                <span className={'title'}><Link to={'/'} onClick={()=>navigate(-1)}><ArrowBackIosIcon/></Link> Music Group</span>
                <Button variant={joined?'outlined':'contained'} onClick={()=>setJoined(!joined)} className={!joined &&'primary-bg'}>{joined?'JOINED':'JOIN'}</Button>
            </div>
            <br/>
            <Container className={'desc-title'}>
                <div>
                    Description
                    <br/>
                    <br/>
                    <div className={'desc'}>
                        This is the hub for Music Lovers!
                    </div>
                </div>
                {/* <div
                    style={{backgroundImage:`url(${MapImage})`, height:180,width:'100%',backgroundSize:'cover',
                        position:'relative',
                        display:'flex',justifyContent:'center',alignItems:'center'
                    }}
                >
                    <Room sx={{fontSize:32}} color={'error'}/>
                </div> */}

                <br/>
                <div>
                    Date & Time
                    <br/>
                    <div className={'desc'}>
                        10:30 pm 25 December 2021</div>
                </div>
                <br/>
                <div>
                    Post
                </div>
                <TextField fullWidth />
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button sx={{background:'#10427A'}} variant={'contained'}>ADD TOPIC</Button>
                </div>
                <br/>
                <Box style={{display:'flex',alignItems:'center'}}>
                    <Tabs value={tab} onChange={(e,val)=>setTab(val)} aria-label="basic tabs example">
                        <Tab label="Discussion"  />
                        <Tab label="Announcements"  />
                    </Tabs>
            </Box>
            <GroupItem
            icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
            name={'Jane Doe'}
            description={'I love Punk!'}
            />
            <GroupItem
            icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
            name={'Jane Doe'}
            description={'What we are gonna listen?'}
            />
            <div style={{height:100}}></div>
            </Container>
        </div>
    )

}
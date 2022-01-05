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
import Divider from "@mui/material/Divider";

export default function EventDetail({
    ...props
                                    }) {

    const navigate = useNavigate()

    const [tab,setTab] = useState(0)

    const [joined,setJoined] = useState(false)


    return(
        <div>
            <div className={'title-container'}>
                <span className={'title'}><Link to={'/'} onClick={()=>navigate(-1)}><ArrowBackIosIcon/></Link></span>
                {/*<Button variant={joined?'outlined':'contained'} onClick={()=>setJoined(!joined)} className={!joined &&'primary-bg'}>{joined?'JOINED':'JOIN'}</Button>*/}
            </div>
            <Container className={'desc-title'}>
                <GroupItem
                    icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
                    name={'Jane Doe'}
                    description={'I love Punk!'}
                    link={''}

                />

                <Divider sx={{marginY:2}}/>
                <div>
                    Write a comment
                </div>
                <TextField fullWidth />
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                <Button sx={{background:'#10427A'}} variant={'contained'}>COMMENT</Button>
                </div>
                <div className={'bio-title'}>Comments</div>
            <GroupItem
            icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
            name={'Jane Doe'}
            description={'Punk!'}
            link={''}
            />
            <GroupItem
            icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
            name={'Jane Doe'}
            description={'\M/etal'}
            link={''}
            />
            <div style={{height:100}}></div>
            </Container>
        </div>
    )

}
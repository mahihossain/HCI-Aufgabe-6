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
import CalendarTodayIcon from "@mui/material/SvgIcon/SvgIcon";
import Avatar from "@mui/material/Avatar";
import EventItem from "../events/event";
import Divider from "@mui/material/Divider";

export default function PostDetail({
                                        ...props
                                    }) {

    const navigate = useNavigate()

    const [tab,setTab] = useState(0)

    const [joined,setJoined] = useState(false)


    return(
        <div>
            <div className={'title-container'}>
                <span className={'title'}><Link to={'/'} onClick={()=>navigate(-1)}><ArrowBackIosIcon/></Link> </span>
                 </div>
            <Container className={'desc-title'}>
                <EventItem name={"Carol Baskins"} link={''} description={'Such a lovely day today'} icon={<Avatar className={'primary-bg'} sx={{marginRight:2}}/>} />

                {/* <div
                    style={{backgroundImage:`url(${MapImage})`, height:180,width:'100%',backgroundSize:'cover',
                        position:'relative',
                        display:'flex',justifyContent:'center',alignItems:'center'
                    }}
                >
                    <Room sx={{fontSize:32}} color={'error'}/>
                </div> */}

                <Divider sx={{marginY:2}}/>
                <div>
                    Write a comment
                </div>
                <TextField fullWidth />
                <div style={{display:'flex',justifyContent:'flex-end'}}>
                    <Button sx={{background:'#10427A'}} variant={'contained'}>COMMENT</Button>
                </div>
                <div className={'bio-title'}>Comments</div>
                <EventItem
                    icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
                    name={'Jane Doe'}
                    description={'Sure is!'}
                    link={''}
                />
                <EventItem
                    icon={<Avatar sx={{marginRight:2,background:'#10427A'}}/>}
                    name={'Callahan Turner'}
                    description={'Perfect for brunch if u up for it :)'}
                    link={''}
                />
                <div style={{height:100}}></div>
            </Container>
        </div>
    )

}
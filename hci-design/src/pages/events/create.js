import Container from "@mui/material/Container";
import {Link} from "react-router-dom";
import * as React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {useState} from "react";

import Input from "@mui/material/Input";
import Checkbox from "@mui/material/Checkbox";
import MapImage from "./map1.png";
import {Room} from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function CreateEvent({
                                        ...props
                                    }) {

    const [tab,setTab] = useState(0)

    return(
        <div style={{paddingBottom:80}}>
            <div className={'title-container'}>
                <span className={'title'}><Link to={'/events'}><ArrowBackIosIcon/></Link> Create Event</span>

            </div>
            <br/>
            <Container>
                <label className={'desc'}>Event name</label>
                <TextField
                    fullWidth
                    size={'small'}
                />
                <br/><br/>
                <label className={'desc'}>Description</label>
                <TextField
                    fullWidth
                    size={'small'}
                />
                <br/>
                <br/>
                <Box sx={{display:'flex',justifyContent:'space-between'}}>
                    <div>
                        <div className={'desc'}>Date</div>
                    <TextField size={'small'} type={'date'}/>
                    </div>
                    <div>
                        <div className={'desc'}>Time</div>
                        <TextField size={'small'} sx={{width:120}} type={'time'}/>
                    </div>
                </Box>

                <br/>
                <Box sx={{display:'flex',alignItems:'center'}}>
                    <div>
                <label className={'desc'}>Limit</label>
                <TextField

                    size={'small'}
                />
                    </div>
                    <Checkbox/>
                    <label className={'desc-title'}>
                    Public Event
                    </label>
                </Box>
                <br/>
                <label className={'desc'}>Event Location</label>
                <TextField
                    fullWidth
                    size={'small'}
                />
                <br/>
                <br/>
                <label className={'desc'}>Select on map</label>
                <div
                    style={{backgroundImage:`url(${MapImage})`, height:180,width:'100%',backgroundSize:'cover',
                        position:'relative',
                        display:'flex',justifyContent:'center',alignItems:'center'
                    }}
                >
                    <Room sx={{fontSize:32}} color={'error'}/>
                </div>
                <br/>
                <label className={'desc'}>Invite People</label>
                <TextField
                    fullWidth
                    size={'small'}
                />
                <br/>
                <br/>
                <Link to={'/events'}>
                <Button fullWidth variant={'contained'} className={'primary-bg'}>
                    CREATE EVENT
                </Button>
                </Link>
            </Container>
        </div>
    )

}
import Container from "@mui/material/Container";
import {Link, useNavigate} from "react-router-dom";
import * as React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import {useState} from "react";

import Checkbox from "@mui/material/Checkbox";
import MapImage from "./map1.png";
import {Room} from "@mui/icons-material";
import Button from "@mui/material/Button";

export default function AddPost({
                                        ...props
                                    }) {

    const [tab,setTab] = useState(0)

    const navigate = useNavigate()

    return(
        <div style={{paddingBottom:80}}>
            <div className={'title-container'}>
                <span className={'title'}><Link to={''} onClick={()=>navigate(-1)}><ArrowBackIosIcon/></Link>Add New Post</span>

            </div>
            <br/>
            <Container>
                <label className={'desc-title'}>Write your status update</label>
                <TextField
                    multiline
                    minRows={4}
                    fullWidth
                    size={'small'}
                />
                <br/>
                <br/>
                <Button variant={'outlined'} fullWidth sx={{marginY:1}}>ADD PHOTOS</Button>
                <Button variant={'outlined'} fullWidth sx={{marginY:1}}>ADD VIDEOS</Button>
                <Button variant={'outlined'} fullWidth sx={{marginY:1}}>TAG PEOPLE</Button>

                <Box sx={{display:'flex'}}>
                    <span>
                        <Checkbox checked={true}/>Public Post
                        <Checkbox/> Friends Only
                    </span>
                </Box>

                <label className={'desc'}>Set Location</label>
                <div
                    style={{backgroundImage:`url(${MapImage})`, height:180,width:'100%',backgroundSize:'cover',
                        position:'relative',
                        display:'flex',justifyContent:'center',alignItems:'center'
                    }}
                >
                    <Room sx={{fontSize:32}} color={'error'}/>
                </div>
                <br/>

                <Link to={'/home'}>
                    <Button fullWidth variant={'contained'} className={'primary-bg'}>
                        POST
                    </Button>
                </Link>
            </Container>
        </div>
    )

}
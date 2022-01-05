import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import * as React from "react";
import './events.css'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { LocationSearching, Room} from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

import MapImage from './map1.png'
import {Link} from "react-router-dom";
import Grid from "@mui/material/Grid";
import EventItem from "./event";


export default function NearYou(props) {

    return(
        <Box sx={{ width: '100%', position:'relative',paddingY:2}}>
            <div className={'title-container'}>
                <span className={'title'}><Link to={'/events'}><ArrowBackIosIcon/></Link> Near You</span>
                <SearchIcon/>
            </div>
            <Box sx={{paddingX:2,paddingY:1}}>
            <TextField
                defaultValue={'Schafbruke, Saarbrucken'}
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Room/></InputAdornment>,
                }}
                sx={{width:'100%', marginY:1}} />

                <TextField
                    defaultValue={'10'}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><LocationSearching/></InputAdornment>,
                        endAdornment: 'KM'
                    }}
                    sx={{width:'100%'}} />
            </Box>
            <div
            style={{backgroundImage:`url(${MapImage})`, height:500,width:'100%',backgroundSize:'cover',
                position:'relative',
            display:'flex',justifyContent:'center',alignItems:'center'
            }}
            >
                <Room sx={{fontSize:32}} color={'error'}/>
                <Grid container sx={{position:'absolute', top:0 }} spacing={4} rowSpacing={16}>
                    <Grid item sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Room sx={{fontSize:32,marginBottom:-1}}/>
                        <EventItem small description={'5 KM away'}/>
                    </Grid>
                    <Grid item sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Room sx={{fontSize:32,marginBottom:-1}}/>
                        <EventItem small description={'5 KM away'}/>
                    </Grid>
                    <Grid item sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                        <Room sx={{fontSize:32,marginBottom:-1}}/>
                        <EventItem small description={'5 KM away'}/>
                    </Grid>

                </Grid>
            </div>

        </Box>
    )

}
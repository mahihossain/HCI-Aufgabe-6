import Container from "@mui/material/Container";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import './profile.css'
import Grid from "@mui/material/Grid";
import ProfileCard from "./card";
import FeedIcon from '@mui/icons-material/Feed';
import FavoriteIcon from '@mui/icons-material/Favorite'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

export default function ProfilePage(props) {

    return(
        <Box>
            <div className={'title-container'}>
                <span className={'title'}>Profile</span>

            </div>
            <Container sx={{display:'flex',paddingY:2,alignItems:'center'}}>
                <Avatar alt="Remy" sx={{background:'#10427A',marginRight:2,height:80,width:80}} />
                <div style={{color:'#10427A'}}>
                    <div className={'profile-name'}>
                        Martin Hermann

                    </div>
                    Saarbrucken
                </div>
            </Container>
        <br/>
        <Container className={'bio-title'}>
            <div>
            Bio
        <br/>
        <div className={'bio'}>
            According to all known laws
            of aviation,


            there is no way a bee
            should be able to fly.
        </div>
            </div>
        </Container>
        <br/>
        <Container>
        <Grid container spacing={4}>
            <Grid item xs={6}>
                <ProfileCard
                text={'My posts'}
                icon={<FeedIcon fontSize={'large'}/>}
                />
            </Grid>

            <Grid item xs={6}>
                <ProfileCard
                    text={'Groups'}
                    icon={<FavoriteIcon fontSize={'large'}/>}
                />
            </Grid>
            <Grid item xs={6}>
                <ProfileCard
                    text={'Events'}
                    icon={<CalendarTodayIcon fontSize={'large'}/>}
                />
            </Grid>
            <Grid item xs={6}>
                <ProfileCard
                    text={'Settings'}
                    icon={<SettingsIcon fontSize={'large'}/>}
                />
            </Grid>
            <Grid item xs={6}>
                <ProfileCard
                    text={'Logout'}
                    icon={<PowerSettingsNewIcon fontSize={'large'}/>}
                />
            </Grid>

        </Grid>
        </Container>
        </Box>
    )

}
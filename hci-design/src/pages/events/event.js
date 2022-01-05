import Card from "@mui/material/Card";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";

export default function EventItem({
    name = "Hiking Event",
    description="Saarschleife hike all-day tour",
    icon=<CalendarTodayIcon sx={{paddingRight:2,color:'#10427A'}}/>,
    small = false
                                  }){


    return (
        <Link to={'/events/8474638'} >
        <Card style={{alignItems:'start',color:'#10427A'}} sx={{paddingX:2,paddingY:1,marginY:2,boxShadow:'0px 0px 2px #10427A'}}>
            <Box sx={{display:'flex',alignItems:'center',paddingY:1}}>{icon}<Box sx={{fontSize:18}}>
            {
                name
            }
            </Box>
                </Box>
            {
                description
            }
            {
                !small &&
            <Box sx={{display:'flex',justifyContent:'flex-end'}}>
            <FavoriteIcon/>
            &nbsp;&nbsp;
            <MessageIcon/>
            </Box>
            }
        </Card>
        </Link>
    )
}
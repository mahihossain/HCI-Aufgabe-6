import Card from "@mui/material/Card";
import HeadphonesIcon from '@mui/icons-material/Headphones';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import Box from "@mui/material/Box";
import {Link} from "react-router-dom";
import { Headphones } from "@mui/icons-material";

export default function GroupItem({
    name = "Music",
    description="Let's Listen Together",
    link = '/groups/8474638',
    icon=<Headphones sx={{paddingRight:2,color:'#10427A'}}/>,
    small = false
                                  }){


    return (
        <Link to={link} >
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
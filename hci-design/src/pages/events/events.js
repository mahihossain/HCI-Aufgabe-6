import * as React from 'react';
import PropTypes from 'prop-types';
import './events.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Room} from "@mui/icons-material";
import {Link} from "react-router-dom";
import EventItem from "./event";
import Fab from "@mui/material/Fab";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const titleStyle = {
    display:'flex',
    justifyContent:'space-between',
    alignItems: 'center',
    padding: '4px 20px'
}

export default function EventsPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%',height:'100%', position:'relative' }}>

            <div style={titleStyle}>
                <span className={'title'}>Events</span>
                <SearchIcon/>
            </div>

            <Box style={{display:'flex',alignItems:'center'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={'tab-text'}  label="Upcoming" {...a11yProps(0)} />
                    <Tab className={'tab-text'}  label="My Events" {...a11yProps(1)} />
                </Tabs>

                <Link className={'tab-text'}  to={'/events/near-you'} style={{display:'flex',alignItems:'center',textDecoration:'none'}}><Room/> Near you</Link>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    [1,2,3,4,5].map((item)=><EventItem description={'Hiking event tomorrow'}/>)
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    [1,2,3,4,5,6,7].map((item)=><EventItem/>)
                }
            </TabPanel>
            <Link to={'/events/create'}>
            <Fab sx={{position:'sticky', right:10, bottom:70,float:'right',background:'#10427A'}} color={'primary'} aria-label="edit">
                <CalendarTodayIcon/>
            </Fab>
            </Link>
        </Box>
    );
}

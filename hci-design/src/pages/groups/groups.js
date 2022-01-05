import * as React from 'react';
import PropTypes from 'prop-types';
import './groups.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import {Room} from "@mui/icons-material";
import {Link} from "react-router-dom";
import GroupItem from "./group";
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

export default function GroupsPage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%',height:'100%', position:'relative' }}>

            <div style={titleStyle}>
                <span className={'title'}>Groups & Interests</span>
                <SearchIcon/>
            </div>

            <Box style={{display:'flex',alignItems:'center'}}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={'tab-text'}  label="Your Groups" {...a11yProps(0)} />
                    <Tab className={'tab-text'}  label="All" {...a11yProps(1)} />
                    <Tab className={'tab-text'}  label="Sports" {...a11yProps(2)} />
                    <Tab className={'tab-text'}  label="Music" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {
                    [1,2,3,4,5].map((item)=><GroupItem description={'What Are You Listening Now!'}/>)
                }
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    [1,2,3,4,5,6,7].map((item)=><GroupItem/>)
                }
            </TabPanel>
        </Box>
    );
}

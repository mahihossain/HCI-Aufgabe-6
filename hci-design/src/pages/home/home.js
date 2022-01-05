import * as React from 'react';
import PropTypes from 'prop-types';
import './home.css'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/SearchOutlined'
import AddIcon from '@mui/icons-material/Add';
import EventItem from "../events/event";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import MusicNoteIcon from '@mui/icons-material/MusicNote';

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

export default function HomePage() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height:'100%', position:'relative' }}>

            <div style={titleStyle}>
                <span className={'title'}>Discover</span>
                <SearchIcon/>
            </div>

            <Box style={{display:'flex',alignItems:'center'}}>
                <Tabs  value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab className={'tab-text'}  label="Featured" {...a11yProps(0)} />
                    <Tab className={'tab-text'}  label="All" {...a11yProps(1)} />

                    <Tab className={'tab-text'}    label="Recent" {...a11yProps(1)} />
                </Tabs>
</Box>
            <TabPanel value={value} index={0}>
                <EventItem name={"Carol Baskins"} link={''} description={'Such a lovely day today'} icon={<Avatar className={'primary-bg'} sx={{marginRight:2}}/>} />
                <EventItem name={"Music Group"} link={''} description={'Karaoke night anyone?'} icon={<MusicNoteIcon className={'primary'} sx={{marginRight:2}}/>} />
                {
                    [1,2].map((item)=><EventItem/>)
                }

                <EventItem name={"Hector Bauer"} link={''} description={'Are there new lockdown restrictions announced?'} icon={<Avatar className={'primary-bg'} sx={{marginRight:2}}/>} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                {
                    [1,2,3,4,5,6,7].map((item)=><EventItem/>)
                }
            </TabPanel>
            <TabPanel value={value} index={2}>
                {
                    [1,2,3,4,5,6].map((item)=><EventItem/>)
                }
            </TabPanel>

            {/*<Link to={'/home/create'}>*/}
                <Fab sx={{position:'sticky', bottom:70, right:10,float:'right',background:'#10427A'}} color={'primary'} aria-label="edit">
                    <AddIcon/>
                </Fab>
            {/*</Link>*/}
        </Box>
    );
}

import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Home"
        value="Home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        label="Heart"
        value="Heart"
        icon={<FavoriteOutlinedIcon />}
        />
      <BottomNavigationAction 
      label="Calendar" 
      value="Calendar" 
      icon={<CalendarTodayOutlinedIcon />} />
      <BottomNavigationAction 
      label="Message" 
      value="Message" 
      icon={<MessageOutlinedIcon />} />
      <BottomNavigationAction 
      label="Profile" 
      value="Profile" 
      icon={<PersonOutlineOutlinedIcon />} />

    </BottomNavigation>
  );
}
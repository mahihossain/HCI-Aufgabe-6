import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import {useLocation, useH, useNavigate} from "react-router-dom";

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {

      navigate(newValue)
  };

  const location = useLocation()
  const navigate = useNavigate()

    const path = location.pathname?.split('/')[1]

  return (

    <BottomNavigation sx={{ width: 400 }} value={'/'+path} onChange={handleChange}>
      <BottomNavigationAction
        // label="Home"
        value="/home"
        icon={<HomeOutlinedIcon />}
      />
      <BottomNavigationAction
        // label="Groups"
        value="/groups"
        icon={<FavoriteOutlinedIcon />}
        />
      <BottomNavigationAction
      // label="Events"
      value="/events"
      icon={<CalendarTodayOutlinedIcon />} />
      <BottomNavigationAction 
      // label="Chat"
      value="/chat"
      icon={<MessageOutlinedIcon />} />
      <BottomNavigationAction 
      // label="Profile"
      value="/profile"
      icon={<PersonOutlineOutlinedIcon />} />

    </BottomNavigation>
  );
}
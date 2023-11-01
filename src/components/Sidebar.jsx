import React from 'react'
import { Box } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SettingsIcon from '@mui/icons-material/Settings';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';4
import Groups3Icon from '@mui/icons-material/Groups3';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';

const Sidebar = ({setMode , mode}) => {
  return (
    <Box  flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
   <Box position="fixed">
      <List>
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#home'>
              <ListItemIcon>
              <AddHomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <AutoStoriesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <Groups3Icon />
              </ListItemIcon>
              <ListItemText primary="Group"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <MarkUnreadChatAltIcon />
              </ListItemIcon>
              <ListItemText primary="Markplace"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Friends"/>
            </ListItemButton>
          </ListItem>
          
          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <AccountBoxIcon />
              </ListItemIcon>
              <ListItemText primary="Profile"/>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton componenet="a" href='#simple-list'>
              <ListItemIcon>
              <ModeNightIcon />
              </ListItemIcon>
              <Switch onClick={e => setMode(mode === "light" ? "dark" : "light")}/>
            </ListItemButton>
          </ListItem>
      
      </List>
   </Box>
    </Box>

  )
}

export default Sidebar
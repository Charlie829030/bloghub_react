import { AppBar, styled, Toolbar, Typography, Box } from '@mui/material'
import React, { useState } from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import { InputBase } from '@mui/material';
import { Mail, Badge , Notifications} from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  width: "40%",
  borderRadius: theme.shape.borderRadius

}));

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}));


const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap:"10px",
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }
}));

const Navbar = () => {
 const [open , setOpen] = useState(false)

  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>LAMA DEV</Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search><InputBase placeholder='Search...' /></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar  sx={{width:30 , height:30}}
           onClick={e => setOpen(true)}
           src="https://4.bp.blogspot.com/-CCW346J8k7Y/VwgAIHGxSvI/AAAAAAAAE1o/KMFbHMkgqQkOrgJZGl8V29IYc2eNy2dAA/s1600/Shah-Rukh-Khan-HD-Wallpaper-Download.jpg" />
        </Icons>
        
        <UserBox onClick={e => setOpen(true)}>
          <Avatar sx={{width:30 , height:30}} src="https://4.bp.blogspot.com/-CCW346J8k7Y/VwgAIHGxSvI/AAAAAAAAE1o/KMFbHMkgqQkOrgJZGl8V29IYc2eNy2dAA/s1600/Shah-Rukh-Khan-HD-Wallpaper-Download.jpg" />
            <Typography variant='span'>Jerry</Typography>
          </UserBox>
      </StyledToolbar>
      
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
     
    </AppBar>
  )
}

export default Navbar
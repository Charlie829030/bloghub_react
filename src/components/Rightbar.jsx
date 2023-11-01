import React from 'react'
import { Box, Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';


const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300} mt={2} mb={2}>
        <Typography variant='h6' fontWeight={100}>Online Friends</Typography>
        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="https://qph.fs.quoracdn.net/main-qimg-183fce3cab061672b7515b55bb22c7bc" />
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.XN6q7NUqnyZn-d29JgQYqQHaNK?pid=ImgDet&rs=1" />
          <Avatar alt="Cindy Baker" src="https://usercontent1.hubstatic.com/13253026_f120.jpg" />
          <Avatar alt="Agnes Walker" src="https://celebswiki.info/wp-content/uploads/2020/03/Hrithik-Roshan-Biography-1024x1024.jpg" />
          <Avatar alt="Trevor Henderson" src="https://celebswiki.info/wp-content/uploads/2020/03/Hrithik-Roshan-Biography-1024x1024.jpg" />
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.XN6q7NUqnyZn-d29JgQYqQHaNK?pid=ImgDet&rs=1" />
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.XN6q7NUqnyZn-d29JgQYqQHaNK?pid=ImgDet&rs=1" />
          <Avatar alt="Cindy Baker" src="https://usercontent1.hubstatic.com/13253026_f120.jpg" />
        </AvatarGroup>

        <Typography variant='h6' fontWeight={100}>Latest Photos</Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
         
            <ImageListItem>
              <img
                src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?pid=ImgDet&rs=1"
                loading="lazy"
              />
            </ImageListItem>

            <ImageListItem>
              <img
                src="https://1.bp.blogspot.com/-yeisdvEQ2xU/XactF81Li9I/AAAAAAAAV0o/vJj6-COgcJcn9RVD_1ckfdPqSyq94UvHQCEwYBhgL/s1600/DSC_1292.JPG"
                loading="lazy"
              />
            </ImageListItem>

            <ImageListItem>
              <img
                src="https://www.wallpaperup.com/uploads/wallpapers/2015/04/02/653426/9f9913628bd4ccb5d79b2fc51f45d5a6.jpg"
                loading="lazy"
              />
            </ImageListItem>
        </ImageList>

        <Typography variant='h6' fontWeight={100} mt={2}>Latest Conversion</Typography>
        
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://wallpapercave.com/wp/wp2550721.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://th.bing.com/th/id/OIP.f_66WRqzxCujrov1SmQE-AHaEK?pid=ImgDet&w=3840&h=2160&rs=1" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://th.bing.com/th/id/R.03fd6756d1287d21bb297b72738b6907?rik=CsMJwCFCT0U8dw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fe%2fb%2f1%2f683443.jpg&ehk=nRhhZTTXE%2bCzNXYw0HcaX8Kwrx%2b8RSWiDt8BJP6w8EE%3d&risl=&pid=ImgRaw&r=0" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  )
}

export default Rightbar
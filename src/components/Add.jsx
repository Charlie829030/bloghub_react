import React, { useState } from 'react'
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import { Box, Typography, styled } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { TextField } from '@mui/material';
import { Stack } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';
export const Add = () => {

    const [open, setOpen] = useState(false)

    const StyledModal = styled(Modal)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    })

    const UserBox = styled(Box)({
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "20px"
    })

    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={320} borderRadius={5} p={3} bgcolor={"background.default"} color={"text.primary"}>
                    <Typography textAlign="center" color="gray" variant='h6'>Create Post</Typography>

                    <UserBox>
                        <Avatar sx={{ width: 30, height: 30 }}
                            onClick={e => setOpen(true)}
                            src="https://4.bp.blogspot.com/-CCW346J8k7Y/VwgAIHGxSvI/AAAAAAAAE1o/KMFbHMkgqQkOrgJZGl8V29IYc2eNy2dAA/s1600/Shah-Rukh-Khan-HD-Wallpaper-Download.jpg" />

                        <Typography>React_Jerry</Typography>
                    </UserBox>

                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        variant="standard"
                        placeholder="Whats on your mind..."
                    />

                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <InsertEmoticonIcon sx={{ color: "red" }} />
                        <ImageIcon sx={{ color: "blue" }} />
                        <VideoCallIcon sx={{ color: "brown" }} />
                        <AddCircleOutlineIcon sx={{ color: "green" }} />
                    </Stack>

                    <ButtonGroup fullWidth variant="contained">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}>
                            <DateRangeIcon />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

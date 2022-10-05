import React from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
// import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material';

import Button from '@mui/material/Button';

// const useStyles = makeStyles(theme=>({
//     dialogWrapper:{
//         padding: theme.spacing(2),
//         position:"absolute",
//         top: theme.spacing(0)
//     }

// }))


const MyPopUp = (props) => {
    // const classes = useStyles();
   
    const {title,children,openPopUp,setOpenPopUp, setItemUpdate, setEditShow} = props
  return (
    <>
    <Dialog open={openPopUp} sx={{padding:"0"}} maxWidth="md" >
             <DialogTitle>
            <div style={{display:"flex"}}>
                   <Typography sx={{flexGrow:1}} variant="h6" >{title}</Typography>
                     <Button variant="contained"
                     onClick={()=> {
                      setOpenPopUp(false)
                      setItemUpdate({})
                      setEditShow(false)
                      }}
                       >
                        x
                     </Button>
            </div>
            </DialogTitle>


            <DialogContent dividers >
               {children}
            </DialogContent>
    </Dialog>
    </>
  )
}

export default MyPopUp
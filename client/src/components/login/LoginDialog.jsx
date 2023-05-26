import {React} from 'react'
import {Dialog} from '@mui/material';

function LoginDialog({open,setOpen}) {
    const handleClose= ()=>{
        setOpen(false)
    }
  return (
    <Dialog open={open} onClose={handleClose}>
        Hello
    </Dialog>
  )
}

export default LoginDialog;
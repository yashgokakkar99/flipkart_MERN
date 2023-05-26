import {React} from 'react'
import {Dialog,Box,TextField, Typography,Button,styled} from '@mui/material';

const Formstyle = styled(Box)`
  display:flex;
  flex-direction:column;
  padding:20px;
`;

const Textstyle = styled(Typography)`
  padding:10px;
  text-align:center;
  font-size:12px;
`;

const SignText = styled(Typography)`
  font-size:14px;
  font-weight:600;
  text-align:center;
`;

const LeftStyle = styled(Box)`
  background:#2874f0;
`;

const Log = styled(Box)`
  display:flex;
`;

const Btns = styled(Button)`
  background:#FB641B;
`;

const Logimg = styled('img')(
  {
    alignItems:'center',
    padding:20,
  }
)

function LoginDialog({open,setOpen}) {
    const handleClose= ()=>{
        setOpen(false)
    }
  return (
    <Dialog open={open} onClose={handleClose}>
      <Log>
        <LeftStyle>
          <Typography>Login</Typography>
          <Typography>
Get access to your Orders, Wishlist and Recommendations</Typography>
          <Logimg src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png" alt="loginimg" style={{width:200, height:140}}/>
        </LeftStyle>
        <Formstyle>
          <TextField variant="standard" label="Enter Email/mobile number"/>
          <TextField variant="standard" label="Enter Password"/>
          <Textstyle>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Textstyle>
          <Btns>Login</Btns>
          <Textstyle>OR</Textstyle>
          <Btns>Request OTP</Btns>
          <SignText>New to Flipkart? Create an account</SignText>
        </Formstyle>
      </Log>
    </Dialog>
  )
}

export default LoginDialog;
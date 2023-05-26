import {React,useState} from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LoginDialog from "../login/LoginDialog";

const Wrap = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  margin-left: 20px;
  padding:5px 40px;
  height: 35px;
  box-radius: 2px;
  box-shadow: none;
  font-weight: bold;

  & > :hover {
    color: #fff;
  }
`;

const CartWrap = styled(Box)`
  display: flex;
  align-items: center;
`;

const MoreWrap = styled(Box)`
  display: flex;
`;

const SellerWrap = styled(Box)`
  display:flex;
  align-items:center;
`;

function CustomButton() {
  const [open,setOpen]=useState(false);
    const openDialog=()=>{
        setOpen(true)
    }
  return (
    <Wrap>
      <LoginButton variant="contained" onClick={()=>openDialog()}>Login</LoginButton>
      <SellerWrap>
        <Typography style={{ marginTop: 0, width: 120 }}>
          Become a Seller
        </Typography>
      </SellerWrap>
      <MoreWrap>
        <Typography style={{ marginTop: 0 }}>More</Typography>
        <ArrowDown />
      </MoreWrap>

      <CartWrap>
        <ShoppingCartIcon />
        <Typography style={{ marginTop: 3 }}>Cart</Typography>
      </CartWrap>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrap>
  );
}

export default CustomButton;

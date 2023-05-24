import React from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDown from "@mui/icons-material/KeyboardArrowDown";

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
  return (
    <Wrap>
      <LoginButton variant="contained">Login</LoginButton>
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
    </Wrap>
  );
}

export default CustomButton;

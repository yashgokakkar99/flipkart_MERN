import React from 'react'
import {InputBase, Box, styled} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:10px;
    display:flex;
`;

const InputSearchBase = styled(InputBase)`
    padding-left:20px;
    width:100%;
    font-size:unset;
`;

const SearchIconWrapper = styled(Box)`
    color:#2874f0;
    padding:5px;
`

function Search() {
  return (
    <SearchBox>
        <InputSearchBase placeholder='Search for products, brands and more'/>
        <SearchIconWrapper>
            <SearchIcon/>
        </SearchIconWrapper>
    </SearchBox>
    
  )
}

export default Search
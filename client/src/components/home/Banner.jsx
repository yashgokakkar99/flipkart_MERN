import React from 'react'
import {bannerData} from '../../constants/data';
import Carousel from 'react-multi-carousel';
import {styled} from '@mui/material';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Image = styled('img')({
    width:'100%',
    height:230
})

function Banner() {
  return (
    <Carousel
        responsive={responsive}
    >
        {
            bannerData.map(data=>(
                <Image src={data.url} alt='banner'/>
            ))
        }
    </Carousel>
  )
}

export default Banner
import React from 'react';
import Image from 'next/image';

import { images } from '@/exports/images';

const Topbanner = () => {
  return (
    <div className='py-4'>
        <Image src={images.TopBanner} alt="Top banner"  className='img-fluid show-border'/>

        <h1 className='text-center'>We robbing banks to pay your $ETH </h1>
    </div>
  )
}

export default Topbanner
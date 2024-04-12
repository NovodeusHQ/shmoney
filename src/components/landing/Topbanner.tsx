import React from 'react';
import Image from 'next/image';
import styles from "../../app/page.module.css";
import { images } from '@/exports/images';

const Topbanner = () => {
  return (
    <div className='py-4'>
      <div className={`${styles.bannerContainer} mb-md-5`}>
        <h1 className={styles.shmoneyBanner}>SHMONEY</h1>
        <Image src={images.WattsWithGuns} alt="watts with guns" className={`${styles.guns} img-fluid`} />
      </div>
      <h1 className='text-center mt-md-5'>We robbing banks to pay your $ETH </h1>
    </div>
  )
}

export default Topbanner
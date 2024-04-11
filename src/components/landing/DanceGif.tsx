import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/images';
import styles from "../../app/page.module.css";

const DanceGif = () => {
  return (
    <div className='container-fluid px-0'>
        <Image src={images.DanceGif} alt="bobby shmurda dance gif"
        className={`${styles.shmurdaDanceGif}`} />
    </div>
  )
}

export default DanceGif
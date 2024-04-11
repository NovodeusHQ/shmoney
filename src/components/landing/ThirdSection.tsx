import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/images';
import styles from "../../app/page.module.css";

const ThirdSection = () => {
  return (
    <div className={`${styles.thirdSection} container-fluid`}>
        <div className="row">
            <div className="col-5">
                <Image src={images.SnoopDance} alt="snoop dancing gif" className={`${styles.snoopDanceGif} img-fluid`}/>
            </div>
            <div className={`${styles.gradientBorder} col-7`}>

            </div>
        </div>

        <div className="row">
            <div className={`${styles.gradientBorder} col-7`}>
                <Image src={images.UtilitiesFull} alt="utilities" />
            </div>
            <div className="col-5">
                <Image src={images.CoolDance} alt="snoop dancing gif" className={`${styles.snoopDanceGif} img-fluid`}/>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection
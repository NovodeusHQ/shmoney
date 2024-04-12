import React from 'react';
import Image from 'next/image';
import { images } from '@/exports/images';
import styles from "../../app/page.module.css";

const ThirdSection = () => {
  return (
    <div className={`${styles.thirdSection} container-fluid`}>
        <div className="row mb-md-4">
            <div className="col-12 col-md-5">
                <Image src={images.SnoopDance} alt="snoop dancing gif" className={`${styles.snoopDanceGif} img-fluid`}/>
            </div>
            <div className={`${styles.gradientBorder1} col-12 col-md-7`}>
                <div className={styles.gradientBorderFill}>
                    <Image src={images.SolReflection} alt="utilities" />
                    <h2 className='mt-4 py-4'>$SOL REFLECTION</h2>
                </div>
                <div className={styles.gradientMask}></div>
            </div>
        </div>

        <div className="row mt-md-4">
            <div className={`${styles.gradientBorder2} col-12 col-md-7`}>
                <div className={`${styles.gradientBorderFill}`}>
                    <Image src={images.AIUtilities} alt="utilities" />
                    <h2 className='mt-4 py-4'>AI UTILITIES</h2>
                </div>
                <div className={styles.gradientMask}></div>
            </div>
            <div className="col-12 col-md-5">
                <Image src={images.CoolDance} alt="snoop dancing gif" className={`${styles.snoopDanceGif} img-fluid`}/>
            </div>
        </div>
    </div>
  )
}

export default ThirdSection
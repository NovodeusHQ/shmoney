import React from 'react';
import styles from "../../app/page.module.css";
import Image from 'next/image';
import { images } from '@/exports/images';

const FourthSection = () => {
    return (
        <div className={styles.fourthSection}>
            <Image src={images.ShmoHead} alt="shmo head" />
            <h1>
                I’m the Big Dawg, I get Cat <br />
                and I MAKE YOU BREAD <br />
                LITERALLY
            </h1>
        </div>
    )
}

export default FourthSection
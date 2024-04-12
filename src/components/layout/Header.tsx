import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images, icons } from "../../exports/images";
import  styles  from "../../app/page.module.css";
import Socials from '../reusables/Socials';


const Header = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg px-5`}>
            <div className="container-fluid justify-content-center justify-content-md-between">
                <Link className="navbar" href="#">
                    <Image src={images.HeaderBrandLogo} alt="Nav brand logo" />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse show-border" id="navbarText"> */}
                    <ul className={`${styles.headerList} navbar-nav mb-2 mb-lg-0`}>
                        <li className="nav-item mx-2">
                            <Link className="nav-link active" aria-current="page" href="#">ABOUT</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" href="#">HOW TO BUY</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" href="#">DEXSCREENER</Link>
                        </li>
                    </ul>

                    <span className="navbar-text">
                    <Socials color='#7979FA42' />
                    </span>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Header
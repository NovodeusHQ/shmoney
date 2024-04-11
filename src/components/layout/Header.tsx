import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { images, icons } from "../../exports/images";
import  styles  from "../../app/page.module.css";


const Header = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg px-5`}>
            <div className="container-fluid justify-content-between show-border">
                <Link className="navbar-brand" href="#">
                    <Image src={images.HeaderBrandLogo} alt="Nav brand logo" />
                </Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                {/* <div className="collapse navbar-collapse show-border" id="navbarText"> */}
                    <ul className={`${styles.headerList} navbar-nav mb-2 mb-lg-0 header-list show-border`}>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="#">ABOUT</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">HOW TO BUY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="#">DEXSCREENER</Link>
                        </li>
                    </ul>

                    <span className="navbar-text">
                        <div>
                            <Image src={icons.twitter} alt="twitter logo" /> &nbsp; &nbsp;
                            <Image src={icons.telegram} alt="telegram logo" /> &nbsp; &nbsp;
                            <Image src={icons.eagle} alt="eagle logo" />
                        </div>
                    </span>
                </div>
            {/* </div> */}
        </nav>
    )
}

export default Header
import React from 'react';
import Image from 'next/image';
import { icons } from '@/exports/images';
import { SocialsProps, ISocials } from '@/types/components';

const Socials: React.FC<SocialsProps> = ({ color }) => {
    const socials: Array<ISocials> = [
        {
            name: 'twitter',
            logo: icons.twitter
        },
        {
            name: 'telegram',
            logo: icons.telegram
        },
        {
            name: 'twitter',
            logo: icons.eagle
        },
    ]

    return (
        <div className='row'>
            {socials.map((social, idx) => {
                return (
                    <div key={idx}
                        style={{ width: '60px', height: '60px', backgroundColor: color }}
                        className='d-flex justify-content-center align-items-center mx-2'
                    >
                        <Image src={social.logo} alt={`${social.name} account`} />
                    </div>
                )
            })}
        </div>
    )
}

export default Socials;
import React from 'react'
import styles from '@/styles/nav.module.css'
import Image from 'next/image'
const Nav = () => {
    return (
        <div className={styles.NavContainer}>
            <Image src={'/pokemon-logo.svg'}  alt='pokemon-logo' width={153} height={56}/>
            <div className={styles.IconSocials}>
                <a href='https://github.com/lucaszebre' target='_blank'>
                    <Image  src={'/assets/logo-github.svg'} alt={'github-logo'} width={32} height={32}/>
                </a>
                <a href="https://www.linkedin.com/in/lucas-zebre-22305a191/" target='_blank'>
                    <Image src={'/assets/logo-linkedin.svg'} alt={'linkedin-logo'} width={32} height={32} />
                </a>
            </div>
        </div>
    )
}

export default Nav

import React from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/logo.svg'
import Image from 'next/image'
import { useRouter } from 'next/router'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const Header = () => {
    const router = useRouter()
  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.wrapper}>
                <div className={styles.logo} onClick={()=>router.push('/')}>
                    <Image src={logo} alt='logo' width={115} height={32}/>
                </div>
                <ThemeSwitcher/>
            </div>
        </div>
    </header>
  )
}

export default Header
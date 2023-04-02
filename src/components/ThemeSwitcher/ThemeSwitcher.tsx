import { useEffect, useState } from "react"
import  moon   from "../../assets/icon-moon.svg"
import  sun   from "../../assets/icon-sun.svg"
import styles from './ThemeSwitcher.module.scss'
import Image from "next/image"


const ThemeSwitcher = () => {
    const [isDark, setIsDark] =useState(false)
    const themeIcon = isDark? 'dark': 'light'
    useEffect(()=> {
        document.body.setAttribute('data-theme' , isDark? 'dark': 'light')
    }, [isDark])
  return (
    <div className={styles.toggle} >
         <Image src={sun} alt="dsf" />
         <button
        className={styles.toggleButton}
        data-active-theme={themeIcon}
        onClick={()=> setIsDark(!isDark)}
        ></button>
          <Image src={moon} alt="dsf" />
       
    </div>
  )
}

export default ThemeSwitcher
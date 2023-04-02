import { useEffect, useState } from "react"
import  moon   from "../../assets/icon-moon.svg"
import  sun   from "../../assets/icon-sun.svg"
import styles from './ThemeSwitcher.module.scss'
import Image from "next/image"


const ThemeSwitcher = () => {
    //@ts-ignore
    const [isDark, setIsDark] =useState(false)
    const themeIcon = isDark? 'dark': 'light'
   
    useEffect(()=> {
      if(localStorage.getItem('theme')===null) {
        localStorage.setItem('theme', JSON.stringify(isDark))
      }
      if(localStorage.getItem('theme')!==null) {
        //@ts-ignore
        setIsDark(JSON.parse(localStorage.getItem('theme')))
      }
    },[])

    useEffect(()=> {
        document.body.setAttribute('data-theme' , isDark? 'dark': 'light')
    }, [isDark])

    const themeSwitcher =()=> {
      setIsDark(!isDark)
      localStorage.setItem('theme', JSON.stringify(!isDark))
    }
  return (
    <div className={styles.toggle} >
         <Image src={sun} alt="dsf" />
         <button
        className={styles.toggleButton}
        data-active-theme={themeIcon}
        
        onClick={themeSwitcher}
        ></button>
          <Image src={moon} alt="dsf" />
       
    </div>
  )
}

export default ThemeSwitcher
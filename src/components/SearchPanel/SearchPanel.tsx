import React, { useEffect, useState } from 'react'
import styles from './SearchPanel.module.scss'
import searchIcon from '../../assets/icon-search.svg'
import searchIconWhite from '../../assets/icon-search-white.svg'
import locationIcon from '../../assets/icon-location.svg'
import checkIcon from '../../assets/icon-check.svg'
import filtericon from '../../assets/icon-filter.svg'
import Image from 'next/image'
import Button from '@/UI/Button/Button'
import Modal from '../Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setCheck, setFilterLocation, setFilterTitle} from '@/store/slice'
import { motion } from 'framer-motion'

const SearchPanel = () => {
    const dispatch = useDispatch<AppDispatch>()
    const [openModal, setOpenModal] = useState(false)
    const {filterLocation,filterTitle,check} = useSelector((item:RootState)=> item.filter)
    useEffect(()=> {
      document.body.addEventListener('click',()=> {
          setOpenModal(false)
      })
      return (
          document.body.removeEventListener('click',()=> {
              setOpenModal(false)
          })
      )
    },[])

    useEffect(()=> {
        if(openModal) {
          document.body.style.overflow = "hidden";
        }
        if(!openModal) {
          document.body.style.overflow = "scroll";
        }
      },[openModal])

  const handleOpen = (e:React.MouseEvent<HTMLImageElement, MouseEvent>)=> {
    e.stopPropagation()
    setOpenModal(true)
  }
  return (
    <>
    <motion.div className="container"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4 }}>
       <div className={styles.wrapper}>
            <div className={styles.input_wrapper}>
                <Image src={searchIcon} alt="search" width={24} height={24} className={styles.img}/>
                <input type="text" value={filterTitle} onChange={(e)=>dispatch(setFilterTitle(e.target.value))} className={styles.input} placeholder='Filter by title...' />
                <Image src={filtericon} alt="search" width={20} height={20} className={styles.img_filter} onClick={handleOpen}/>
                
            </div>
            <div className={styles.input_wrapper_desktop}>
                <Image src={locationIcon} alt="search" width={17} height={24} className={styles.img}/>
                <input type="text"  value={filterLocation} onChange={(e)=>dispatch(setFilterLocation(e.target.value))} className={styles.input}  placeholder='Filter by location...'/>
            </div>
            <div className={styles.checkbox_wrapper}>
               <div className={styles.btn_wrapper}>
                    <button className={!check? styles.btn: styles.btn_active} onClick={()=>dispatch(setCheck(!check))}>
                    {check && <Image src={checkIcon} alt="search" width={12} height={12} className={styles.img}/>}
                    
                    </button>
                    <p className={styles.text} >Full Time</p>
               </div>
            </div>
            
        </div>
    </motion.div>
     {openModal &&  <Modal setOpenModal={setOpenModal} openModal={openModal}/>}
    </>
  )
}

export default SearchPanel
import React, { useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import locationIcon from '../../assets/icon-location.svg'
import Image from 'next/image'
import Button from '@/UI/Button/Button'
import checkIcon from '../../assets/icon-check.svg'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store/store'
import { setCheck, setFilterLocation } from '@/store/slice'
import { motion } from 'framer-motion'
interface IModal {
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>
    openModal: boolean
}

const Modal = ({setOpenModal,openModal}: IModal) => {
    const dispatch = useDispatch<AppDispatch>()
    const {filterLocation,filterTitle,check} = useSelector((item:RootState)=> item.filter)
    
  
  
  return (
    <div className={styles.overlay}
    >
        <motion.div className={styles.wrapper} onClick={(e)=> e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}>
            <div className={styles.input_wrapper}>
                    <Image src={locationIcon} alt="search" width={17} height={24} className={styles.img}/>
                    <input type="text" value={filterLocation} onChange={(e)=>dispatch(setFilterLocation(e.target.value))} className={styles.input}  placeholder='Filter by location...'/>
            </div>
            <div className={styles.checkbox_wrapper}>
               <div className={styles.btn_wrapper}>
                    <button className={!check? styles.btn: styles.btn_active} onClick={()=>dispatch(setCheck(!check))}>
                    {check && <Image src={checkIcon} alt="search" width={12} height={12} className={styles.img}/>}
                    
                    </button>
                    <p className={styles.text}>Full Time</p>
               </div>
              
                
            </div>
            <Button className={styles.btn_search} onClick={()=>setOpenModal(false)}>Close</Button>
        </motion.div>
        
       
    </div>
  )
}

export default Modal